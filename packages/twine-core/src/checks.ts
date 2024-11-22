import { ChainContent, ChainValue, PulseContent, TwineValue, PulseValue, Mixin } from './types'
import { CID } from 'multiformats/cid'
import { Chain, Pulse } from './twine'
import { FulfilledPulseResolution, ResolvePulseQueryStrict } from '.'

// eslint-disable-next-line max-len
const isoDateRegExp = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/

/**
 * Is this string a valid ISO Date
 *
 * @group Type Guards
 *
 * @param str The string to check
 */
export function isISODate(str: string) {
  return isoDateRegExp.test(str);
}

/**
 * Is this an integer
 *
 * @group Type Guards
 */
export function isInteger(n: any) {
  return Number.isInteger(n)
}

/**
 * Is this a positive integer
 *
 * @group Type Guards
 */
export function isUnsignedInteger(n: any) {
  return isInteger(n) && n >= 0
}

/**
 * Is this a sync iterable
 *
 * @group Type Guards
 */
export function isIterable(obj: any): obj is Iterable<any> {
  return obj && typeof obj[Symbol.iterator] === 'function'
}

/**
 * Is this an async iterable
 *
 * @group Type Guards
 */
export function isAsyncIterable(obj: any): obj is AsyncIterable<any> {
  return obj && typeof obj[Symbol.asyncIterator] === 'function'
}

/**
 * Is this a sync or async iterable
 *
 * @group Type Guards
 */
export function isAnyIterable(obj: any): obj is Iterable<any> | AsyncIterable<any> {
  return isIterable(obj) || isAsyncIterable(obj)
}

/**
 * Is this a CID object (not a string)
 *
 * @group Type Guards
 */
export function isCid(cid: any): cid is CID {
  // cid should have a toStringTag of CID
  return cid && cid[Symbol.toStringTag] === 'CID'
}

/**
 * Is this a mixin list
 *
 * @group Type Guards
 */
export function isMixins(mixins: any): mixins is Mixin[] {
  if (!mixins) { return false }
  if (!(Array.isArray(mixins))) { return false }
  if (!mixins.every(mixin => isCid(mixin.chain) && isCid(mixin.value))) { return false }
  return true
}

/**
 * Is this a links list
 *
 * @group Type Guards
 */
export function isLinks(links: any): links is CID[] {
  if (!links) { return false }
  if (!(Array.isArray(links))) { return false }
  if (!links.every(link => isCid(link))) { return false }
  return true
}

/**
 * Is this valid pulse content
 *
 * @group Type Guards
 */
export function isPulseContent(content: any): content is PulseContent {
  if (!content) { return false }
  if (!isCid(content.chain)) { return false }
  if (!isUnsignedInteger(content.index)) { return false }
  if (!isLinks(content.links)) { return false }
  if (!isMixins(content.mixins)) { return false }
  if (!(typeof content.payload === 'object')) { return false }
  if (!(typeof content.source === 'string')) { return false }
  return true
}

/**
 * Is this valid chain content
 *
 * @group Type Guards
 */
export function isChainContent(content: any): content is ChainContent {
  if (!content) { return false }
  if (!(typeof content.key === 'object')) { return false }
  if (!isUnsignedInteger(content.links_radix)) { return false }
  if (!(typeof content.meta === 'object')) { return false }
  if (!isMixins(content.mixins)) { return false }
  if (!(typeof content.source === 'string')) { return false }
  if (!(typeof content.specification === 'string')) { return false }
  return true
}

/**
 * Is this a pulse value
 *
 * @group Type Guards
 */
export function isPulseValue(value: any): value is PulseValue {
  if (!value) { return false }
  if (!(typeof value.signature === 'string')) { return false }
  if (!isPulseContent(value.content)) { return false }
  return true
}

/**
 * Is this a chain value
 *
 * @group Type Guards
 */
export function isChainValue(value: any): value is ChainValue {
  if (!value) { return false }
  if (!(typeof value.signature === 'string')) { return false }
  if (!isChainContent(value.content)) { return false }
  return true
}

/**
 * Is this a twine value (pulse or chain)
 *
 * @group Type Guards
 */
export function isTwineValue(value: any): value is TwineValue {
  return isPulseValue(value) || isChainValue(value)
}

/**
 * Is this a twine
 *
 * @group Type Guards
 */
export function isTwine(twine: any): twine is Chain | Pulse {
  return twine && twine.isTwineInstance === true
}

/**
 * Is this a chain
 *
 * @group Type Guards
 */
export function isChain(twine: any): twine is Chain {
  return isTwine(twine) && twine.isChain
}

/**
 * Is this a pulse
 *
 * @group Type Guards
 */
export function isPulse(twine: any): twine is Pulse {
  return isTwine(twine) && twine.isPulse
}

/**
 * Is this a fulfilled pulse resolution
 *
 * @group Type Guards
 */
export function isFulfilledPulseResolution(resolution: any): resolution is FulfilledPulseResolution {
  return resolution && isPulse(resolution.pulse) && isChain(resolution.chain)
}

/**
 * Is this a fulfilled chain resolution
 *
 * @group Type Guards
 */
export function isFulfilledChainResolution(resolution: any): resolution is FulfilledPulseResolution {
  return resolution && resolution.pulse === undefined && isChain(resolution.chain)
}

/**
 * Is this a pulse query
 *
 * @group Type Guards
 */
export function isPulseQuery(query: any): query is ResolvePulseQueryStrict {
  if (!query) { return false }
  if (!isCid(query.chain)) { return false }
  if (!isCid(query.pulse)) { return false }
  return true
}