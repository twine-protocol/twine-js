import { Chain, ChainResolution, IntoCid, IntoResolveChainQuery, IntoResolvePulseQuery, Pulse, PulseIndex, PulseResolution, ResolveOptions, Resolver, Twine, TwineValue, along, coerceCid, crawl, fromBytes, isChain, isFulfilledPulseResolution, resolveHelper } from '@twine-protocol/twine-core'
import { CarReader, CarBufferReader, CarIndexedReader } from '@ipld/car'

/**
 * A Car Reader
 */
export type Reader = CarReader | CarBufferReader | CarIndexedReader

/**
 * A Twine Resolver that reads from a CARv2 Reader
 *
 * @group Resolver
 * @example
 * ```js
 * import { CarReader } from '@ipld/car'
 * const reader = await CarReader.fromBytes(bytes)
 * const resolver = new CarResolver(reader)
 * ```
 */
export class CarResolver implements Resolver {
  private _reader: Reader
  private _chains: Map<string, Chain> | null = null
  private _latest: Map<string, Pulse> | null = null

  /**
   * {@inheritDoc Resolver}
   */

  /**
   * Create a new CarResolver
   */
  constructor(reader: Reader) {
    this._reader = reader
  }

  private async _checkRoots() {
    const chains = new Map()
    const latest = new Map()
    const roots = await this._reader.getRoots()
    for (const root of roots) {
      const block = await this._reader.get(root)
      if (!block) { continue }
      // TODO: fix this when CID is worked out
      // @ts-ignore
      const twine = await fromBytes(block)
      if (isChain(twine)) {
        chains.set(twine.cid.toString(), twine)
      } else {
        latest.set(twine.value.content.chain.toString(), twine)
      }
    }
    this._chains = chains
    this._latest = latest
  }

  /**
   * @see {@link https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#chains | Resolver.chains}
   */
  async *chains() {
    if (!this._chains) {
      await this._checkRoots()
    }
    yield* this._chains!.values()
  }

  private async latestOf(chain: IntoCid): Promise<Pulse | null> {
    if (!this._latest) {
      await this._checkRoots()
    }
    return this._latest!.get(coerceCid(chain).toString()) ?? null
  }

  private async fetch(cid: IntoCid): Promise<Chain | Pulse | null> {
    cid = coerceCid(cid)
    if (!this._chains) {
      await this._checkRoots()
    }
    const ch = this._chains!.get(cid.toString())
    if (ch) { return ch }
    const block = await this._reader.get(cid)
    if (!block) { return null }
    // TODO: fix this when CID is worked out
    // @ts-ignore
    return await fromBytes(block)
  }

  async resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  async resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
  /**
   * @see {@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#resolve | Resolver.resolve}
   */
  async resolve(query: any, options?: ResolveOptions) {
    return resolveHelper({
      fetchChain: ({ chainCID }) => this.fetch(chainCID) as Promise<Chain | null>
      , fetchPulse: ({ pulseCID }) => this.fetch(pulseCID) as Promise<Pulse | null>
    }, query, options)
  }

  /**
   * @see {@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#resolveLatest | Resolver.resolveLatest}
   */
  async resolveLatest(chainCid: IntoCid, options?: ResolveOptions): Promise<PulseResolution> {
    const latest = await this.latestOf(chainCid)
    if (!latest) {
      return { chain: null, pulse: null }
    }
    return this.resolve({ chain: chainCid, pulse: latest }, options)
  }

  /**
   * @see {@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#resolveIndex | Resolver.resolveIndex}
   */
  async resolveIndex(chainCid: IntoCid, index: number, options?: ResolveOptions | undefined): Promise<PulseResolution> {
    const chain = await this.fetch(chainCid) as Chain | null
    if (!chain) {
      return { chain: null, pulse: null }
    }
    const from = await this.resolveLatest(chain, options)
    if (!isFulfilledPulseResolution(from)) {
      return { chain: null, pulse: null }
    }
    const target = { chain, pulse: index }
    for await (const next of crawl(from, along(target))) {
      const { pulse } = await next.load(this, options)
      if (pulse?.value.content.index === index) {
        return { chain, pulse }
      }
    }
    return { chain: null, pulse: null }
  }

  /**
   * @see {@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#has | Resolver.has}
   */
  async has(cid: IntoCid): Promise<boolean> {
    return this._reader.has(coerceCid(cid))
  }

  /**
   * @see {@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#pulses | Resolver.pulses}
   */
  async *pulses(chain: IntoCid, start?: PulseIndex | IntoCid, options?: ResolveOptions) {
    let res
    if (typeof start === 'number'){
      res = await this.resolveIndex(chain, start, options)
    } else if (start) {
      res = await this.resolve({ chain, pulse: start }, options)
    } else {
      res = await this.resolveLatest(chain, options)
    }
    if (!isFulfilledPulseResolution(res)) { return }
    for await (const next of crawl(res, along())){
      const { pulse } = await next.load(this, options)
      if (!pulse) { return }
      yield pulse
    }
  }

  /**
   * Close the reader
   */
  close(){
    // @ts-ignore
    if (this._reader?.close){
      // @ts-ignore
      this._reader?.close()
    }
  }

}