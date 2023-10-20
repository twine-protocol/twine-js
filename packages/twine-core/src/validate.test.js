import { describe, test, expect } from 'bun:test'
import * as mock from '../mock-data.js'
import { fromJSON } from './conversion'

describe('tests for invalid pulses', () => {
  test('invalid signature', async () => {
    const pulse = await fromJSON(mock.pulse.toJSON())
    expect(pulse.verifySignature(mock.chain)).resolves.toBe(true)
    pulse.value.signature = 'invalid'
    expect(pulse.verifySignature(mock.chain)).rejects.toBeDefined()
  })

  test('invalid key', async () => {
    const chain = await fromJSON(mock.chain.toJSON())
    expect(chain.verifySignature()).resolves.toBe(true)
    chain.value.content.key.n += 'foo'
    expect(chain.verifySignature()).rejects.toBeDefined()
  })

  test('invalid payload', async () => {
    const pulse = await fromJSON(mock.pulse.toJSON())
    pulse.value.content.payload = { foo: 'bar' }
    expect(pulse.verifySignature(mock.chain)).rejects.toBeDefined()
  })
})