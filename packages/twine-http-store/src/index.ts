import type { IntoCid, Twine, Resolution, ResolveOptions, TwineValue, Chain, Pulse, AnyIterable, PulseIndex, PulseResolution, IntoResolveChainQuery, ChainResolution, IntoResolvePulseQuery } from '@twine-protocol/twine-core'
import type { FetcherType, FetcherOptions } from 'itty-fetcher'
import { TwineCache, fromBytes, fromJSON, coerceCid, isPulse, resolveHelper, Store, isTwine } from '@twine-protocol/twine-core'
import { CID } from 'multiformats'
import { fetcher } from 'itty-fetcher'
import { CarReader, CarWriter } from '@ipld/car'

const EmptyCID = CID.parse('bafkqaaa')

function* batchRange(from: number, to: number, batchSize: number) {
  let i = from
  while (i > to) {
    yield [i, Math.max(to, i - batchSize)]
    i -= batchSize + 1
  }
}

async function* buffer<T>(iter: AnyIterable<T>, bufferSize = 100): AsyncIterable<T> {
  const buffer: T[] = []
  for await (const v of iter) {
    buffer.push(v)
    if (buffer.length >= bufferSize) {
      yield* buffer.splice(0)
    }
  }
  if (buffer.length) {
    yield* buffer
  }
}

async function* map<T, V>(iter: AnyIterable<T>, fn: (v: T) => Promise<V>): AsyncIterable<V> {
  for await (const v of iter) {
    yield fn(v)
  }
}

function pipeline(iter: AnyIterable<any>, ...fns: ((v: AnyIterable<any>) => AsyncIterable<any>)[]): AsyncIterable<any> {
  return fns.reduce((iter, fn) => fn(iter), iter as AsyncIterable<any>)
}

async function drain<T>(iter: AnyIterable<T>, next: (v: T) => Promise<void>, done: () => Promise<void>): Promise<void> {
  for await (const v of iter) {
    await next(v)
  }
  await done()
}

export function twinesToCar(twines: AnyIterable<Twine<TwineValue>>): AsyncIterable<Uint8Array> {
  const { writer, out } = CarWriter.create([EmptyCID])
  // writer.put doesn't resolve until next out bytes are consumed
  // so this is fine
  drain(
    twines,
    (twine) => writer.put(twine),
    () => writer.close()
  )
  return out
}

async function parseCarResponse(res: Response, cache?: TwineCache): Promise<Twine<TwineValue>[]> {
  if (!res.body) {
    throw new Error('Response body is empty')
  }
  const car = await CarReader.fromIterable(res.body)
  const twines: Twine<TwineValue>[] = []
  for await (const { cid, bytes } of car.blocks()) {
    if (cache?.has(cid)) {
      twines.push(cache.fetch(cid)!)
    } else {
      const twine = await fromBytes({ cid, bytes })
      twines.push(twine)
    }
  }
  return twines
}

async function parseJsonResponse(res: Response, cache?: TwineCache): Promise<Twine<TwineValue>[]> {
  const json: any = await res.json()
  if (Array.isArray(json)) {
    return Promise.all(json.map(j => {
      const cid = j.cid['/']
      if (cache?.has(cid)) {
        return cache.fetch(cid)!
      } else {
        return fromJSON(j)
      }
    }))
  } else {
    const cid = json?.cid['/']
    if (cache?.has(cid)) {
      return [cache.fetch(cid)!]
    } else {
      return [await fromJSON(json)]
    }
  }
}

type ApiResponse<T extends Twine<TwineValue>> = {
  response: Response,
  twines: T[],
}

async function handleResponse(res: Response): Promise<ApiResponse<Twine<TwineValue>>> {
  if (res.status >= 200 && res.status < 300) {
    if (parseInt(res.headers.get('content-length') ?? '', 10) == 0) {
      return {
        response: res,
        twines: [],
      }
    }
    const contentType = res.headers.get('content-type')
    if (!contentType || contentType.includes('json')) {
      return {
        response: res,
        twines: await parseJsonResponse(res),
      }
    } else if (contentType?.includes('application/vnd.ipld.car') || contentType?.includes('application/octet-stream')) {
      return {
        response: res,
        twines: await parseCarResponse(res),
      }
    } else {
      // shrug
      throw new Error(`Unknown content type: ${contentType}`)
    }
  } else if (res.status === 404) {
    return {
      response: res,
      twines: [],
    }
  } else {
    let msg = `HTTP error: ${res.status} ${res.statusText}`
    try {
      const json: any = await res.json()
      if (json?.error?.message) {
        msg = json.error.message
      }
    } catch (e) {
      // ignore
    }
    const err = new Error(msg)
    // @ts-ignore
    err.response = res
    throw err
  }
}

export class HttpStore implements Store {
  private fetcher: FetcherType
  private cache: TwineCache = new TwineCache()

  constructor(baseUrl: string, fetcherOptions?: FetcherOptions ) {
    this.fetcher = fetcher({
      ...fetcherOptions,
      base: baseUrl,
      handleResponse,
    })
  }

  private async fetchRawPulse(chain: IntoCid, subpath: string): Promise<Pulse | null> {
    const path = `/chains/${coerceCid(chain)}/pulses/${subpath}`
    const { twines } = await this.fetcher.get<ApiResponse<Pulse>>(path)
    if (!twines.length) {
      return null
    }
    const pulse = twines[0]
    return pulse
  }

  async fetchChain(chainCid: IntoCid): Promise<Chain | null> {
    const path = `/chains/${coerceCid(chainCid)}`
    const { twines } = await this.fetcher.get<ApiResponse<Chain>>(path)
    if (!twines.length) {
      return null
    }
    return twines[0]
  }

  async *chains(): AsyncIterable<Chain> {
    const { twines } = await this.fetcher.get<ApiResponse<Chain>>('/chains')
    for (const chain of twines) {
      await chain.verifySignature()
      yield chain
    }
  }

  async *pulses(chain: IntoCid, start?: PulseIndex | IntoCid, options?: ResolveOptions): AsyncIterable<Pulse> {
    const batchSize = 99
    let res: PulseResolution
    if (typeof start === 'number') {
      res = await this.resolveIndex(chain, start, options)
    } else if (start) {
      res = await this.resolve({ chain, pulse: start }, options)
    } else {
      res = await this.resolveLatest(chain, options)
    }
    if (!res.pulse || !res.chain) {
      return
    }

    const startingPulse = res.pulse
    const startIndex = startingPulse.value.content.index
    let previous: Pulse | null = null
    yield* pipeline(
      // get pulse "pagination"
      batchRange(startIndex, 0, batchSize),
      // fetch from server in pages
      (iter) => map(iter, async ([from, to]) => {
        const path = `/chains/${coerceCid(chain)}/pulses/${from}-${to}`
        const { twines } = await this.fetcher.get<ApiResponse<Pulse>>(path, undefined, {
          headers: {
            'Accept': 'application/vnd.ipld.car, application/json;q=0.5',
          }
        })
        // ensure we got the right number of pulses
        if(twines.length !== (from - to + 1)) {
          throw new Error('Expected number of pulses not returned')
        }
        return twines
      }),
      // buffer next page
      (iter) => buffer(iter, 1),
      async function* flatten(iter) {
        for await (const twines of iter) {
          yield* twines
        }
      },
      // validate pulses
      (iter) => map(iter, async pulse => {
        if (!pulse) {
          const expected = previous ? previous.value.content.index - 1 : startingPulse.value.content.index
          throw new Error(`Pulse with index ${expected} not found`)
        }
        await pulse.verifySignature(res.chain)
        // check that it's the next pulse in the chain
        if (previous && !previous.value.content.links[0].equals(pulse.cid)) {
          throw new Error('Pulses not in correct order')
        }
        previous = pulse
        return pulse
      })
    )
  }

  async fetch(cid: IntoCid): Promise<Twine<TwineValue> | null> {
    const path = `/cid/${coerceCid(cid)}`
    const { twines } = await this.fetcher.get<ApiResponse<Twine<TwineValue>>>(path)
    if (!twines.length) {
      return null
    }
    return twines[0]
  }

  async has(cid: IntoCid): Promise<boolean> {
    const path = `/cid/${coerceCid(cid)}`
    const { response } = await this.fetcher.head<ApiResponse<any>>(path)
    return response.status === 200
  }

  async delete(cid: IntoCid): Promise<void> {
    throw new Error('Not implemented')
  }

  async resolveIndex(chain: IntoCid, index: PulseIndex, options?: ResolveOptions): Promise<PulseResolution> {
    const pulse = await this.fetchRawPulse(chain, `${index}`)
    if (!pulse) {
      return {
        chain: null,
        pulse: null,
      }
    }
    return this.resolve({
      chain,
      pulse,
    }, options)
  }

  resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
  resolve(query: any, options?: ResolveOptions): Promise<Resolution> {
    return resolveHelper({
      fetchChain: ({ chainCID }) => this.fetchChain(chainCID),
      fetchPulse: ({ chainCID, pulseCID }) => {
        if (!chainCID) {
          throw new Error('chainCID is required')
        }
        return this.fetchRawPulse(chainCID, `${pulseCID}`)
      },
      cache: this.cache,
    }, query, options)
  }

  async resolveLatest(chain: IntoCid, options?: ResolveOptions): Promise<PulseResolution> {
    const pulse = await this.fetchRawPulse(chain, 'latest')
    if (!pulse) {
      return {
        chain: null,
        pulse: null,
      }
    }
    return this.resolve({ chain, pulse }, options)
  }

  async saveMany(twines: AnyIterable<Twine<TwineValue>>): Promise<void> {
    const chains = new Map<string, Twine<TwineValue>>()
    const pulsesByChain = new Map<string, Pulse[]>()
    for await (const twine of twines) {
      if (!isTwine(twine)) {
        throw new Error('Found value that is not a twine')
      } else if (isPulse(twine)) {
        const chain = twine.value.content.chain.toString()
        if (!pulsesByChain.has(chain)) {
          pulsesByChain.set(chain, [])
        }
        pulsesByChain.get(chain)!.push(twine)
      } else {
        // it's a chain
        const chain = twine.cid.toString()
        chains.set(chain, twine)
      }
    }

    // save chains first
    await Promise.all(
      Array.from(chains.values())
        .map(chain => this.save(chain))
    )

    // save pulses
    await Promise.all(
      Array.from(pulsesByChain.entries())
        .map(async ([chain, pulses]) => {
          const car = twinesToCar(pulses)
          const path = `/chains/${chain}/pulses`
          await this.fetcher.post(path, car, {
            headers: {
              'Content-Type': 'application/vnd.ipld.car',
            }
          })
          pulses.forEach(pulse => this.cache?.save(pulse))
        })
    )
  }

  async save(twine: Twine<TwineValue>) {
    const ispulse = isPulse(twine)
    const chainCid = ispulse ? twine.value.content.chain : twine.cid
    const path = ispulse ? `/chains/${chainCid}/pulses` : '/chains'
    await this.fetcher.post(path, twine)
    this.cache?.save(twine)
  }
}