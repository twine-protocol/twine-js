import type { IntoCid, Twine, Resolution, ResolveOptions, TwineValue, Chain, Pulse, AnyIterable, PulseIndex, PulseResolution, IntoResolveChainQuery, ChainResolution, IntoResolvePulseQuery } from '@twine-protocol/twine-core'
import { TwineCache, fromBytes, fromJSON, coerceCid, isPulse, resolveHelper, Store, isTwine, along, crawl, isChain } from '@twine-protocol/twine-core'
import { Blockstore } from 'interface-blockstore'
import { Datastore, Key } from 'interface-datastore'
import { CID } from 'multiformats'

/**
 * Storage wrapper for storing Twine objects inside datastore and a blockstore
 */
export class BlockstoreStore implements Store {
  private datastore: Datastore
  private blockstore: Blockstore

  constructor(datastore: Datastore, blockstore: Blockstore) {
    this.datastore = datastore
    this.blockstore = blockstore
  }

  private async _setLatest(pulse: Pulse) {
    const key = new Key(`/latest/chain:${pulse.value.content.chain.toString()}`)
    await this.datastore.put(key, pulse.cid.bytes)
  }
  /**
   * Get latest cid of chain
   */
  private async _latestCid(chain: IntoCid): Promise<CID | null> {
    const chainCid = coerceCid(chain)
    const key = new Key(`/latest/chain:${chainCid}`)
    try {
      const bytes = await this.datastore.get(key)
      return CID.decode(bytes)
    } catch (e: any) {
      if (e.code == 'ERR_NOT_FOUND') {
        return null
      }
      throw e
    }
  }

  private async _checkSetLatest(pulse: Pulse) {
    const cid = await this._latestCid(pulse.value.content.chain)
    if (!cid) {
      await this._setLatest(pulse)
    } else {
      const latest = await this.fetch(cid)
      if (!latest) {
        throw new Error('Could not find latest pulse')
      }
      if (!isPulse(latest)) {
        throw new Error('Latest pulse in store is not a pulse')
      }
      if (latest.value.content.index < pulse.value.content.index) {
        await this._setLatest(pulse)
      }
    }
  }

  /**
   * Add an index of the pulse
   */
  private async _addIndex(pulse: Pulse) {
    const chainCid = pulse.value.content.chain.toString()
    const key = new Key(`/index/chain:${chainCid}/${pulse.value.content.index}`)
    const cid = pulse.cid.bytes
    await this.datastore.put(key, cid)
  }

  /**
   * Get cid of pulse at index
   */
  async _cidOf(chain: IntoCid, index: PulseIndex): Promise<CID | null> {
    const chainCid = coerceCid(chain)
    const key = new Key(`/index/chain:${chainCid}/${index}`)
    try {
      const bytes = await this.datastore.get(key)
      return CID.decode(bytes)
    } catch (e: any) {
      if (e.code == 'ERR_NOT_FOUND') {
        return null
      }
      throw e
    }
  }

  /**
   * Reindex a chain
   */
  async reIndex(latestCid: IntoCid) {
    const cid = coerceCid(latestCid)
    const latest = await this.fetch(cid)
    if (!latest) {
      throw new Error('Could not find specified pulse')
    }
    if (!isPulse(latest)) {
      throw new Error('Latest specified is not a pulse')
    }
    let index = latest.value.content.index
    for await (const res of crawl(latest, along())) {
      const { pulse } = await res.load(this)
      if (!pulse) {
        throw new Error('Could not load pulse')
      }
      index = pulse.value.content.index
      await this._addIndex(pulse)
    }
    if (index !== 0) {
      throw new Error('Could not crawl to beginning of chain')
    }
    await this._setLatest(latest)
  }

  /**
   * fetch by index
   */
  async fetchIndex(chain: IntoCid, index: PulseIndex) {
    const cid = await this._cidOf(chain, index)
    if (cid === null) {
      return null
    }
    return this.fetch(cid)
  }

  /**
   * Save a twine
   */
  async save(twine: Twine<TwineValue>) {
    if (!isTwine(twine)) {
      throw new Error('not a twine instance')
    }

    const cid = twine.cid.toString()

    if (isChain(twine)) {
      await Promise.all([
        this.blockstore.put(twine.cid, twine.bytes),
        this.datastore.put(new Key(`/chains/${cid}`), twine.cid.bytes)
      ])
    } else {
      await this.blockstore.put(twine.cid, twine.bytes)
      await this._addIndex(twine)
      await this._checkSetLatest(twine)
    }
  }

  async saveMany(twines: AnyIterable<Twine<TwineValue>>): Promise<void> {
    for await (const twine of twines) {
      await this.save(twine)
    }
  }

  async delete(cid: IntoCid) {
    cid = coerceCid(cid)
    const twine = await this.fetch(cid)
    if (!twine) {
      return
    }
    if (isChain(twine)) {
      await Promise.all([
        this.blockstore.delete(cid),
        this.datastore.delete(new Key(`/chains/${cid}`))
      ])
    } else {
      const latest = await this._latestCid(twine.value.content.chain)
      if (latest?.toString() === cid.toString()) {
        const index = twine.value.content.index - 1
        if (index >= 0){
          const previous = await this.resolveIndex(twine.value.content.chain, index)
          if (!previous.pulse) {
            throw new Error('Could not resolve previous pulse before deletion')
          }
          await this._setLatest(previous.pulse)
        }
      }
      const chainCid = twine.value.content.chain.toString()
      await Promise.all([
        this.blockstore.delete(cid),
        this.datastore.delete(new Key(`/index/chain:${chainCid}/${twine.value.content.index}`))
      ])
    }
  }

  /**
   * Fetch a twine by it's CID
   */
  async fetch(cid: IntoCid) {
    cid = coerceCid(cid)
    try {
      const buffer = await this.blockstore.get(cid)
      if (!buffer) {
        return null
      }
      const bytes = new Uint8Array(buffer)
      return await fromBytes({ bytes, cid })
    } catch (e: any) {
      if (e.code == 'ERR_NOT_FOUND') {
        return null
      }
      throw e
    }
  }

  async *chains(): AsyncIterable<Chain> {
    for await (const { value } of this.datastore.query({ prefix: '/chains/' })) {
      const cid = CID.decode(value)
      const chain = await this.fetch(cid)
      if (chain) {
        yield chain as Chain
      }
    }
  }

  async *pulses(chain: IntoCid, start?: PulseIndex | IntoCid, options?: ResolveOptions): AsyncIterable<Pulse> {
    const chainCid = coerceCid(chain)
    let res: PulseResolution | null = null
    if (typeof start === 'number') {
      res = await this.resolveIndex(chain, start, options)
    } else if (start) {
      res = await this.resolve({ chain: chainCid, pulse: start }, options)
    } else {
      res = await this.resolveLatest(chainCid)
    }
    if (!res.pulse) {
      return
    }
    for await (const next of crawl(res, along())) {
      const { pulse } = await next.load(this)
      if (!pulse) {
        return
      }
      yield pulse
    }
  }

  /**
   * Check if a Twine is present in the blockstore
   */
  async has(cid: IntoCid) {
    cid = coerceCid(cid)
    const twine = await this.fetch(cid)
    if (!twine) { return false }
    if (isChain(twine)) {
      return this.datastore.has(new Key(`/chains/${cid}`))
    } else {
      return this.datastore.has(new Key(`/index/chain:${twine.value.content.chain.toString()}/${twine.value.content.index}`))
    }
  }

  async resolveIndex(chain: IntoCid, index: number, options?: ResolveOptions | undefined): Promise<PulseResolution> {
    const cid = await this._cidOf(chain, index)
    if (!cid) { return { chain: null, pulse: null } }
    return await this.resolve({ chain, pulse: cid }, options)
  }

  /**
   * Resolves a twine query
   */
  async resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
  async resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  async resolve(query: any, options?: ResolveOptions) {
    return await resolveHelper({
      fetchChain: async ({ chainCID }) => this.fetch(chainCID) as Promise<Chain | null>
      , fetchPulse: async ({ pulseCID }) => this.fetch(pulseCID) as Promise<Pulse | null>
    }, query, options)
  }

  /**
   * Resolves the latest pulse for specified chain
   */
  async resolveLatest(chain: IntoCid): Promise<PulseResolution> {
    const cid = await this._latestCid(chain)
    if (!cid) { return { chain: null, pulse: null } }
    return await this.resolve({ chain, pulse: cid })
  }
}
