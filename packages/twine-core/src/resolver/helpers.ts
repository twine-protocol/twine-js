import { Chain, Pulse, TwineCache, coerceCid, isChain, isPulse, isTwine } from '..'
import type { Awaitable, CID, IntoCid } from '../types'
import { Twine } from '../twine'
import type { ChainResolution, IntoResolveChainQuery, IntoResolvePulseQuery, PulseResolution, Resolution, ResolveOptions, UnfulfilledResolution } from './types'

/**
 * Throttle an async function call
 *
 * Within the delay interval, the same promise is returned
 *
 * @category Internal
 */
export const asyncThrottle = <T>(fn: (...x: any[]) => Promise<T>, delay?: number) => {
  let pending: Promise<T> | null = null
  return (...args: any[]) => {
    if (!pending) {
      pending = fn(...args)
      if (!delay){
        pending.finally(() => {
          pending = null
        })
      } else {
        setTimeout(() => {
          pending = null
        }, delay)
      }
    }
    return pending
  }
}

/**
 * memoize an async function call so that while it is pending, the same call is not made again
 *
 * This is used by the {@link ResolveCallers.requestCache} to avoid making
 * multiple requests for the same twine.
 *
 * @category Internal
 * @category Resolving
 * @param cache - The cache to use
 * @param key - The key to use
 * @param fn - The function to call
 * @param args - The arguments to pass to the function
 */
export const memoized = <T>(
  cache: Map<string, Promise<T>>,
  key: string,
  fn: (...args: any[]) => Awaitable<T>,
  ...args: any[]
) => {
  if (cache.has(key)) {
    return cache.get(key)!
  }
  const result = Promise.resolve(fn(...args))
    .finally(() => cache.delete(key))
  cache.set(key, result)
  return result
}

/**
 * CID for a chain lookup
 *
 * @category Resolving
 */
export type FetchChainQuery = {
  /** Chain CID */
  chainCID: CID
}

/**
 * CIDs for a pulse lookup
 *
 * @category Resolving
 */
export type FetchPulseQuery = {
  /** Chain CID (maybe) */
  chainCID?: CID,
  /** Pulse CID */
  pulseCID: CID
}

/**
 * An object containing methods to fetch twines
 *
 * Used by the {@link resolveHelper} function
 *
 * These methods may return null or throw an error if the twine is not found
 * and the {@link resolveHelper} function will handle that.
 *
 * These methods do not need to check the signature of the twine or anything,
 * that is all handled by the {@link resolveHelper} function.
 *
 * @category Resolving
 */
export type ResolveCallers = {
  /**
   * Fetch a chain
   */
  fetchChain: (q: FetchChainQuery, options: any) => Awaitable<Chain | null>
  /**
   * Fetch a pulse
   */
  fetchPulse: (q: FetchPulseQuery, options: any) => Awaitable<Pulse | null>
  /**
   * A cache to use
   *
   * If set to `false` or `null`, no caching will be done
   *
   * Normally a resolver will keep a reference to its cache and simply pass it through
   * in here.
   *
   * @example
   * ```js
   * resolveHelper({
   *   //...
   *   cache: this.cache
   * })
   * ```
   */
  cache?: TwineCache | false | null
  /**
   * A cache to use for requests
   *
   * If set to `false` or `null`, no caching will be done
   *
   * This is a cache of pending requests, so that a lookup
   * for the same twine is not made multiple times.
   *
   * It is sufficient to use a simple Map for this.
   *
   * @example
   * ```js
   * //...
   * resolveHelper({
   *   //...
   *   requestCache: this.requestCache // a Map()
   * })
   * ```
   */
  requestCache?: Map<string, Promise<Chain | Pulse>>
}

const memoizeCallers = (callers: ResolveCallers): ResolveCallers => {
  if (!callers.requestCache) {
    return callers
  }
  const requestCache = callers.requestCache
  return {
    ...callers,
    fetchChain: async (q: FetchChainQuery, options: any) => {
      const key = q.chainCID.toString()
      const ret = await memoized(requestCache, key, callers.fetchChain, q, options)
      return ret as Chain | null
    },
    fetchPulse: async (q: FetchPulseQuery, options: any) => {
      const key = q.pulseCID.toString()
      const ret = await memoized(requestCache, key, callers.fetchPulse, q, options)
      return ret as Pulse | null
    }
  }
}

const sanitizeQuery = (thing: any): { chain: IntoCid, pulse?: IntoCid } => {
  let { chain, pulse, value } = thing

  if (pulse && value) {
    throw new Error('Expecting only one of "pulse" or "value" to be specified.')
  }

  pulse = pulse || value

  if (!chain && !pulse) {
    throw new Error('Expected at least one of "chain", "pulse", "value" to be specified')
  }

  if (pulse) {
    return { chain, pulse }
  }

  return { chain }
}

export async function resolveHelper(callers: ResolveCallers, thing: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
export async function resolveHelper(callers: ResolveCallers, thing: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
/**
 * A helper function for implementing the {@link Resolver.resolve} method
 *
 * @category Resolving
 * @param callers - The fetchers to use
 * @param thing - The query to resolve
 * @param options - Options for the resolution
 * @see {@link MemoryStore.resolve} for an example of how to use this
 * @see {@link ResolveCallers}
 * @example
 * ```js
 * class MemoryStore {
 *   async resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
 *   async resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
 *   async resolve(query: any, options?: ResolveOptions) {
 *     return resolveHelper({
 *       fetchChain: ({ chainCID }) => this.fetch(chainCID) as Chain | null,
 *       fetchPulse: ({ pulseCID }) => this.fetch(pulseCID) as Pulse | null
 *     }, query, options)
 *   }
 *   //...
 * }
 * ```
 */
export async function resolveHelper(callers: ResolveCallers, thing: IntoResolvePulseQuery | IntoResolveChainQuery, options: ResolveOptions = {}): Promise<Resolution> {
  const { noVerify = false, noCache = false } = options

  if (isTwine(thing)) {
    if (isChain(thing)) {
      thing = { chain: thing }
    } else {
      thing = { pulse: thing, chain: thing.value.content.chain }
    }
  }

  let { chain, pulse } = sanitizeQuery(thing)

  const res: any = {}

  if (!noCache) {
    if (callers.cache) {
      res.chain = callers.cache.fetch(chain)
      if (pulse !== undefined) {
        res.pulse = callers.cache.fetch(pulse)
      }
      if (res.chain && (pulse === undefined || res.pulse)) {
        return res
      }
    }

    callers = memoizeCallers(callers)
  }

  if (pulse !== undefined && !res.pulse) {
    if (Twine.isTwine(pulse)) {
      if (isPulse(pulse)) {
        res.pulse = pulse
        if (!chain) {
          chain = pulse.value.content.chain
        }
      } else {
        throw new Error('Expected pulse in pulse field but got chain')
      }
    } else {
      const chainCID = chain ? coerceCid(chain) : undefined
      const pulseCID = coerceCid(pulse)
      res.pulse = (await callers.fetchPulse({ pulseCID, chainCID }, options)) || null
      if (res.pulse && res.pulse.isChain) {
        throw new Error('Expected pulse but resolved chain')
      }
      if (res.pulse && !res.pulse.cid.equals(pulseCID)) {
        throw new Error('Pulse data does not match requested CID')
      }
    }
  }

  chain = chain || res.pulse?.value.content.chain
  if (chain !== undefined && !res.chain) {
    if (isTwine(chain)) {
      if (isChain(chain)) {
        res.chain = chain
      } else {
        throw new Error('Expected chain in chain field but got pulse')
      }
    } else {
      const chainCID = coerceCid(chain)
      res.chain = (await callers.fetchChain({ chainCID }, options)) || null
      if (res.chain && res.chain.isPulse) {
        throw new Error('Expected chain but resolved pulse')
      }
      if (res.chain && !res.chain.cid.equals(chainCID)) {
        throw new Error('Chain data does not match requested CID')
      }
    }
  }

  if (pulse !== undefined){
    if (!res.chain || !res.pulse){
      return {
        chain: null,
        pulse: null
      }
    }
  } else {
    if (!res.chain){
      return {
        chain: null
      }
    }
  }

  if (noVerify !== true) {
    await res.chain.verifySignature()
    if (pulse !== undefined) {
      await res.pulse.verifySignature(res.chain)
    }
  }

  if (callers.cache && noCache !== true) {
    callers.cache.save(res.chain)
    if (res.pulse){
      callers.cache.save(res.pulse)
    }
  }

  return res
}