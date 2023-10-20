import { describe, test, expect } from 'bun:test'
import * as mockData from '../mock-data.js'
import { fromJSON } from './conversion'

describe('pulse validation', () => {
  test('invalid signature', async () => {
    const pulse = await fromJSON(mockData.pulse.toJSON())
    expect(pulse.verifySignature(mockData.chain)).resolves.toBe(true)
    pulse.value.signature = 'invalid'
    expect(pulse.verifySignature(mockData.chain)).rejects.toBeDefined()
  })

  test('invalid key', async () => {
    const chain = await fromJSON(mockData.chain.toJSON())
    expect(chain.verifySignature()).resolves.toBe(true)
    chain.value.content.key.n += 'foo'
    expect(chain.verifySignature()).rejects.toBeDefined()
  })

  test('invalid payload', async () => {
    const pulse = await fromJSON(mockData.pulse.toJSON())
    pulse.value.content.payload = { foo: 'bar' }
    expect(pulse.verifySignature(mockData.chain)).rejects.toBeDefined()
  })

  test('reject signature from different pulse', async () => {
    const pulse = await fromJSON(mockData.chain2pulse2.toJSON())
    pulse.value.signature = mockData.chain2pulse3.value.signature
    expect(pulse.verifySignature(mockData.chain2)).rejects.toBeDefined()
  })
})