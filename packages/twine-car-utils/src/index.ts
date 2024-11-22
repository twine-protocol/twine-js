/**
 * @packageDocumentation
 * This package provides utilities for converting twine data to and from CAR files.
 */

import type { Twine, TwineValue, AnyIterable, Resolver, Awaitable } from '@twine-protocol/twine-core'
import { CarWriter } from '@ipld/car'
import { CID } from 'multiformats'

export * from './car-to-memory-store'
export * from './resolver'

const EmptyCID = CID.parse('bafkqaaa')

async function collect<T>(iter: AnyIterable<T>): Promise<T[]> {
  const out: T[] = []
  for await (const v of iter) {
    out.push(v)
  }
  return out
}

async function drain<T>(iter: AnyIterable<T>, next: (v: T) => Awaitable<void>, done: (e?: Error) => Awaitable<void>): Promise<void> {
  try {
    for await (const v of iter) {
      await next(v)
    }
  } catch (e: any) {
    await done(e)
    throw e
  }
  await done()
}

/**
 * Convert an iterable of twines to a CARv2 formatted async iterable of byte arrays.
 * @param twines An iterable of twines
 * @param roots An iterable of CIDs to use as roots (typically the latest pulse of each chain, and the chain itself)
 * @returns An async iterable of byte arrays
 */
export async function *twinesToCar(twines: AnyIterable<Twine<TwineValue>>, roots: AnyIterable<CID> = [EmptyCID]): AsyncIterable<Uint8Array> {
  const { writer, out } = CarWriter.create(await collect(roots))
  // writer.put doesn't resolve until next out bytes are consumed
  // so this is fine
  let err: Error | null = null
  drain(
    twines,
    (twine) => writer.put(twine),
    (e) => {
      if (e) {
        err = e
      }
      writer.close()
    }
  )
  for await (const chunk of out) {
    yield chunk
  }
  if (err) {
    throw err
  }
}

/**
 * Get all twines in a resolver
 */
export async function* allTwines(resolver: Resolver){
  for await (const chain of resolver.chains()) {
    yield chain
    for await (const pulse of resolver.pulses(chain)) {
      yield pulse
    }
  }
}

/**
 * Get CIDs of chains and their latest pulses
 */
export async function* roots(resolver: Resolver){
  for await (const chain of resolver.chains()) {
    yield chain.cid
    const latest = await resolver.resolveLatest(chain.cid)
    if (!latest?.pulse) {
      throw new Error(`Could not resolve latest pulse for chain ${chain.cid}`)
    }
    yield latest.pulse.cid
  }
}

/**
 * Dump all resolvable chains to a CARv2 file.
 *
 * @example
 * ```js
 * // You can output the car to a file with:
 * import { pipeline } from 'node:stream/promises'
 * import { createWriteStream } from 'node:fs'
 * await pipeline(
 *   dumpToCar(resolver),
 *   createWriteStream(path)
 * )
 * ```
 */
export function dumpToCar(resolver: Resolver): AsyncIterable<Uint8Array> {
  return twinesToCar(allTwines(resolver), roots(resolver))
}
