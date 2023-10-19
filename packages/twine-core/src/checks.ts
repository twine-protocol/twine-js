import { ChainContent, ChainValue, PulseContent, TwineValue, PulseValue, Mixin } from './types'
import { CID } from 'multiformats/cid'
import { Chain, Pulse } from './twine'

// eslint-disable-next-line max-len
const isoDateRegExp = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/

export function isISODate(str: string) {
  return isoDateRegExp.test(str);
}

export function isInteger(n: any) {
  return Number.isInteger(n)
}

export function isUnsignedInteger(n: any) {
  return isInteger(n) && n >= 0
}

export function isIterable(obj: any): obj is Iterable<any> {
  return obj && typeof obj[Symbol.iterator] === 'function'
}

export function isAsyncIterable(obj: any): obj is AsyncIterable<any> {
  return obj && typeof obj[Symbol.asyncIterator] === 'function'
}

export function isAnyIterable(obj: any): obj is Iterable<any> | AsyncIterable<any> {
  return isIterable(obj) || isAsyncIterable(obj)
}

export function isCid(cid: any): cid is CID {
  // cid should have a toStringTag of CID
  return cid && cid[Symbol.toStringTag] === 'CID'
}

export function isMixins(mixins: any): mixins is Mixin[] {
  if (!mixins) { return false }
  if (!(Array.isArray(mixins))) { return false }
  if (!mixins.every(mixin => isCid(mixin.chain) && isCid(mixin.value))) { return false }
  return true
}

export function isLinks(links: any): links is CID[] {
  if (!links) { return false }
  if (!(Array.isArray(links))) { return false }
  if (!links.every(link => isCid(link))) { return false }
  return true
}

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

export function isPulseValue(value: any): value is PulseValue {
  if (!value) { return false }
  if (!(typeof value.signature === 'string')) { return false }
  if (!isPulseContent(value.content)) { return false }
  return true
}

export function isChainValue(value: any): value is ChainValue {
  if (!value) { return false }
  if (!(typeof value.signature === 'string')) { return false }
  if (!isChainContent(value.content)) { return false }
  return true
}

export function isTwineValue(value: any): value is TwineValue {
  return isPulseValue(value) || isChainValue(value)
}

export function isTwine(twine: any): twine is Chain | Pulse {
  return twine && twine.isTwineInstance === true
}

export function isChain(twine: any): twine is Chain {
  return isTwine(twine) && twine.isChain
}

export function isPulse(twine: any): twine is Pulse {
  return isTwine(twine) && twine.isPulse
}