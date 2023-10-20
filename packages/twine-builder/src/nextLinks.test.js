import { describe, test, expect } from 'bun:test'
import { getNextLinks } from './factory'

const mockChain = radix => ({
  value: { content: { skip_radix: radix } },
})
const mockPulse = (index, links) => ({
  value: {
    content: {
      index,
      links,
    },
  },
  cid: `${index}`,
})
describe('getNextLinks()', () => {
  test('should advance appropriately', () => {
    const chain = mockChain(10)
    const previous = mockPulse(110, [
      '109', '100', '100'
    ])
    const next = getNextLinks(chain, previous)
    expect([
      '110', '110', '100'
    ]).toEqual(next)
  })

  test('should handle radix 0', () => {
    const chain = mockChain(0)
    const previous = mockPulse(3, [
      '2'
    ])
    const next = getNextLinks(chain, previous)
    expect([
      '3'
    ]).toEqual(next)
  })

  test('should reject radix 1', () => {
    const chain = mockChain(1)
    const previous = mockPulse(3, [
      '2', '1', '0'
    ])
    expect(() => getNextLinks(chain, previous)).toThrow()
  })

  test('should handle radix 2 pulse 4', () => {
    const chain = mockChain(2)
    const previous = mockPulse(4, [
      '3', '2'
    ])
    const next = getNextLinks(chain, previous)
    expect([
      '4', '4', '4'
    ]).toEqual(next)
  })

  test('should handle radix 2 pulse 6', () => {
    const chain = mockChain(2)
    const previous = mockPulse(6, [
      '5', '4', '4'
    ])
    const next = getNextLinks(chain, previous)
    expect([
      '6', '6', '4'
    ]).toEqual(next)
  })

  test('should handle pulse 0', () => {
    const chain = mockChain(2)
    const previous = mockPulse(0, [])
    const next = getNextLinks(chain, previous)
    expect([
      '0'
    ]).toEqual(next)
  })
})