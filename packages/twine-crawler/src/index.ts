import type { Resolver, ResolvePulseQueryStrict, FulfilledPulseResolution, ResolvePulseQuery, IntoResolvePulseQuery, Awaitable, PulseResolution } from '@twine-protocol/twine-core'
import { skipList, coerceCid, coerceQuery, ResolveOptions, isFulfilledPulseResolution, linksAsQueries, asQuery, isIterable, isPulseQuery } from '@twine-protocol/twine-core'

export type MaybeIterable<T> = Iterable<T> | T

export type Path = FulfilledPulseResolution[]

export type CrawlPathContainer = {
  path: FulfilledPulseResolution[]
}

export type LoaderOptions = {
  throwUnresolvable?: boolean | undefined
} & ResolveOptions

export type CrawlPending = {
  load: (resolver: Resolver, options?: LoaderOptions) => Promise<CrawlResult>
} & ResolvePulseQuery & CrawlPathContainer

export type CrawlResult = PulseResolution & CrawlPathContainer
export type FulfilledCrawlResult = FulfilledPulseResolution & CrawlPathContainer

export type CrawlGuide = {
  (q: FulfilledCrawlResult): ResolvePulseQueryStrict[]
}

export class IncompleteResolution extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'IncompleteResolution'
  }
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
 */
export const within = (): CrawlGuide => ({ pulse }) => linksAsQueries(pulse)

/**
 * Create a guide that moves along chains
 * @param {FulfilledPulseResolution} [resolvedTarget] if supplied, will skip towards this target
 */
export const along = (resolvedTarget?: FulfilledPulseResolution): CrawlGuide => {
  let radix = 0
  let targetIndex = 0
  if (resolvedTarget) {
    radix = resolvedTarget.chain.value.content.links_radix || 0
    targetIndex = resolvedTarget.pulse.value.content.index
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
 * Create a guide that spreads out to all immediate parents
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

export async function* crawl(inputs: MaybeIterable<Awaitable<IntoResolvePulseQuery>>, direct = spread(), visited = new Set()): AsyncIterable<CrawlPending> {
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

export async function findPath(start: IntoResolvePulseQuery, target: IntoResolvePulseQuery, resolver: Resolver): Promise<Path | null>  {
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
