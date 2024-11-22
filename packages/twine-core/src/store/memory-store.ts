import type { AnyIterable, CID, IntoCid, TwineValue } from '../types'
import type { Chain, Pulse, Twine } from '../twine'
import type { Store } from './types'
import { coerceCid } from '../conversion'
import { ChainResolution, IntoResolveChainQuery, IntoResolvePulseQuery, InvalidTwineData, PulseResolution, Resolution, ResolveOptions, isAsyncIterable, isChain, isTwine } from '..'
import { CacheMap } from './cache-helpers'
import { resolveHelper } from '../resolver/helpers'

function warnDeprecated(name: string){
  console.warn(`${name} is deprecated and will be removed in a future release.`)
}

/**
 * Metadata used by the memory store to keep track of chains and pulses
 * @category Internal
 */
export type ChainStorageMeta = {
  /** The CID of the chain */
  chainCid: CID,
  /** The latest index of the chain */
  latestIndex: number,
  /** A map of pulse index to pulse CID */
  indexMap: CacheMap<number, Pulse>
}

/**
 * A store that keeps twines in memory
 *
 * This store is the base for the {@link TwineCache}.
 *
 * @category Storage
 */
export class MemoryStore implements Store {
  /**
   * Chains are stored in a map with the CID as the key
   */
  protected chainStore: Map<string, Chain> = new Map()
  /**
   * Chain storage metadata
   */
  protected chainStorageMeta: Map<string, ChainStorageMeta> = new Map()
  /**
   * Pulses are stored in a map with the CID as the key
   */
  protected pulseStore: CacheMap<string, Pulse> = new CacheMap()
  /**
   * The maximum number of twines to keep in memory
   */
  protected maxSize: number

  /**
   * {@inheritDoc Store}
   */

  /**
   * Create a new memory store
   *
   * @param maxSize - The maximum number of twines to keep in memory (default infinite)
   */
  constructor(maxSize = 0) {
    this.pulseStore.setMaxSize(maxSize)
    this.maxSize = maxSize
  }

  /**
   * Set the maximum number of twines to keep in memory
   *
   * If the store is already larger than the new max size, the oldest twines will be removed.
   */
  setMaxSize(maxSize: number) {
    this.pulseStore.setMaxSize(maxSize)
    for (const meta of this.chainStorageMeta.values()) {
      meta.indexMap.setMaxSize(maxSize)
    }
    this.maxSize = maxSize
  }

  /**
   * {@inheritDoc Store.fetch}
   */
  fetch(cid: IntoCid) {
    const key = coerceCid(cid).toString()
    const chain = this.chainStore.get(key)
    if (chain) {
      return chain
    }
    const pulse = this.pulseStore.get(key)
    if (pulse) {
      return pulse
    }
    return null
  }

  /**
   * {@inheritDoc Resolver.has}
   */
  has(cid: IntoCid){
    const key = coerceCid(cid).toString()
    return this.chainStore.has(key) || this.pulseStore.has(key)
  }

  /**
   * {@inheritDoc Store.delete}
   */
  delete(cid: IntoCid) {
    const key = coerceCid(cid).toString()
    if (this.chainStore.has(key)) {
      this.chainStore.delete(key)
      const meta = this.chainStorageMeta.get(key)
      if (!meta) { return }
      for (const [index, pulse] of meta.indexMap.entries()) {
        this.pulseStore.delete(pulse.cid.toString())
      }
      this.chainStorageMeta.delete(key)
    } else {
      const pulse = this.pulseStore.get(key)
      if (!pulse) { return }
      const chain = pulse.value.content.chain
      const chainKey = chain.toString()
      const meta = this.chainStorageMeta.get(chainKey)
      this.pulseStore.delete(key)
      if (!meta) { return }
      const index = pulse.value.content.index
      if (index !== meta.latestIndex) {
        meta.indexMap.delete(pulse.value.content.index)
      }
    }
  }

  private saveMeta(pulse: Pulse){
    const chainCid = pulse.value.content.chain
    const index = pulse.value.content.index
    const chainKey = chainCid.toString()
    const meta = this.chainStorageMeta.get(chainKey) || {
      chainCid,
      latestIndex: -1,
      indexMap: new CacheMap([], { maxSize: this.maxSize })
    }
    meta.latestIndex = Math.max(meta.latestIndex, index)
    meta.indexMap.set(index, pulse)
    this.chainStorageMeta.set(chainKey, meta)
  }

  /**
   * {@inheritDoc Store.save}
   */
  save(twine: Twine<any>) {
    if (!isTwine(twine)) { throw new Error('Can only store twine instances in cache') }
    const key = twine.cid.toString()
    if (this.has(key)) { return }
    if (isChain(twine)) {
      this.chainStore.set(key, twine)
    } else {
      this.pulseStore.set(key, twine)
      this.saveMeta(twine)
    }
  }

  saveMany(twines: AsyncIterable<Twine<TwineValue>>): Promise<void>
  saveMany(twines: Iterable<Twine<TwineValue>>): void
  /**
   * {@inheritDoc Store.saveMany}
   */
  saveMany(twines: AnyIterable<Twine<TwineValue>>) {
    if (isAsyncIterable(twines)) {
      return (async () => {
        for await (const twine of twines) {
          this.save(twine)
        }
      })()
    } else {
      for (const twine of twines) {
        this.save(twine)
      }
    }
  }

  /**
   * Get an iterator of all the chains in the store
   */
  chains() {
    return this.chainStore.values()
  }

  /**
   * Get an async iterator of all the pulses in a chain
   */
  async *pulses(chainCid: IntoCid, start?: number | IntoCid, options?: ResolveOptions): AsyncGenerator<Pulse> {
    const chainKey = coerceCid(chainCid).toString()
    const chain = this.chainStore.get(chainKey)
    const meta = this.chainStorageMeta.get(chainKey)
    if (!meta || (!chain && options?.noVerify !== true)) {
      return
    }
    let startIndex
    if (typeof start === 'number') {
      startIndex = start
    } else if (start) {
      const pulse = this.fetch(start) as Pulse | null
      if (!pulse) { throw new Error('Can not resolve start pulse') }
      startIndex = pulse.value.content.index
    }
    for (let index = startIndex ?? meta.latestIndex; index >= 0; index--) {
      const cid = meta.indexMap.get(index)
      if (!cid) { return }
      const pulse = this.fetch(cid) as Pulse | null
      if (!pulse) { return }
      if (options?.noVerify !== true) {
        await pulse.verifySignature(chain)
      }
      yield pulse as Pulse
    }
  }

  async resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  async resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
  /**
   * {@inheritDoc Resolver.resolve}
   */
  async resolve(query: any, options?: ResolveOptions) {
    return resolveHelper({
      fetchChain: ({ chainCID }) => this.fetch(chainCID) as Chain | null
      , fetchPulse: ({ pulseCID }) => this.fetch(pulseCID) as Pulse | null
    }, query, options)
  }

  /**
   * {@inheritDoc Resolver.resolveLatest}
   */
  async resolveLatest(chainCid: IntoCid, options?: ResolveOptions): Promise<PulseResolution> {
    const chainKey = coerceCid(chainCid).toString()
    const meta = this.chainStorageMeta.get(chainKey)
    if (!meta) {
      return { chain: null, pulse: null }
    }
    const pulseCid = meta.indexMap.get(meta.latestIndex)
    if (!pulseCid) {
      return { chain: null, pulse: null }
    }
    return this.resolve({ chain: chainCid, pulse: pulseCid }, options)
  }

  /**
   * {@inheritDoc Resolver.resolveIndex}
   */
  async resolveIndex(chain: IntoCid, index: number, options?: ResolveOptions | undefined): Promise<PulseResolution> {
    const chainKey = coerceCid(chain).toString()
    const meta = this.chainStorageMeta.get(chainKey)
    if (!meta) {
      return { chain: null, pulse: null }
    }
    const pulseCid = meta.indexMap.get(index)
    if (!pulseCid) {
      return { chain: null, pulse: null }
    }
    const res = await this.resolve({ chain, pulse: pulseCid }, options)
    if (res.pulse){
      // check index
      if (res.pulse.value.content.index !== index){
        throw new InvalidTwineData('Pulse index does not match requested index')
      }
    }
    return res
  }
}

/**
 * A store that caches twines in memory
 *
 * @category Cache
 */
export class TwineCache extends MemoryStore {

  /**
   * {@inheritDoc Store}
   */

  /**
   * {@inheritDoc MemoryStore}
   */

  /**
   * Create a new twine cache
   *
   * @param maxSize - The maximum number of twines to keep in memory (default 10000)
   */
  constructor(maxSize = 10000) {
    super(maxSize)
  }

  /**
   * @deprecated
   */
  get(cid: IntoCid) {
    // warn deprecated
    warnDeprecated('TwineCache.get')
    return this.fetch(cid)
  }

  /**
   * @deprecated
   */
  add(twine: Twine<any>) {
    // warn deprecated
    warnDeprecated('TwineCache.add')
    return this.save(twine)
  }
}

/**
 * A singleton cache store
 *
 * @category Cache
 */
export const CACHE_SINGLETON = new TwineCache()