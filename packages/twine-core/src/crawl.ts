import type { Resolver, ResolvePulseQueryStrict, FulfilledPulseResolution, ResolvePulseQuery, IntoResolvePulseQuery, Awaitable, PulseResolution, PulseIndex, Pulse, Chain } from '.'
import { IncompleteResolution, skipList, coerceCid, coerceQuery, ResolveOptions, isFulfilledPulseResolution, linksAsQueries, asQuery, isIterable, isPulseQuery } from '.'

/**
 * @groupDescription Crawling
 * Crawling is the process of moving through the tapestry via pulse links and mixins.
 * It is not possible to crawl "up" a chain, only "down" the chain.
 *
 * @see {@link crawl}
 */

/**
 * Something that could be a value or an iterator over that value type
 *
 * @group Crawling
 */
export type MaybeIterable<T> = Iterable<T> | T

/**
 * A path is a list of resolved pulse resolutions
 *
 * @group Crawling
 */
export type Path = FulfilledPulseResolution[]

/**
 * An object that contains a path
 *
 * @group Crawling
 */
export type CrawlPathContainer = {
  /** The path taken to get to this result */
  path: Path
}

/**
 * Options for the loader
 *
 * @group Crawling
 */
export type LoaderOptions = {
  /** Whether to throw an exception if something can't be resolved */
  throwUnresolvable?: boolean | undefined
} & ResolveOptions

/**
 * An object containing a load function that represents a pending crawl result
 *
 * @group Crawling
 */
export type CrawlPending = {
  /** Loads the pending result using a resolver */
  load: (resolver: Resolver, options?: LoaderOptions) => Promise<CrawlResult>
} & ResolvePulseQuery & CrawlPathContainer

/**
 * The result of a crawl that is a pulse resolution with a path
 *
 * @group Crawling
 */
export type CrawlResult = PulseResolution & CrawlPathContainer
/**
 * The result of a crawl that is a fulfilled pulse resolution with a path
 *
 * @group Crawling
 */
export type FulfilledCrawlResult = FulfilledPulseResolution & CrawlPathContainer

/**
 * Crawl Guide
 *
 * A crawl guide directs the crawl task by specifying the next
 * pulses to visit.
 *
 * @group Crawling
 * @example
 * ```js
 * // a guide that directs the crawl along one chain
 * const crawlAlong: CrawlGuide = ({ pulse, chain }) => {
 *  return [{ chain, pulse: pulse.value.content.links[0] }]
 * })
 * ```
 */
export type CrawlGuide = {
  (q: FulfilledCrawlResult): ResolvePulseQueryStrict[]
}

const assertFulfilledPulseResolution = (v: any): FulfilledPulseResolution => {
  if (isFulfilledPulseResolution(v)) {
    return v
  }
  throw new IncompleteResolution('Could not resolve target')
}

const coercePulseQuery = (v: any): ResolvePulseQueryStrict => {
  const q = coerceQuery(v)
  if (isPulseQuery(q)) {
    return q
  }
  throw new Error('Could not coerce to pulse query')
}

const coerceQueryArray = (v: any): ResolvePulseQueryStrict[] => {
  if (!Array.isArray(v)) {
    return [coercePulseQuery(v)]
  }
  return v.map(coercePulseQuery)
}

/**
 * Create a guide that moves horizontally across chains
 *
 * @group Crawling
 * @group CrawlGuide
 * @param {boolean} [revisit] if true, will revisit chains that have already been visited
 */
export const across = (revisit?: boolean): CrawlGuide => {
  const seen = new Set()
  return ({ pulse, chain }) => {
    seen.add(chain.cid.toString())
    const next = coerceQueryArray(pulse.value.content.mixins)
    if (revisit) {
      return next
    } else {
      return next.filter(({ chain }) => !seen.has(chain.toString()))
    }
  }
}

/**
 * Create a guide that visits all skiplist links as they are seen
 *
 * @group Crawling
 * @group CrawlGuide
 */
export const within = (): CrawlGuide => ({ pulse }) => linksAsQueries(pulse)

/**
 * Create a guide that moves along chains
 *
 * @group Crawling
 * @group CrawlGuide
 * @param {{ chain: Chain, pulse: Pulse | PulseIndex }} [target] if supplied, will skip towards this target
 */
export const along = (target?: { chain: Chain, pulse: Pulse | PulseIndex }): CrawlGuide => {
  let radix = 0
  let targetIndex = 0
  if (target) {
    radix = target.chain.value.content.links_radix || 0
    targetIndex = typeof target.pulse === 'number' ?
      target.pulse :
      target.pulse.value.content.index
  }

  return ({ pulse, chain }) => {
    const index = pulse.value.content.index
    if (index === targetIndex) {
      return []
    }
    const links = pulse.value.content.links
    const p = radix === 0 ? 0 : skipList(radix, index, targetIndex, true).next().value || 0
    const nextIndex = radix === 0 ? index - 1 : skipList(radix, index, targetIndex).next().value
    return coerceQueryArray(
      links.length ?
        [{
          chain
          , pulse: links[p] || links[0]
          , index: nextIndex
        }] :
        []
    )
  }
}

/**
 * Create a guide that spreads out in all directions
 *
 * @group Crawling
 * @group CrawlGuide
 * @param {boolean} [depthFirst] crawl along chains first
 */
export const spread = (depthFirst = true): CrawlGuide => {
  const getMixins = across()
  const getPrev = along()
  return (v) => {
    const mixins = getMixins(v)
    const prev = getPrev(v)
    return depthFirst ? prev.concat(mixins) : mixins.concat(prev)
  }
}

/**
 * Create a guide that does a random walk through the tapestry
 *
 * @group Crawling
 * @group CrawlGuide
 */
export const randomWalk = (): CrawlGuide => {
  const getNext = spread()
  return (v) => {
    const next = getNext(v)
    const l = next.length
    if (!l) { return [] }
    const i = (Math.random() * l) | 0
    return [next[i]]
  }
}

/**
 * Create a guide that moves efficiently towards a target pulse
 *
 * @param {FulfilledPulseResolution} target
 */
export const towards = (target: FulfilledPulseResolution): CrawlGuide => {
  const q = asQuery(target)
  const follow = along(target)
  const branch = across()
  if (!q) {
    throw new Error('Specified target is not a pulse')
  }
  return (v) => {
    if (v.chain.cid.equals(q.chain)) {
      return follow(v)
    }
    const others = branch(v)
    const priority = others.findIndex(({ chain }) => q.chain.equals(chain))
    if (priority > 0) {
      [others[0], others[priority]] = [others[priority], others[0]]
    }
    return others
  }
}

/**
 * Crawl the tapestry
 *
 * This is the main function to use for crawling the tapestry. The idea
 * is to specify a starting pulse (or pulses) and a guide to direct the
 * crawl. There are several built-in guides that can be used, or you can
 * create your own.
 *
 * The crawl won't load pulses until you call the `load` function on the
 * pending crawl result. This allows you to control the loading of pulses and
 * only load what you need.
 *
 * The crawl will also track visited pulses so that it doesn't visit the same
 * pulse twice. Although loops are impossible in the tapestry, different chains can
 * contain links to the same pulse, so it's possible to visit the same pulse
 * without tracking visited pulses.
 *
 * It's recommended to use an asyncIterable library (like
 * {@link https://github.com/reconbot/streaming-iterables | streaming-iterables})
 * to handle the async nature of the crawl. The `crawl` function returns an async
 * iterable that can use to iterate over the pending crawl results.
 *
 * @example
 * ```js
 * import { crawl, across } from '@twine-protocol/twine-core'
 * import { HttpResolver } from '@twine-protocol/twine-http-store'
 *
 * const resolver = new HttpStore('https://someapi.io')
 * const start = { chain: 'chaincid', pulse: 'pulsecid' }
 *
 * const limit = 100
 * const chains = new Map()
 * for await (const pending of crawl(start, across())) {
 *   if (path.length < limit) {
 *     const result = await pending.load(resolver)
 *     chains.set(result.chain.cid.toString(), result.chain)
 *   }
 * }
 * // we now have a list of chains within 100 steps
 * console.log(Array.from(chains.values()))
 * ```
 *
 * @group Crawling
 * @param {MaybeIterable<IntoResolvePulseQuery>} inputs - The starting pulse or pulses
 * @param {CrawlGuide} [direct] - The guide to use for crawling
 * @param {Set<string>} [visited] - The Set object to use for tracking visited pulses
 * @returns {AsyncIterable<CrawlPending>} - An async iterable of pending crawl results
 */
export async function* crawl(inputs: MaybeIterable<Awaitable<IntoResolvePulseQuery>>, direct = spread(), visited = new Set<string>()): AsyncIterable<CrawlPending> {
  type QueueItem = ResolvePulseQueryStrict & CrawlPathContainer & { index?: number }

  const withPath = (path: FulfilledPulseResolution[]) => (query: ResolvePulseQueryStrict) => ({ ...query, path })
  const queue: QueueItem[] = coerceQueryArray(await Promise.all(isIterable(inputs) ? inputs : [inputs]))
    .map(withPath([]))

  const notVisited = (q: ResolvePulseQueryStrict) => !visited.has(q.pulse.toString())
  const notQueued = (q: ResolvePulseQueryStrict) => !queue.find((query) => query.pulse.equals(q.pulse))
  const makeLoad = ({ chain, pulse, path, index }: QueueItem) => async (resolver: Resolver, options?: LoaderOptions) => {
    const res = await resolver.resolve({ chain, pulse })
    if (!isFulfilledPulseResolution(res)) {
      if (options?.throwUnresolvable) {
        throw new Error('Could not resolve')
      } else {
        return { ...res, path }
      }
    }
    if (index !== undefined && res.pulse.value.content.index !== index) {
      const actual = res.pulse.value.content.index
      throw new Error(`Resolved pulse with index ${actual} does not have expected index ${index}`)
    }
    visited.add(res.pulse.cid.toString())

    const node: FulfilledCrawlResult = { ...res, path }
    const upcoming = (direct(node) || [])
      .filter(notVisited)
      .filter(notQueued)
      .map(withPath([...path, res]))
    queue.splice(0, 0, ...upcoming)
    return node
  }

  for (let next = queue.shift(); next; next = queue.shift()) {
    yield {
      chain: coerceCid(next.chain),
      pulse: coerceCid(next.pulse),
      path: next.path,
      load: makeLoad(next)
    }
  }
}

/**
 * Find a path between two pulses
 *
 * This function is a convenience function that uses the `crawl` function to
 * find a path between two pulses. It will return a path if one is found, or
 * null if no path is found.
 *
 * @example
 * ```js
 * import { findPath } from '@twine-protocol/twine-core'
 * import { HttpStore } from '@twine-protocol/twine-http-store'
 *
 * const resolver = new HttpStore('https://someapi.io')
 * const start = { chain: 'chaincid', pulse: 'startpulsecid' }
 * const target = { chain: 'chaincid', pulse: 'targetpulsecid' }
 *
 * const path = await findPath(start, target, resolver)
 * if (path) {
 *   console.log('Path found:', path)
 * } else {
 *   console.log('No path found')
 * }
 * ```
 *
 * @group Crawling
 * @param {IntoResolvePulseQuery} start - The starting pulse, or a query for the starting pulse
 * @param {IntoResolvePulseQuery} target - The target pulse, or a query for the target pulse
 * @param {Resolver} resolver - The resolver to use for resolving pulses
 * @returns {Promise<Path | null>} - A path if one is found, or null if no path is found
 */
export async function findPath(start: IntoResolvePulseQuery, target: IntoResolvePulseQuery, resolver: Resolver): Promise<Path | null> {
  const _target = assertFulfilledPulseResolution(await resolver.resolve(target))
  for await (const q of crawl(start, towards(_target))) {
    const { chain, pulse, path } = await q.load(resolver, { throwUnresolvable: true })
    if (q.pulse.toString() === _target.pulse.cid.toString()) {
      const last = assertFulfilledPulseResolution({ chain, pulse })
      return path.concat([last])
    }
  }
  return null
}
