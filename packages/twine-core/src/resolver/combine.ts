import { ChainResolution, IntoResolveChainQuery, IntoResolvePulseQuery, PulseResolution, ResolveOptions, Resolver, resolveHelper } from '.'
import { Awaitable, Chain, IntoCid, Pulse } from '..'
import { TwineCache } from '../store'

export type CombineResolversOptions = {
  cacheSize?: number
}

export interface ResolveOptionsCombined extends ResolveOptions {
  race?: boolean
}

export interface ResolveLatestOptionsCombined extends ResolveOptions {
  checkAll?: boolean,
}

export interface CombinedResolver extends Resolver {
  add: (r: Resolver) => void,
  remove: (r: Resolver) => void,
  setCacheSize: (count: number) => void,
  close(): Awaitable<void>
}

export type CombinedPulseResolution = PulseResolution & {
  errors?: Error[]
  resolver?: Resolver
}

export type CombinedChainResolution = ChainResolution & {
  errors?: Error[]
  resolver?: Resolver
}

function firstTruthy<T>(input: Iterable<Awaitable<T>>): Promise<T | false> {
  // reads in parallel, returns first truthy value
  return new Promise((res, rej) => {
    let done = false
    let pending = 0
    for (const item of input) {
      pending += 1
      Promise.resolve(item).then((result: any) => {
        if (done) { return }
        if (result) {
          done = true
          res(result)
        }
      }).catch((e: any) => {
        if (!done) {
          done = true
          rej(e)
        }
      }).finally(() => {
        pending -= 1
        if (pending === 0 && !done) {
          done = true
          res(false)
        }
      })
    }
  })
}

export const combineResolvers = (
  resolverList: Resolver[] = [],
  { cacheSize = 100 }: CombineResolversOptions = {}
): CombinedResolver => {
  const resolvers = new Set<Resolver>(resolverList)

  const requestCache = new Map<string, Promise<Chain | Pulse>>()
  const cache = new TwineCache()
  cache.setMaxSize(cacheSize)

  const setCacheSize = (count: number) => cache.setMaxSize(count)
  const add = (r: Resolver) => { resolvers.add(r) }
  const remove = (r: Resolver) => { resolvers.delete(r) }

  const series = async (task: (r: Resolver) => any): Promise<{ result: any, errors?: Error[], resolver?: Resolver }> => {
    const errors: Error[] = []
    for (const r of resolvers) {
      try {
        const result = await task(r)
        if (result) {
          return { result, errors: errors.length ? errors : undefined, resolver: r }
        }
      } catch (e: any) {
        errors.push(e)
      }
    }
    return { result: null, errors: errors.length ? errors : undefined }
  }

  const race = (task: (r: Resolver) => any): Promise<{ result: any, errors?: Error[], resolver?: Resolver }> => {
    let resolve: (value: { result: any, errors?: Error[], resolver?: Resolver }) => void
    const allDone = new Promise<{ result: any, errors?: Error[], resolver?: Resolver }>((res, rej) => {
      resolve = res
    })
    const errors: Error[] = []
    const waitingFor = resolvers.size
    let doneTasks = 0
    const run = (r: Resolver) => task(r).then((result: any) => {
      if (result) {
        resolve({ result, errors: errors.length ? errors : undefined, resolver: r })
      }
    }).catch((e: Error) => {
      errors.push(e)
    }).finally(() => {
      doneTasks++
      if (doneTasks >= waitingFor) {
        resolve({ result: null, errors: errors.length ? errors : undefined })
      }
    })
    for (const r of resolvers) {
      run(r)
    }
    return allDone
  }

  const exec = (task: (r: Resolver) => any, raceTasks = false): Promise<{ result: any, errors?: Error[] }> => {
    if (raceTasks){
      return race(task)
    } else {
      return series(task)
    }
  }

  async function resolve(query: IntoResolveChainQuery, options?: ResolveOptionsCombined): Promise<CombinedChainResolution>
  async function resolve(query: IntoResolvePulseQuery, options?: ResolveOptionsCombined): Promise<CombinedPulseResolution>
  async function resolve(query: any, options?: ResolveOptionsCombined): Promise<CombinedPulseResolution | CombinedChainResolution> {
    const opts = {
      ...options,
      noCache: true
    }
    const errors: Error[] = []
    const resolution = await resolveHelper({
      fetchChain: async ({ chainCID }) => {
        const res = await exec(async r => {
          const res = await r.resolve({ chain: chainCID }, opts)
          if (res.chain){
            return res.chain
          }
          return null
        }, options?.race)
        errors.push.apply(errors, res.errors ?? [])
        return res.result
      },
      fetchPulse: async ({ chainCID, pulseCID }) => {
        const res = await exec(async r => {
          const res = await r.resolve({ chain: chainCID, pulse: pulseCID }, opts)
          if (res.pulse){
            return res.pulse
          }
          return null
        }, options?.race)
        errors.push.apply(errors, res.errors ?? [])
        return res.result
      },
      cache,
      requestCache
    }, query, options)
    return {
      ...resolution,
      errors: errors.length ? errors : undefined
    }
  }

  const resolveIndex = async (chainCid: IntoCid, index: number, options?: ResolveOptionsCombined): Promise<CombinedPulseResolution> => {
    const chain = cache.fetch(chainCid) || chainCid
    const opts = {
      ...options,
      noCache: true
    }
    const result = await exec(async r => {
      const res = await r.resolveIndex(chain, index, opts)
      if (res.pulse && res.chain){
        return res
      }
      return null
    }, options?.race)
    const errors = result.errors
    const resolution = result.result
    if (!resolution?.pulse || !resolution?.chain) {
      return {
        chain: null,
        pulse: null,
        errors
      }
    }
    if (resolution.chain) {
      cache.save(resolution.chain)
    }
    if (resolution.pulse){
      cache.save(resolution.pulse)
    }
    return {
      ...resolution,
      errors,
    }
  }

  const bestLatest = async (chainCid: IntoCid, options?: ResolveLatestOptionsCombined) => {
    const opts = {
      ...options,
      noCache: true
    }
    const tasks = []
    for (const r of resolvers) {
      const resolver = r
      tasks.push(r.resolveLatest(chainCid, opts).then(res => {
        return {
          chain: res.chain,
          pulse: res.pulse,
          resolver
        }
      }))
    }
    const results = await Promise.allSettled(tasks)
    const errors: Error[] = []
    let latest: PulseResolution = { chain: null, pulse: null }
    let resolver
    let latestIndex = -1
    for (const result of results) {
      if (result.status === 'fulfilled') {
        const pulse = result.value.pulse
        const chain = result.value.chain
        if (chain && pulse && (latestIndex < pulse.value.content.index)) {
          latest = { chain, pulse }
          latestIndex = pulse.value.content.index
          resolver = result.value.resolver
        }
      } else {
        errors.push(result.reason)
      }
    }
    return {
      errors: errors.length ? errors : undefined,
      ...latest,
      resolver
    }
  }

  const resolveLatest = async (chainCid: IntoCid, options?: ResolveLatestOptionsCombined): Promise<CombinedPulseResolution> => {
    const chain = cache.fetch(chainCid) || chainCid
    const opts = {
      ...options,
      noCache: true
    }
    if (options?.checkAll){
      return bestLatest(chain, opts)
    } else {
      const result = await race(async r => {
        const res = await r.resolveLatest(chain, opts)
        if (res.pulse){
          return res
        }
        return null
      })
      return {
        errors: result.errors,
        ...result.result,
        resolver: result.resolver
      }
    }
  }

  const pulses = async function* (chainCid: IntoCid, start?: number | IntoCid, options? : ResolveOptionsCombined & ResolveLatestOptionsCombined) {
    let res
    if (start === undefined) {
      res = await bestLatest(chainCid, options)
    } else if (typeof start === 'number') {
      res = await resolveIndex(chainCid, start, options)
    } else {
      res = await resolve({
        chain: chainCid,
        pulse: start
      }, options)
    }
    let chain = res.chain
    let startPulse = res.pulse
    let resolver = res.resolver
    if (!chain || !startPulse || !resolver) {
      if (res.errors?.length) {
        throw res.errors[0]
      }
      return
    }
    yield* resolver.pulses(chain, startPulse, options)
  }

  const has = async (cid: IntoCid): Promise<boolean> => {
    const cidStr = cid.toString()
    if (cache.has(cidStr)) { return true }
    const promises = Array.from(resolvers.values()).map(r => r.has(cid))
    const first = await firstTruthy(promises)
    if (first) { return true }
    return false
  }

  const chains = async function* () {
    const seen = new Set<string>()
    for (const r of resolvers) {
      for await (const chain of r.chains()) {
        const cid = chain.cid.toString()
        if (!seen.has(cid)) {
          seen.add(cid)
          yield chain
        }
      }
    }
  }

  return {
    resolve,
    resolveLatest,
    resolveIndex,
    pulses,
    chains,
    add,
    has,
    remove,
    setCacheSize,
    async close(){
      for (const r of resolvers) {
        // @ts-ignore
        if (r.close) {
          // @ts-ignore
          await r.close()
        }
      }
    }
  }
}

