import type { AnyIterable, CID, IntoCid, TwineValue } from '../types'
import type { Chain, Pulse, Twine } from '../twine'
import type { Store } from './types'
import { coerceCid } from '../conversion'
import { InvalidTwineData, Resolution, ResolveOptions, ResolveQuery, isAsyncIterable, isChain, isTwine } from '..'
import { CacheMap } from './cache-helpers'
import { resolveHelper } from '../resolver/helpers'

function warnDeprecated(name: string){
  console.warn(`${name} is deprecated and will be removed in a future release.`)
}

export type ChainMeta = {
  chainCid: CID,
  latestIndex: number,
  indexMap: CacheMap<number, Pulse>
}

export class MemoryStore implements Store {
  chainStore: Map<string, Chain> = new Map()
  chainMeta: Map<string, ChainMeta> = new Map()
  pulseStore: CacheMap<string, Pulse> = new CacheMap()
  maxSize: number

  constructor(maxSize = 0) {
    this.pulseStore.setMaxSize(maxSize)
    this.maxSize = maxSize
  }

  setMaxSize(maxSize: number) {
    this.pulseStore.setMaxSize(maxSize)
    for (const meta of this.chainMeta.values()) {
      meta.indexMap.setMaxSize(maxSize)
    }
    this.maxSize = maxSize
  }

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

  has(cid: IntoCid){
    const key = coerceCid(cid).toString()
    return this.chainStore.has(key) || this.pulseStore.has(key)
  }

  delete(cid: IntoCid) {
    const key = coerceCid(cid).toString()
    if (this.chainStore.has(key)) {
      this.chainStore.delete(key)
      const meta = this.chainMeta.get(key)
      if (!meta) { return }
      for (const [index, pulse] of meta.indexMap.entries()) {
        this.pulseStore.delete(pulse.cid.toString())
      }
      this.chainMeta.delete(key)
    } else {
      const pulse = this.pulseStore.get(key)
      if (!pulse) { return }
      const chain = pulse.value.content.chain
      const chainKey = chain.toString()
      const meta = this.chainMeta.get(chainKey)
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
    const meta = this.chainMeta.get(chainKey) || {
      chainCid,
      latestIndex: -1,
      indexMap: new CacheMap([], { maxSize: this.maxSize })
    }
    meta.latestIndex = Math.max(meta.latestIndex, index)
    meta.indexMap.set(index, pulse)
    this.chainMeta.set(chainKey, meta)
  }

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

  chains() {
    return this.chainStore.values()
  }

  async *pulses(chainCid: IntoCid, start?: number | IntoCid, options?: ResolveOptions): AsyncGenerator<Pulse> {
    const chainKey = coerceCid(chainCid).toString()
    const chain = this.chainStore.get(chainKey)
    const meta = this.chainMeta.get(chainKey)
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

  async resolve(query: ResolveQuery, options?: ResolveOptions) {
    return resolveHelper({
      fetchChain: ({ chainCID }) => this.fetch(chainCID) as Chain | null
      , fetchPulse: ({ pulseCID }) => this.fetch(pulseCID) as Pulse | null
    }, query, options)
  }

  async resolveLatest(chainCid: IntoCid, options?: ResolveOptions): Promise<Resolution> {
    const chainKey = coerceCid(chainCid).toString()
    const meta = this.chainMeta.get(chainKey)
    if (!meta) {
      return { chain: null, pulse: null }
    }
    const pulseCid = meta.indexMap.get(meta.latestIndex)
    if (!pulseCid) {
      return { chain: null, pulse: null }
    }
    return this.resolve({ chain: chainCid, pulse: pulseCid }, options)
  }

  async resolveIndex(chain: IntoCid, index: number, options?: ResolveOptions | undefined): Promise<Resolution> {
    const chainKey = coerceCid(chain).toString()
    const meta = this.chainMeta.get(chainKey)
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

export class TwineCache extends MemoryStore {
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

export const CACHE_SINGLETON = new TwineCache()