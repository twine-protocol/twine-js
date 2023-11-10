import type { AnyMap, ChainValue, PulseValue } from './types'
import * as Block from 'multiformats/block'
import { CID, Version } from 'multiformats/cid'
import * as dagJson from '@ipld/dag-json'
import { InvalidTwineData } from './errors'
import { isChain, isChainValue, isPulse, isPulseValue, isTwine } from './checks'
import { getContentDigest, verifySignature } from './verify'

export type Chain<M extends AnyMap = AnyMap> = Twine<ChainValue<M>>
export type Pulse<P extends AnyMap = AnyMap> = Twine<PulseValue<P>>

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

