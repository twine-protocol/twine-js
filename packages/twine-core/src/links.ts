/**
 * Get the highest layer for which this (pulse) index
 * is an anchor for.
 * For example: in base 10, for the following indicies...
 * ```
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

