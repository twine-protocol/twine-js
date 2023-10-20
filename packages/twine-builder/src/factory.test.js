import { describe, test, expect, beforeAll } from 'bun:test'
import { CID } from 'multiformats/cid'
import { createChain, createPulse } from './factory'
import { JoseSigner } from './jose-signer'

describe('Chain creation', async () => {
  let signer = await JoseSigner.fromRandomness('RS256', { modulusLength: 2048 })
  let chain
  const pulses = []
  test('should create a chain', async () => {
    chain = await createChain({ source: 'test', links_radix: 3 }, signer)
    await chain.verifySignature()
  })

  test('should create pulses', async () => {
    const pulse = await createPulse(chain, false, {}, signer)
    await pulse.verifySignature(chain)
    pulses.push(pulse)
    const pulse1 = await createPulse(chain, pulse, {}, signer)
    await pulse1.verifySignature(chain)
    pulses.push(pulse1)
  })

  test('should not validate pulses from another chain', async () => {
    const other = await createChain({ source: 'test1', links_radix: 3 }, signer)
    expect(pulses[0].verifySignature(other)).rejects.toBeDefined()
  })

  test('should not mixin with own pulses', async () => {
    expect(createPulse(chain, pulses[1], { mixins: [pulses[0]] }, signer)).rejects.toBeDefined()
  })

  test('should mixin with another chain', async () => {
    const other = await createChain({ source: 'test2', links_radix: 3 }, signer)
    const otherPulse = await createPulse(other, false, {}, signer)
    await createPulse(chain, pulses[1], { mixins: [otherPulse] }, signer)
  })

  test('should preserve mixin order from previous pulse', async () => {
    const otherChains = [
      await createChain({ source: 'test3', links_radix: 3 }, signer)
      , await createChain({ source: 'test4', links_radix: 3 }, signer)
      , await createChain({ source: 'test5', links_radix: 3 }, signer)
    ]
    const otherPulses = [
      await createPulse(otherChains[0], false, {}, signer)
      , await createPulse(otherChains[1], false, {}, signer)
      , await createPulse(otherChains[2], false, {}, signer)
    ]
    const two = await createPulse(chain, pulses[1], { mixins: otherPulses }, signer)
    const newChain = await createChain({ source: 'test6', links_radix: 3 }, signer)
    const newPulse = await createPulse(newChain, false, {}, signer)
    const three = await createPulse(chain, two, {
      mixins: [otherPulses[2], newPulse, otherPulses[1], otherPulses[0]]
    }, signer)
    expect(three.value.content.mixins[0].chain.toString()).toEqual(otherChains[0].cid.toString())
    expect(three.value.content.mixins[1].chain.toString()).toEqual(otherChains[1].cid.toString())
    expect(three.value.content.mixins[2].chain.toString()).toEqual(otherChains[2].cid.toString())
    expect(three.value.content.mixins[3].chain.toString()).toEqual(newChain.cid.toString())
  })

  test('should encode payloads with CIDs correctly', async () => {
    const payload = { aCid: pulses[0].cid }
    const pulse = await createPulse(chain, pulses[1], { payload }, signer)
    await pulse.verifySignature(chain)
    const cid = pulse.value.content.payload.aCid
    expect(cid).toBeInstanceOf(CID)
    expect(cid.equals(payload.aCid)).toBeTrue()
  })

  test('should convert Twines in payloads to be CIDs', async () => {
    const payload = { aTwine: pulses[0] }
    const pulse = await createPulse(chain, pulses[1], { payload }, signer)
    await pulse.verifySignature(chain)
    const cid = pulse.value.content.payload.aTwine
    expect(cid).toBeInstanceOf(CID)
    expect(cid.equals(payload.aTwine.cid)).toBeTrue()
  })
})
