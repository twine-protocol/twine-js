import { CID, MultihashHasher } from 'multiformats'
import { isChain, isChainValue, isPulse, isPulseValue, isTwine } from './checks'
import { ResolveQuery, ResolveQueryStrict } from './resolver/types'
import { ChainValue, IntoCid, Mixin, PulseValue } from './types'
import { decode as dagJsonDecode } from '@ipld/dag-json'
import { encode as blockEncode, create as blockCreate } from 'multiformats/block'
import { sha3512 } from '@multiformats/sha3'
import { Chain, Pulse, Twine } from './twine'
import * as codec from '@ipld/dag-cbor'

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

export const coerceCid = (val: IntoCid): CID => {
  const cid = asCid(val)
  if (cid) {
    return cid
  }
  throw new Error('Could not coerce value to CID')
}

export function bytesToHex(bytes: Uint8Array) {
  return Array.prototype.map.call(
    bytes,
    x => ('00' + x.toString(16)).slice(-2)
  ).join('')
}

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

export const fromJSON = async (json: string | object): Promise<Chain | Pulse> => {
  const obj = typeof json === 'string' ? JSON.parse(json) : json
  const jsonBytes = (new TextEncoder()).encode(JSON.stringify(obj))
  const res = dagJsonDecode(jsonBytes)
  if (!isJsonParseResult(res)) {
    throw new Error('Invalid twine json')
  }
  const thisIsPulse = isPulseValue(res.data)
  const thisIsChain = !thisIsPulse && isChainValue(res.data)
  if (!thisIsPulse && !thisIsChain) {
    throw new Error('Invalid twine json')
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
    throw new Error('Invalid decoded twine data')
  }
  return new Twine({
    cid,
    bytes,
    value: value as typeof thisIsPulse extends true ? PulseValue : ChainValue
  })
}

export const asQuery = (val: any): ResolveQueryStrict | null => {
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

export const coerceQuery = (val: any): ResolveQuery => {
  const query = asQuery(val)
  if (!query) { throw new Error('Can not coerce value into ResolveQuery') }
  return query
}