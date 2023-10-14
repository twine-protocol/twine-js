import type { Mixin, Pulse, IntoCid, Payload, ChainContent, JWK, PulseContent } from '@twine-protocol/twine-core'
import { CID } from 'multiformats'
import { asMixin, coerceCID, isTwine } from '@twine-protocol/twine-core'
import { isObjectLike, isPlainObject } from './checks'

export interface UnsanitizedChainContent {
  source: string
  , specification?: string
  , key?: JWK
  , links_radix?: number
  , mixins?: { chain: IntoCid, value: IntoCid }[]
  , meta?: { [key: string]: any }
}

export interface UnsanitizedPulseContent {
  chain: IntoCid
  , source: string
  , index: number
  , links: IntoCid[]
  , mixins: IntoCid[]
  , payload: object
}

export const sanitizeMixins = (mixins: Mixin[], chainCid?: CID) => {
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
  return links.map(l => coerceCID(l))
}

export const sanitizePayload = (payload: object): Payload => {

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
}: UnsanitizedChainContent): ChainContent => {

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
    , mixins
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
  chain = CID.asCID(chain)

  if (!chain) {
    throw new Error('Invalid value for property "chain"')
  }

  mixins = sanitizeMixins(mixins, chain)
  mixins = correctlyOrderedMixins(mixins, previous)
  links = sanitizeLinks(links)
  payload = sanitizePayload(payload)

  if (typeof source !== 'string') {
    throw new Error('Property "source" must be a string')
  }

  if (!Number.isSafeInteger(index) || index < 0) {
    throw new Error('Property "index" must be an integer > 0 within safe range')
  }

  return {
    chain
    , source
    , index
    , links
    , mixins
    , payload
  }
}