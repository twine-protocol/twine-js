import { describe, test, expect, beforeEach } from 'bun:test'
import { MemoryStore } from './memory-store'
import * as mockData from '../../mock-data.js'

describe('MemoryStore', () => {
  let store
  beforeEach(() => { store = new MemoryStore(2) })

  describe('.resolveLatest()', () => {
    test('should resolve the latest pulse', () => {
      store.save(mockData.chain2pulse2)
      expect(
        store.resolveLatest(mockData.chain2)
      ).resolves.toEqual({
        chain: mockData.chain2,
        pulse: mockData.chain2pulse2
      })
    })

    test('should update latest pulse', () => {
      store.save(mockData.chain2pulse2)
      store.save(mockData.chain2pulse3)
      expect(
        store.resolveLatest(mockData.chain2)
      ).resolves.toEqual({
        chain: mockData.chain2,
        pulse: mockData.chain2pulse3
      })
    })
  })
})
