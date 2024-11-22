import { Mixin } from './types'
import { asMixin } from './conversion'

/**
 * Compare two mixin lists and return the differences
 *
 * Useful for checking if mixins have changed from one pulse to another.
 *
 * @category Comparison
 */
export const mixinDiff = (reference: Mixin[], toCheck: Mixin[]) => {
  const ref = reference.map(asMixin)
  if (ref.some(a => !a)) {
    throw new Error('Invalid mixin list')
  }
  return toCheck.filter(m => {
    const mix = asMixin(m)
    if (!mix) {
      throw new Error('Invalid mixin list')
    }
    const other = ref.find((a) =>
      mix.chain.equals(a?.chain)
    )
    if (!other) { return true }
    return !other.value.equals(mix.value)
  })
}