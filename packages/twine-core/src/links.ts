/**
 * Get the highest layer for which this (pulse) index
 * is an anchor for.
 * For example: in base 10, for the following indicies...
 *
 * @group Skiplist
 *
 * @example
 * ```js
 * getLayerPos(10, 1560) == 1 // (multiple of 10)
 * getLayerPos(10, 1264) == 0 // (NOT a multiple of 10)
 * getLayerPos(10, 3000) == 3 // (multiple of 1000)
 * getLayerPos(10, 3700) == 2 // (multiple 100)
 * ```
 */
export const getLayerPos = (radix: number, index: number) => {
  index = (index | 0)
  radix = (radix | 0)
  if (index === 0) { return 0 }

  if (radix === 1) {
    return index
  }

  if (radix < 1) {
    throw new Error('Radix must be >= 1')
  }
  if (index < 0) {
    throw new Error('Index must be a positive integer')
  }
  let m = radix
  let result = 1

  while (index % m === 0) {
    m *= radix
    result += 1
  }

  return (result - 1)
}

/**
 * Get an iterator of indices that can be used to skip through the chain.
 *
 * This can either provide the pulse indices themselves or a list of
 * array indices of the links list for each pulse along the path.
 *
 * This will not include the from/to indices themselves.
 *
 * A radix of 1 doesn't make sense since `1^r` is always `1`.
 *
 * A radix of 0 is interpreted as no radix skipping, so the list
 * just has the previous pulse cid, therefore a radix 0 skiplist
 * is just a decreasing list of pulse indices.
 *
 * @group Skiplist
 *
 * @param radix - The radix used for the chain
 * @param fromIndex - The higher index
 * @param toIndex - The lower index
 * @param byLink - If true, will return the list of array indices for the links list
 *
 * @example
 * ```js
 * const radix = 10
 * const fromIndex = 23
 * const toIndex = 5
 * const actual = Array.from(skipList(radix, fromIndex, toIndex))
 * // actual == [ 20, 10, 9, 8, 7, 6 ]
 * // because... 23 is in the `n * 10^1` range so it's links list should have `[22, 20]`
 * // same deal for 20 which has links `[19, 10]` so we can skip to 10
 * // then we get to the `n * 10^0` range and we can skip to 9, 8, 7, 6
 *
 * // The array indices for this correspond to jumps of
 * // `10^1`, `10^1`, `10^0`, `10^0`, `10^0`, `10^0`
 * // so the array indices would be `[1, 1, 0, 0, 0, 0]`
 *
 * Array.from(skipList(10, 23, 5, true)) // == [ 1, 1, 0, 0, 0, 0 ]
 * ```
 */
export function* skipList(radix: number, fromIndex: number, toIndex: number, byLink = false) {
  if (radix === undefined || fromIndex === undefined || toIndex === undefined) {
    throw new Error('Must specify "fromIndex", "toIndex", and "radix"')
  }

  if (radix === 1) {
    throw new Error('Invalid radix')
  }

  // no path
  if (toIndex >= fromIndex) {
    return
  }

  // get the highest common base power
  // ex: in base 10... 1483 and 1534 would be 1530
  const diff = fromIndex - toIndex // ex: this would be 51
  const startq = Math.floor(Math.log(diff) / Math.log(radix))
  // ex: this would be (1534 // 10^1) * 10^1 => 1530
  let curr = Math.floor(fromIndex / Math.pow(radix, startq)) * Math.pow(radix, startq)

  if (curr !== fromIndex) {
    if (byLink) {
      yield startq
    } else {
      yield curr
    }
  }

  // start at current power, decrement to zero
  for (let q = Math.abs(startq); q >= 0; q--) {
    if (curr < toIndex) { break }

    const pow = Math.pow(radix, q)
    while (curr - pow > toIndex) {
      // decrease by one base power each time and add to list
      curr -= pow
      if (byLink) {
        yield q
      } else {
        yield curr
      }
    }
  }
}

