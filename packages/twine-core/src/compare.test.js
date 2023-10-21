import { describe, expect, test } from 'bun:test'
import { mixinDiff } from './compare'
import * as mockData from '../mock-data.js'

describe('mixinDiff', () => {
  test('should return empty array for same mixins', async () => {
    const diff = mixinDiff([mockData.orphanPulse, mockData.pulse], [mockData.pulse, mockData.orphanPulse])
    await expect(diff).toStrictEqual([])
  })

  test('should detect different mixins', async () => {
    const diff = mixinDiff([mockData.pulse], [mockData.pulse, mockData.orphanPulse])
    await expect(diff).toStrictEqual([mockData.orphanPulse])
  })
})