import { CID, MultihashHasher } from 'multiformats'
import { isChain, isChainValue, isPulse, isPulseValue, isTwine } from './checks'
import { FulfilledChainResolution, FulfilledPulseResolution, ResolveChainQuery, ResolvePulseQuery, ResolvePulseQueryStrict, ResolveQueryStrict } from './resolver/types'
import { ChainValue, IntoCid, Mixin, PulseValue } from './types'
import { decode as dagJsonDecode } from '@ipld/dag-json'
import { encode as blockEncode, create as blockCreate } from 'multiformats/block'
import { sha3512 } from '@multiformats/sha3'
import { Chain, Pulse, Twine } from './twine'
import * as codec from '@ipld/dag-cbor'

/**
 * @groupDescription Conversion
 *
 * Conversion utilities for twine.
 *
 * Generally the `as` functions return null if the conversion fails.
 * And the `coerce` functions throw an error if the conversion fails.
 */

/**
 * Collect an async iterable into an array
 *
 * @group Conversion
 * @param iterable - The async iterable to collect
 *
 * @example
 * ```js
 * import { collect } from '@twine-protocol/twine-core'
 * const chains = await collect(resolver.chains())
 * ```
 */
export async function collect<T>(iterable: AsyncIterable<T>): Promise<T[]> {
  const res: T[] = []
  for await (const item of iterable) {
    res.push(item)
  }
  return res
}

/**
 * Convert something mixin-like into a mixin
 *
 * @group Conversion
 * @param m - The mixin-like object
 * @returns The mixin or null if it could not be converted
 *
 * @example
 * ```js
 * const mixin = asMixin({ chain: 'bafybeib3...', value: 'bafybeib3...' })
 * const anotherMixin = asMixin(somePulse)
 * ```
 */
export function asMixin(m: any): Mixin | null {
  if (isPulse(m)) {
    return {
      chain: m.value.content.chain
      , value: m.cid
    }
  } else {
    try {
      if (!m.chain || !(m.value || m.pulse)) { return null }
      const chain = isTwine(m.chain) ?
        m.chain.cid :
        CID.asCID(m.chain) || CID.parse(m.chain)
      const pulse = m.value ?? m.pulse
      const value = isTwine(pulse) ?
        pulse.cid :
        CID.asCID(pulse) || CID.parse(pulse)
      if (!chain || !value) { return null }
      return {
        chain
        , value
      }
    } catch (err) {
      return null
    }
  }
}

/**
 * Convert something into a CID
 *
 * @group Conversion
 * @param val - The value to convert
 * @returns The CID or null if it could not be converted
 *
 * @example
 * ```js
 * const cid = asCid('bafybeib3...')
 * const anotherCid = asCid(somePulse)
 * ```
 */
export const asCid = (val: any): CID | null => {
  if (isTwine(val)) {
    return val.cid
  }
  if (typeof val === 'string') {
    return CID.parse(val)
  }
  if (val instanceof Uint8Array) {
    return CID.decode(val)
  }
  const cid = CID.asCID(val)
  if (cid) {
    return cid
  }
  return null
}

/**
 * Coerce something into a CID
 *
 * Throws an error if the value can not be coerced into a CID
 *
 * @group Conversion
 * @see {@link asCid}
 */
export const coerceCid = (val: IntoCid): CID => {
  const cid = asCid(val)
  if (cid) {
    return cid
  }
  throw new Error(`Could not coerce value to CID. Value: ${val}`)
}

/**
 * Convert bytes into a hex string
 *
 * @group Conversion
 */
export function bytesToHex(bytes: Uint8Array) {
  return Array.prototype.map.call(
    bytes,
    x => ('00' + x.toString(16)).slice(-2)
  ).join('')
}

/**
 * Convert a hex string into bytes
 *
 * @group Conversion
 */
export function hex2bytes(input: string) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string')
  }

  const strLen = input.length
  if ((strLen % 2) !== 0) {
    throw new RangeError('Input string must be an even number of characters')
  }

  return Uint8Array.from({ length: strLen / 2 }, (_, i) => {
    i *= 2
    return parseInt(input.substring(i, i + 2), 16)
  })
}

const isJsonParseResult = (obj: any): obj is { cid: CID, data: any } => {
  return obj && obj.cid && obj.data
}

/**
 * Convert a DAG-JSON encoded twine into a twine instance
 *
 * This is one of the primary ways to read twine data.
 *
 * Throws an error if the data is invalid.
 *
 * @group Conversion
 */
export const fromJSON = async (json: string | object): Promise<Chain | Pulse> => {
  const obj = typeof json === 'string' ? JSON.parse(json) : json
  const jsonBytes = (new TextEncoder()).encode(JSON.stringify(obj))
  const res = dagJsonDecode(jsonBytes)
  if (!isJsonParseResult(res)) {
    throw new Error('Invalid twine json: \n' + JSON.stringify(res, null, 2))
  }
  const thisIsPulse = isPulseValue(res.data)
  const thisIsChain = !thisIsPulse && isChainValue(res.data)
  if (!thisIsPulse && !thisIsChain) {
    throw new Error('Invalid twine json: \n' + JSON.stringify(res.data, null, 2))
  }
  const reportedCid = res.cid
  // TODO check codecs and use appropriate hasher
  const value = res.data as typeof thisIsPulse extends true ? PulseValue : ChainValue
  const { cid, bytes } = await blockEncode({
    value
    , hasher: sha3512
    , codec
  })
  if (!cid.equals(reportedCid)) {
    throw new Error('Invalid data. Does not match declared cid')
  }
  return new Twine({ cid, bytes, value })
}

/**
 * Converts a bytes array (ipld block) into a twine instance
 *
 * The CID must be provided, as it is not encoded in the bytes.
 * It will be used to verify the bytes.
 *
 * Throws an error if the data is invalid.
 *
 * @group Conversion
 */
export const fromBytes = async (
  { bytes, cid, hasher = sha3512 }: {
    bytes: Uint8Array
    cid: CID
    hasher?: MultihashHasher
  }
): Promise<Chain | Pulse> => {
  // checks cid
  const { value } = await blockCreate({ bytes, cid, hasher, codec })
  const thisIsPulse = isPulseValue(value)
  const thisIsChain = !thisIsPulse && isChainValue(value)
  if (!thisIsPulse && !thisIsChain) {
    throw new Error('Invalid decoded twine data: \n' + JSON.stringify(value, null, 2))
  }
  return new Twine({
    cid,
    bytes,
    value: value as typeof thisIsPulse extends true ? PulseValue : ChainValue
  })
}

/**
 * Converts a pulse's links array into a list of queries.
 *
 * This is useful for resolving a pulse's links.
 *
 * @group Conversion
 * @example
 * ```js
 * const pulse = await resolve(pulseQuery)
 * const links = linksAsQueries(pulse)
 * const resolvedLinks = await Promise.all(links.map(q => resolve(q)))
 * ```
 */
export const linksAsQueries = (pulse: Pulse): ResolvePulseQueryStrict[] => {
  return pulse.value.content.links.map(link => ({
    chain: pulse.value.content.chain
    , pulse: link
  }))
}

export function asQuery(val: FulfilledChainResolution): ResolveChainQuery<CID>
export function asQuery(val: FulfilledPulseResolution): ResolvePulseQueryStrict
export function asQuery(val: Chain): ResolveChainQuery<CID>
export function asQuery(val: Pulse): ResolvePulseQueryStrict
export function asQuery(val: Mixin): ResolvePulseQueryStrict
export function asQuery(val: ResolveQueryStrict): ResolveQueryStrict
export function asQuery(val: any): ResolveQueryStrict | null
/**
 * Convert something query-like into a query
 *
 * This is used internally to enable the flexibility of the resolver api.
 *
 * @group Conversion
 */
export function asQuery(val: any): ResolveQueryStrict | null {
  if (!val) { return null }
  // if it's a twine, we can just use the cids inside
  if (isTwine(val)) {
    if (isChain(val)) {
      return { chain: val.cid }
    } else {
      return { chain: val.value.content.chain, pulse: val.cid }
    }
  }
  let pulse = val.pulse ?? val.value
  let chain = asCid(val.chain)
  if (isChain(pulse) || isPulse(val.chain)){
    return null
  }
  if (isPulse(pulse)) {
    // last effort to get the chain
    chain = chain ?? pulse.value.content.chain
  }
  if (!chain) {
    return null
  }
  // if it only has a chain property
  if (!pulse) {
    return { chain }
  }
  // must be a pulse by cid query
  pulse = asCid(pulse)
  if (!pulse) {
    return null
  }
  return { chain, pulse }
}

/**
 * Coerce something into a query
 *
 * Throws an error if the value can not be coerced into a query
 *
 * @group Conversion
 * @see {@link asQuery}
 */
export const coerceQuery = (val: any): ResolveQueryStrict => {
  const query = asQuery(val)
  if (!query) { throw new Error(`Can not coerce value into ResolveQuery. Value: ${val}`) }
  return query
}