import type { Mixin, Pulse, IntoCid, ChainContent, JWK, PulseContent, AnyMap } from '@twine-protocol/twine-core'
import { CID } from 'multiformats'
import { asMixin, coerceCid, isTwine, IntoMixin } from '@twine-protocol/twine-core'
import { isObjectLike, isPlainObject } from './checks'

/**
 * Chain content accepted by the builder
 */
export interface UnsanitizedChainContent<M extends AnyMap> {
  /**
   * Short identifier to denote the source producing this chain
   */
  source: string
  /**
   * Twine specification (eg: "twine/1.0.x/my-spec/1.0.0")
   */
  , specification?: string
  /**
   * JWK to sign the chain
   */
  , key?: JWK
  /**
   * Radix for links
   *
   * A value of 1 is not allowed
   *
   * A value of 0 is interpreted as a no-radix list. Pulses will just be linked to their previous pulse.
   *
   * @default 32
   */
  , links_radix?: number
  /**
   * List of mixins
   */
  , mixins?: IntoMixin[]
  /**
   * General Metadata
   */
  , meta?: M
}

/**
 * Pulse content accepted by the builder
 */
export interface UnsanitizedPulseContent {
  /**
   * Chain CID this pulse belongs to
   */
  chain: IntoCid
  /**
   * Short identifier to denote the source producing this pulse
   */
  , source: string
  /**
   * Index of this pulse
   */
  , index: number
  /**
   * List of links on the same chain
   */
  , links: IntoCid[]
  /**
   * List of mixins to other chains
   */
  , mixins: IntoMixin[]
  /**
   * User specified payload
   */
  , payload: object
}

export const sanitizeMixins = (mixins: IntoMixin[], chainCid?: CID) => {
  const parsedMixins = mixins.map(asMixin)
  if (!parsedMixins.every(m => m !== null)) {
    throw new Error('Mixins must be valid twine instances or objects with chain/value cids')
  }
  if (chainCid && parsedMixins.some(m => chainCid.equals(m!.chain))) {
    throw new Error('Rejected mixin value from own chain')
  }
  const mixinCids = new Set(parsedMixins.map(m => m!.chain.toString()))
  if (mixinCids.size !== parsedMixins.length) {
    throw new Error('Mixins can not have duplicate chain cids')
  }
  return parsedMixins as Mixin[]
}

export const correctlyOrderedMixins = (mixins: Mixin[], previous: Pulse | false) => {
  if (previous === false) { return mixins }
  // Ensure that the mixins are in the same order as the previous pulse mixins
  const previousMixins = previous.value.content.mixins
  mixins = mixins.slice(0)
  const ret = previousMixins.reduce<Mixin[]>((acc, m) => {
    const i = mixins.findIndex(mix => m.chain.equals(mix.chain))
    if (i === -1) {
      throw new Error('Missing mixin from previous pulse')
    }
    const out = mixins.splice(i, 1)[0]
    acc.push(out)
    return acc
  }, [])
  return ret.concat(mixins)
}

export const sanitizeLinks = (links: IntoCid[]) => {
  return links.map(l => coerceCid(l))
}

export const sanitizePayload = (payload: object): AnyMap => {

  function recurse(value: any): any {
    if (isTwine(value)) {
      return value.cid
    }
    if (CID.asCID(value)) {
      return value
    }
    if (ArrayBuffer.isView(value)) {
      return value
    }
    if (Array.isArray(value)) {
      return value.map(recurse)
    }
    if (isObjectLike(value)) {
      if (!isPlainObject(value)) {
        if (value.bytes instanceof Uint8Array) { return value.bytes }
        throw new Error('Payload can not contain complex objects')
      }
      const out: { [key: string]: any } = {}
      for (const [key, v] of Object.entries(value)) {
        out[key] = recurse(v)
      }
      return out
    }
    return value
  }
  if (!isObjectLike(payload)) {
    throw new Error('Payload must be an object')
  }
  return recurse(payload)
}

/**
 * @param {object} param0
 * @param {string} param0.source
 * @param {string} param0.specification
 * @param {Types.JWK} param0.key
 * @param {number} param0.links_radix
 * @param {any[]} param0.mixins
 * @param {object} param0.meta
 * @returns {Types.ChainContent}
 */
export const sanitizeChainContent = ({
  source,
  specification,
  key,
  links_radix = 32,
  mixins = [],
  meta = {}
}: UnsanitizedChainContent<any>): ChainContent => {

  mixins = sanitizeMixins(mixins)
  meta = sanitizePayload(meta)

  if (typeof source !== 'string') {
    throw new Error('Property "source" must be a string')
  }

  if (typeof specification !== 'string') {
    throw new Error('Property "specification" must be a string')
  }

  if (!Number.isSafeInteger(links_radix) || links_radix === 1 || links_radix < 0) {
    throw new Error('Property "links_radix" must be an integer > 1')
  }

  if (!key) {
    throw new Error('Missing property "key"')
  }

  return {
    source
    , specification
    , key
    , links_radix
    , mixins: mixins as Mixin[]
    , meta
  }
}

export const sanitizePulseContent = ({
  chain
  , source
  , index
  , links
  , mixins
  , payload
}: UnsanitizedPulseContent, previous: Pulse | false): PulseContent => {
  const chainCid = CID.asCID(chain)

  if (!chainCid) {
    throw new Error('Invalid value for property "chain"')
  }

  let mixinsSan = sanitizeMixins(mixins, chainCid)
  mixinsSan = correctlyOrderedMixins(mixinsSan, previous)
  const linksSan = sanitizeLinks(links)
  payload = sanitizePayload(payload)

  if (typeof source !== 'string') {
    throw new Error('Property "source" must be a string')
  }

  if (!Number.isSafeInteger(index) || index < 0) {
    throw new Error('Property "index" must be an integer > 0 within safe range')
  }

  return {
    chain: chainCid
    , source
    , index
    , links: linksSan
    , mixins: mixinsSan
    , payload
  }
}