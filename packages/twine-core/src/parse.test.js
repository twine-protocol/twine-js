import { describe, test, expect } from 'bun:test'
import { fromJSON, fromBytes } from './conversion'
import * as mock from '../mock-data.js'
import { isChain, isPulse } from './checks'

describe('parsing', () => {
  test('fromJSON on chain', async () => {
    const chain = await fromJSON(mock.chainJSON)
    expect(chain).toBeDefined()
    expect(isChain(chain)).toBe(true)
  })

  test('fromJSON on pulse', async () => {
    const pulse = await fromJSON(mock.pulseJSON)
    expect(pulse).toBeDefined()
    expect(isPulse(pulse)).toBe(true)
  })

  test('fromBytes on chain', async () => {
    const chain = await fromBytes({ bytes: mock.chain.bytes, cid: mock.chain.cid })
    expect(chain).toBeDefined()
    expect(isChain(chain)).toBe(true)
  })

  test('fromBytes on pulse', async () => {
    const pulse = await fromBytes({ bytes: mock.pulse.bytes, cid: mock.pulse.cid })
    expect(pulse).toBeDefined()
    expect(isPulse(pulse)).toBe(true)
  })
})
