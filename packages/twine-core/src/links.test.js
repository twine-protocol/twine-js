import { describe, test, expect } from 'bun:test'
import { skipList } from './links'

describe('skipList()', () => {
  test('should return straight list for radix 0', () => {
    const actual = Array.from(skipList(0, 10, 1))
    expect(actual).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2])
  })

  test('should return list of indices for radix 10', () => {
    const actual = Array.from(skipList(10, 23, 5))
    expect(actual).toStrictEqual([ 20, 10, 9, 8, 7, 6 ])
  })

  test('should return list of array indices for radix 10', () => {
    const actual = Array.from(skipList(10, 23, 5, true))
    expect(actual).toStrictEqual([1, 1, 0, 0, 0, 0])
  })

  test('should return list of 0s for radix 0', () => {
    const actual = Array.from(skipList(0, 10, 1, true))
    expect(actual).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0])
  })

  test('should return straight list for range within radix', () => {
    const actual = Array.from(skipList(32, 30, 21))
    expect(actual).toStrictEqual([ 29, 28, 27, 26, 25, 24, 23, 22 ])
  })

  test('should return list of 0s for range within radix', () => {
    const actual = Array.from(skipList(32, 30, 21, true))
    expect(actual).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0])
  })

  test('should give appropriate list for radix 2', () => {
    const actual = Array.from(skipList(2, 10, 1))
    expect(actual).toStrictEqual([ 8, 4, 2 ])
  })

  test('should give appropriate indices radix 2', () => {
    const actual = Array.from(skipList(2, 10, 1, true))
    expect(actual).toStrictEqual([3, 2, 1])
  })
})