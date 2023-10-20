import { describe, test, expect } from 'bun:test'
import { fromJSON, fromBytes } from './conversion'
import * as mockData from '../mock-data.js'
import { isChain, isPulse } from './checks'

describe('parsing', () => {
  test('fromJSON on chain', async () => {
    const chain = await fromJSON(mockData.chainJSON)
    expect(chain).toBeDefined()
    expect(isChain(chain)).toBe(true)
  })

  test('fromJSON on pulse', async () => {
    const pulse = await fromJSON(mockData.pulseJSON)
    expect(pulse).toBeDefined()
    expect(isPulse(pulse)).toBe(true)
  })

  test('fromBytes on chain', async () => {
    const chain = await fromBytes({ bytes: mockData.chain.bytes, cid: mockData.chain.cid })
    expect(chain).toBeDefined()
    expect(isChain(chain)).toBe(true)
  })

  test('fromBytes on pulse', async () => {
    const pulse = await fromBytes({ bytes: mockData.pulse.bytes, cid: mockData.pulse.cid })
    expect(pulse).toBeDefined()
    expect(isPulse(pulse)).toBe(true)
  })
})
