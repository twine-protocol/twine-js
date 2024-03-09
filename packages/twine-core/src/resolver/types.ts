import type { PulseIndex, IntoCid, CID, Mixin, AnyIterable, Awaitable } from '../types'
import type { Chain, Pulse } from '../twine'

/**
 * A query to resolve a chain
 *
 * @category Resolving
 */
export type ResolveChainQuery<T = CID | IntoCid> = {
  /** The CID-like reference to the chain */
  chain: T
}

/**
 * A query to resolve a pulse
 *
 * @category Resolving
 */
export type ResolvePulseQuery<T = CID | IntoCid> = {
  /** The CID-like reference to the chain */
  chain?: T,
  /** The CID-like reference to the pulse */
  pulse: T,
}

/**
 * A query to resolve a chain strictly using a CID object
 *
 * @category Resolving
 */
export type ResolveChainQueryStrict = {
  /** The CID of the chain */
  chain: CID,
}

/**
 * A query to resolve a pulse strictly using CID objects
 *
 * @category Resolving
 */
export type ResolvePulseQueryStrict = {
  /** The CID of the chain */
  chain: CID,
  /** The CID of the pulse */
  pulse: CID,
}

/**
 * A strict query to resolve a chain or pulse
 *
 * @category Resolving
 * @see {@link ResolveChainQueryStrict}
 * @see {@link ResolvePulseQueryStrict}
 */
export type ResolveQueryStrict = ResolveChainQueryStrict | ResolvePulseQueryStrict

/**
 * The product of a successful chain resolution
 *
 * @category Resolving
 */
export type FulfilledChainResolution = {
  /** The resolved chain */
  chain: Chain
}

/**
 * The product of a successful pulse resolution
 *
 * @category Resolving
 */
export type FulfilledPulseResolution = {
  /** The resolved chain */
  chain: Chain,
  /** The resolved pulse */
  pulse: Pulse,
}

/**
 * The product of a failed chain resolution
 *
 * @category Resolving
 */
export type UnfulfilledChainResolution = {
  /** no chain */
  chain: null,
}

/**
 * The product of a failed pulse resolution
 *
 * @category Resolving
 */
export type UnfulfilledPulseResolution = {
  /** no chain */
  chain: null,
  /** no pulse */
  pulse: null,
}

/**
 * A successful chain or pulse resolution
 *
 * @category Resolving
 */
export type FulfilledResolution = FulfilledChainResolution | FulfilledPulseResolution

/**
 * A failed chain or pulse resolution
 *
 * @category Resolving
 */
export type UnfulfilledResolution = UnfulfilledChainResolution | UnfulfilledPulseResolution

/**
 * A successful or failed chain resolution
 *
 * @category Resolving
 */
export type ChainResolution = FulfilledChainResolution | UnfulfilledChainResolution

/**
 * A successful or failed pulse resolution
 *
 * @category Resolving
 */
export type PulseResolution = FulfilledPulseResolution | UnfulfilledPulseResolution

/**
 * A resolution of any kind
 *
 * @category Resolving
 */
export type Resolution = FulfilledResolution | UnfulfilledResolution

/**
 * Something that can be coerced into a chain resolution query
 *
 * @category Resolving
 */
export type IntoResolveChainQuery = FulfilledChainResolution | ResolveChainQuery | Chain

/**
 * Something that can be coerced into a pulse resolution query
 *
 * @category Resolving
 */
export type IntoResolvePulseQuery = FulfilledPulseResolution | ResolvePulseQuery | Pulse | Mixin

/**
 * Options for all resolvers
 *
 * They may or may not be applicable depending on the implementation
 *
 * @category Resolving
 */
export type ResolveOptions = {
  /**
   * If true, the resolver will not verify the signature of the resolved twine
   */
  noVerify?: boolean,
  /**
   * If true, the resolver will bypass the cache
   */
  noCache?: boolean,
}

/**
 * Resolves a query into a chain or pulse
 *
 * Resolvers are the primary way to fetch twines from somewhere. This
 * specifies a general interface for all resolvers.
 *
 * Resolvers are expected to verify the signature of the resolved twine.
 *
 * @category Resolving
 * @see {@link Store}
 *
 * @example
 * ```js
 * import { collect } from '@twine-protocol/twine-core'
 * const resolver = new MyResolver()
 * const chains = await collect(resolver.chains())
 * // resolve the latest pulse of the first chain
 * const resolution = await resolver.resolveLatest({ chain: chains[0] })
 * if (resolution.pulse) {
 *   // a verified pulse that is the latest this resolver knows of
 *   console.log('pulse', resolution.pulse)
 * }
 * ```
 */
export interface Resolver {
  /**
   * Resolve a chain from a query
   *
   * This is the main way to get a pulse or chain from somewhere
   * and have it automatically verified.
   *
   * If the input is already a successful resolution, it will
   * be returned as is.
   *
   * If the input is a chain or pulse, it will be resolved as
   * a chain or pulse resolution.
   *
   * @param query - The query to resolve
   * @param options - Options for the resolution
   * @returns A chain or pulse resolution
   *
   * @example
   * ```js
   * const { chain } = await resolver.resolve({ chain: 'bafybeib3...' })
   * if (chain) {
   *   console.log('chain', chain)
   * } else {
   *   console.log('no chain')
   * }
   * ```
   *
   * @example
   * ```js
   * const { chain, pulse } = await resolver.resolve({
   *   chain: 'bafybeib3...',
   *   pulse: 'bafybeib3...'
   * })
   *
   * if (pulse) {
   *   console.log('pulse', pulse)
   * } else {
   *   console.log('no pulse')
   * }
   * ```
   */
  resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  /**
   * Resolve a pulse (with its chain) from a query
   */
  resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>;

  /**
   * Resolve the latest pulse of a chain
   *
   * @param chain - The chain CID or chain itself to resolve the latest pulse from
   * @param options - Options for the resolution
   * @returns A pulse resolution
   *
   * @example
   * ```js
   * const resolution = await resolver.resolveLatest('bafybeib3...')
   * if (resolution.pulse) {
   *   console.log('pulse', resolution.pulse)
   * }
   * ```
   *
   * @example
   * ```js
   * const { chain } = await resolver.resolve({ chain: 'bafybeib3...' })
   * const resolution = await resolver.resolveLatest(chain)
   * ```
   */
  resolveLatest(chain: IntoCid, options?: ResolveOptions): Promise<PulseResolution>;

  /**
   * Resolve a pulse by index
   *
   * @param chain - The chain CID or chain itself to resolve the pulse from
   * @param index - The index of the pulse to resolve
   * @param options - Options for the resolution
   * @returns A pulse resolution
   *
   * @example
   * ```js
   * const resolution = await resolver.resolveIndex('bafybeib3...', 42)
   * if (resolution.pulse) {
   *   console.log('pulse', resolution.pulse)
   * }
   * ```
   */
  resolveIndex(chain: IntoCid, index: PulseIndex, options?: ResolveOptions): Promise<PulseResolution>;
  /**
   * Check if a cid can be resolved
   *
   * @param cid - The CID to check
   * @returns True if the CID can be resolved, false otherwise
   *
   * @example
   * ```js
   * const exists = await resolver.has('bafybeib3...')
   * if (exists) {
   *   console.log('chain exists')
   * } else {
   *   console.log('chain does not exist')
   * }
   * ```
   */
  has(cid: IntoCid): Awaitable<boolean>;

  /**
   * Get the pulses of a chain
   *
   * @param chain - The chain CID or chain itself to get the pulses from
   * @param start - The index or CID of the pulse to start from
   * @param options - Options for the resolution
   * @returns An sync/async iterable of pulses
   *
   * @example
   * ```js
   * // loop through pulses and print indices
   * for await (const pulse of resolver.pulses('bafybeib3...')) {
   *   console.log('pulse', pulse.value.content.index)
   * }
   * ```
   */
  pulses(chain: IntoCid, start?: PulseIndex | IntoCid, options?: ResolveOptions): AsyncGenerator<Pulse> | Generator<Pulse> | AnyIterable<Pulse>;
  /**
   * Get the chains that are known to the resolver
   *
   * @returns An sync/async iterable of chains
   *
   * @example
   * ```js
   * const chains = await collect(resolver.chains())
   * ```
   */
  chains(): AsyncGenerator<Chain> | Generator<Chain> | AnyIterable<Chain>;
}
