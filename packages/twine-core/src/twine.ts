import type { AnyMap, ChainValue, PulseValue } from './types'
import * as Block from 'multiformats/block'
import { CID, Version } from 'multiformats/cid'
import * as dagJson from '@ipld/dag-json'
import { InvalidTwineData } from './errors'
import { isChain, isChainValue, isPulse, isPulseValue, isTwine } from './checks'
import { getContentDigest, verifySignature } from './verify'

/** A Twine that is a Chain */
export type Chain<M extends AnyMap = AnyMap> = Twine<ChainValue<M>>
/** A Twine that is a Pulse */
export type Pulse<P extends AnyMap = AnyMap> = Twine<PulseValue<P>>

/**
 * Generic type for twine data
 */
export class Twine<T extends ChainValue | PulseValue> extends Block.Block<T, number, number, Version> {
  /** is a twine instance (true) */
  isTwineInstance = true
  /** is this a chain */
  isChain: boolean
  /** chain CID (either this CID or the pulse's chain CID) */
  chainCid: CID

  /** Check if a value is a twine */
  static isTwine(thing: any) {
    return isTwine(thing)
  }

  /**
   * Create a new twine instance
   *
   * This class extends the Block class from multiformats/block. So
   * anything that reads or writes blocks can be used with this class.
   * A twine can be created from a multi-format block too.
   *
   * But generally you'll want to use the {@link fromBytes} or {@link fromJSON}
   * functions to decode a twine instance. Or use the
   * {@link https://github.com/twine-protocol/twine-js/tree/master/packages/twine-builder | twine-builder}
   * package to create a twine instance.
   */
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

  /**
   * Is this a pulse
   */
  get isPulse() {
    return !this.isChain
  }

  /**
   * Get the twine data as a DAG-JSON object
   */
  toJSON() {
    return JSON.parse((new TextDecoder()).decode(
      dagJson.encode({
        cid: this.cid
        , data: this.value
      })
    ))
  }

  /**
   * Get the twine content field hash digest
   */
  async getContentDigest() {
    return getContentDigest(this.value.content)
  }

  /**
   * Verify the signature of this twine instance
   *
   * If this is a chain, no chain instance is required. If this is a pulse,
   * a chain instance must be provided.
   *
   * @param chain - Chain instance to use for verification
   */
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

