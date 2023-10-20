import { Chain, Pulse, TwineCache, coerceCid, isChain, isPulse, isTwine } from '..'
import type { Awaitable, CID, IntoCid } from '../types'
import { Twine } from '../twine'
import type { IntoResolveQuery, Resolution, ResolveOptions, UnfulfilledResolution } from './types'

const memoized = (
  cache: Map<string, Promise<Chain | Pulse | null>>,
  key: string,
  fn: (...args: any[]) => Awaitable<Chain | Pulse | null>,
  ...args: any[]
) => {
  if (cache.has(key)) {
    return cache.get(key)
  }
  const result = Promise.resolve(fn(...args))
    .finally(() => cache.delete(key))
  cache.set(key, result)
  return result
}

export type FetchChainQuery = {
  chainCID: CID
}

export type FetchPulseQuery = {
  chainCID?: CID,
  pulseCID: CID
}

export type ResolveCallers = {
  fetchChain: (q: FetchChainQuery, options: any) => Awaitable<Chain | null>
  fetchPulse: (q: FetchPulseQuery, options: any) => Awaitable<Pulse | null>
  cache?: TwineCache | false | null
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

export const resolveHelper = async (
  callers: ResolveCallers,
  thing: IntoResolveQuery,
  options: ResolveOptions = {}
): Promise<Resolution> => {
  const { noVerify = false, noCache = false } = options

  if (isTwine(thing)) {
    if (isChain(thing)) {
      thing = { chain: thing }
    } else {
      thing = { pulse: thing, chain: thing.value.content.chain }
    }
  }

  let { chain, pulse } = sanitizeQuery(thing)

  if (!noCache) {
    if (callers.cache) {
      const result = await callers.cache.resolve({ chain, pulse })
      if (result.chain && ((pulse && result.pulse) || !pulse)) {
        return result
      }
    }

    callers = memoizeCallers(callers)
  }

  const res: any = {}

  if (pulse) {
    if (Twine.isTwine(pulse)) {
      if (isPulse(pulse)) {
        res.pulse = pulse
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
  if (chain) {
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
      if (noVerify !== true) {
        if (!res.chain) {
          // could not verify
          const empty: UnfulfilledResolution = { chain: null }
          if (pulse) {
            empty.pulse = null
          }
          return empty
        } else if (res.chain) {
          await res.chain.verifySignature()
        }
      }
    }
  }

  if (noVerify !== true) {
    if (!res.chain) {
      return { chain: null, pulse: null } // could not verify
    }

    if (res.pulse) {
      await res.pulse.verifySignature(res.chain)
    }
  }

  if (callers.cache && noCache !== true) {
    callers.cache.save(res.chain)
    callers.cache.save(res.pulse)
  }

  return res
}