import type { ChainContent, ChainValue, PulseContent, PulseValue, TwineContent, TwineValue } from './types'
import * as Block from 'multiformats/block'
import { CID, Version } from 'multiformats/cid'
import { bytes } from 'multiformats'
import * as codec from '@ipld/dag-cbor'
import * as dagJson from '@ipld/dag-json'
import { sha3512 } from '@multiformats/sha3'
import * as jose from 'jose'
import { InvalidSignature, InvalidTwineData } from './errors'
import { MultihashDigest } from 'multiformats/hashes/digest'
import { isChain, isChainValue, isPulse, isPulseValue, isTwine, isTwineValue } from './checks'

export type Chain = Twine<ChainValue>
export type Pulse = Twine<PulseValue>

export async function getContentDigest(content: TwineContent): Promise<MultihashDigest> {
  const bytes = codec.encode(content)
  return sha3512.digest(bytes)
}

async function verifySignature(chain: Chain, twine: Chain | Pulse) {
  if (!isChain(chain)) {
    throw new InvalidTwineData('Invalid chain instance specified')
  }
  if (!isTwine(twine)) {
    throw new InvalidTwineData('Invalid twine instance specified')
  }

  if (twine.isChain && twine !== chain) {
    throw new Error('Can not validate chain other than self')
  } else if (twine.isPulse && !chain.cid.equals(twine.chainCid)) {
    throw new Error('Provided pulse value not a member of specified chain')
  }

  let key
  try {
    key = await jose.importJWK(chain.value.content.key)
  } catch (e: any){
    throw new InvalidTwineData('Invalid chain key', { cause: e })
  }
  const signature = twine.value.signature.toString()
  try {
    const { payload } = await jose.compactVerify(signature, key)
    const digest = await twine.getContentDigest()
    if (!bytes.equals(payload, digest.bytes)) {
      throw new InvalidSignature('Payload bytes do not match')
    }
  } catch (cause: any) {
    throw new InvalidSignature('', { cause })
  }

  return true
}

export class Twine<T extends ChainValue | PulseValue> extends Block.Block<T, number, number, Version> {
  isTwineInstance = true
  isChain: boolean
  chainCid: CID

  static isTwine(thing: any) {
    return isTwine(thing)
  }

  constructor({ cid, bytes, value }: { cid: CID, bytes: Uint8Array, value: T }) {
    const thisIsChain = isChainValue(value)
    const thisIsPulse = !thisIsChain && isPulseValue(value)
    if (!thisIsChain && !thisIsPulse) {
      throw new InvalidTwineData('Invalid twine value')
    }

    super({ cid, bytes, value })
    this.isChain = thisIsChain
    this.chainCid = thisIsChain ? this.cid : value.content.chain
    Object.defineProperties(this, {
      isChain: {
        writable: false
        , enumerable: true
        , configurable: false
        , value: this.isChain
      }
      , isTwineInstance: {
        writable: false
        , enumerable: false
        , configurable: false
        , value: true
      }
      , chainCid: {
        writable: false
        , enumerable: true
        , configurable: false
        , value: this.chainCid
      }
    })
  }

  get isPulse() {
    return !this.isChain
  }

  toJSON() {
    return JSON.parse((new TextDecoder()).decode(
      dagJson.encode({
        cid: this.cid
        , data: this.value
      })
    ))
  }

  async getContentDigest() {
    return getContentDigest(this.value.content)
  }

  async verifySignature(chain?: Chain): Promise<boolean> {
    if (isChain(this)) {
      return verifySignature(this, this)
    } else if (chain && isPulse(this)) {
      return verifySignature(chain, this)
    } else {
      throw new Error('No chain specified')
    }
  }
}

