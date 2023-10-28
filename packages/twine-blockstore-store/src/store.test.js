import { describe, test, expect, beforeAll } from 'bun:test'
import { BlockstoreStore } from '.'
import { MemoryDatastore } from 'datastore-core'
import { MemoryBlockstore } from 'blockstore-core/memory'
import { createChain, createPulse, JoseSigner } from '@twine-protocol/twine-builder'

async function collect(iterable, count) {
  const items = []
  for await (const item of iterable) {
    items.push(item)
    if (count && items.length >= count) break
  }
  return items
}

describe('Blockstore Store', () => {
  let store
  let chains = []
  let pulses = []
  beforeAll(async () => {
    store = new BlockstoreStore(new MemoryDatastore(), new MemoryBlockstore())
    const signer = await JoseSigner.fromRandomness('RS256', { modulusLength: 2048 })
    const chain = await createChain({ source: 'test', links_radix: 3 }, signer)
    chains.push(chain)
    const pulse = await createPulse(chain, false, {}, signer)
    pulses.push(pulse)
    const pulse1 = await createPulse(chain, pulse, {}, signer)
    pulses.push(pulse1)

    const chain2 = await createChain({ source: 'test2', links_radix: 3 }, signer)
    chains.push(chain2)
    const pulse22 = await createPulse(chain, false, {}, signer)
    pulses.push(pulse22)
    const pulse21 = await createPulse(chain, pulse, {}, signer)
    pulses.push(pulse21)
  })

  test('should store chains', async () => {
    await store.save(chains[0])
    const { chain } = await store.resolve({ chain: chains[0].cid })
    expect(chain.cid.toString()).toEqual(chains[0].cid.toString())
  })

  test('should return null for non-existent chains', async () => {
    const { chain } = await store.resolve({ chain: chains[1].cid })
    expect(chain).toBeNull()
  })

  test('should store pulses', async () => {
    await store.save(pulses[0])
    const { pulse } = await store.resolve({ pulse: pulses[0].cid })
    expect(pulse.cid.toString()).toEqual(pulses[0].cid.toString())
  })

  test('should store many pulses', async () => {
    await store.saveMany(pulses)
    const res1 = await store.resolve({ pulse: pulses[0].cid })
    expect(res1.pulse.cid.toString()).toEqual(pulses[0].cid.toString())
    const res2 = await store.resolve({ pulse: pulses[1].cid })
    expect(res2.pulse.cid.toString()).toEqual(pulses[1].cid.toString())
  })

  test('should delete pulses', async () => {
    await store.saveMany(pulses)
    await store.delete(pulses[1].cid)
    const res = await store.resolve({ pulse: pulses[1].cid })
    expect(res.pulse).toBeNull()
  })

  test('should iterate over pulses', async () => {
    await store.saveMany(pulses)
    const res = await collect(store.pulses(chains[0].cid))
    expect(res.length).toEqual(2)
  })

})