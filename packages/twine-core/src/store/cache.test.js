import { describe, test, expect, beforeEach } from 'bun:test'
import { TwineCache } from './memory-store'
import * as mockData from '../../mock-data.js'

describe('TwineCache', () => {
  let cache
  beforeEach(() => { cache = new TwineCache(2) })

  describe('.save()', () => {
    test('should not accept null or undefined', () => {
      expect(() => cache.save(null)).toThrow()
      expect(() => cache.save(undefined)).toThrow()
    })
  })

  describe('.fetch()', () => {
    test('should get a Twine from a string representation of the CID', () => {
      cache.save(mockData.pulse)
      expect(
        cache.fetch(mockData.pulse.cid.toString())
      ).toEqual(mockData.pulse)
    })
  })

  describe('.delete()', () => {
    test('should delete from CID', () => {
      cache.save(mockData.pulse)
      cache.delete(mockData.pulse.cid)
      expect(
        cache.fetch(mockData.pulse.cid)
      ).toBeFalsy()
    })
  })

  describe('persistence', () => {
    test('should maintain maxSize', async () => {
      cache.save(mockData.chain)
      cache.save(mockData.pulse)
      cache.save(mockData.orphanPulse)
      cache.save(mockData.chain2pulse2)
      expect(cache.fetch(mockData.pulse)).toBeFalsy()
      cache.save(mockData.pulse)
      expect(cache.fetch(mockData.orphanPulse)).toBeFalsy()
    })

    test('should order cache based on adds', () => {
      cache.save(mockData.pulse)
      cache.save(mockData.orphanPulse)
      cache.setMaxSize(1)
      expect(
        cache.fetch(mockData.pulse.cid)
      ).toBeFalsy()
    })

    test('should reorder cache based on gets', () => {
      cache.save(mockData.pulse)
      cache.save(mockData.orphanPulse)
      cache.fetch(mockData.pulse.cid)
      cache.setMaxSize(1)
      expect(
        cache.fetch(mockData.orphanPulse.cid)
      ).toBeFalsy()
    })
  })
})
