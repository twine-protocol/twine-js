import { Resolution, ResolveOptions, ResolveQuery, Resolver, resolveHelper } from '.'
import { Chain, IntoCid, Pulse, asQuery } from '..'
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
  setCacheSize: (count: number) => void
}

export type CombinedResolution = Resolution & {
  errors?: Error[]
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

  const series = async (task: (r: Resolver) => any): Promise<{ result: any, errors?: Error[] }> => {
    const errors: Error[] = []
    for (const r of resolvers) {
      try {
        const result = await task(r)
        if (result) {
          return { result, errors: errors.length ? errors : undefined }
        }
      } catch (e: any) {
        errors.push(e)
      }
    }
    return { result: null, errors: errors.length ? errors : undefined }
  }

  const race = (task: (r: Resolver) => any): Promise<{ result: any, errors?: Error[] }> => {
    let resolve: (a: any) => void
    const allDone = new Promise<{ result: any, errors?: Error[] }>((res, rej) => {
      resolve = res
    })
    const errors: Error[] = []
    const waitingFor = resolvers.size
    let doneTasks = 0
    for (const r of resolvers) {
      task(r).then((result: any) => {
        if (result) {
          resolve({ result, errors: errors.length ? errors : undefined })
        }
      }).catch((e: Error) => {
        errors.push(e)
      }).finally(() => {
        doneTasks++
        if (doneTasks >= waitingFor) {
          resolve({ result: null, errors: errors.length ? errors : undefined })
        }
      })
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

  const resolve = async (query: ResolveQuery, options?: ResolveOptionsCombined): Promise<CombinedResolution> => {
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

  const resolveIndex = async (chainCid: IntoCid, index: number, options?: ResolveOptionsCombined): Promise<CombinedResolution> => {
    const chain = cache.fetch(chainCid) || chainCid
    const opts = {
      ...options,
      noCache: true
    }
    const result = await exec(r => r.resolveIndex(chain, index, opts), options?.race)
    const errors = result.errors
    const resolution = result.result
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
    let latest: Resolution = { chain: null, pulse: null }
    let resolver = null
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

  const resolveLatest = async (chainCid: IntoCid, options?: ResolveLatestOptionsCombined): Promise<CombinedResolution> => {
    const chain = cache.fetch(chainCid) || chainCid
    const opts = {
      ...options,
      noCache: true
    }
    if (options?.checkAll){
      return bestLatest(chain, opts)
    } else {
      const tasks = []
      for (const r of resolvers) {
        tasks.push(r.resolveLatest(chain, opts))
      }
      const result = await race(async r => {
        const res = await r.resolveLatest(chain, opts)
        if (res.pulse){
          return res
        }
        return null
      })
      return {
        errors: result.errors,
        ...result.result
      }
    }
  }

  const pulses = async function* (chainCid: IntoCid, start?: number | IntoCid, options? : ResolveOptionsCombined & ResolveLatestOptionsCombined) {
    let chain
    let startPulse
    if (start === undefined) {
      const latest = await bestLatest(chainCid, options)
      if (!latest.pulse) { return }
      chain = latest.chain
      if (!chain) { return }
      startPulse = latest.pulse
    } else if (typeof start === 'number') {
      const res = await resolveIndex(chainCid, start, options)
      if (!res.pulse) { return }
      chain = res.chain
      if (!chain) { return }
      startPulse = res.pulse
    } else {
      const res = await resolve({
        chain,
        pulse: start
      }, options)
      if (!res.pulse) { return }
      chain = res.chain
      if (!chain) { return }
      startPulse = res.pulse
    }
    let index = startPulse.value.content.index
    yield startPulse
    for (; index >= 0; index--) {
      const res = await resolveIndex(chain, index, options)
      if (!res.pulse) { return }
      yield res.pulse
    }
  }

  return {
    resolve,
    resolveLatest,
    resolveIndex,
    pulses,
    add,
    remove,
    setCacheSize
  }
}

