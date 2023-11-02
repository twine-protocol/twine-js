import type { Store, Twine, TwineValue, AnyIterable } from '@twine-protocol/twine-core'
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

async function drain<T>(iter: AnyIterable<T>, next: (v: T) => Promise<void>, done: () => Promise<void>): Promise<void> {
  for await (const v of iter) {
    await next(v)
  }
  await done()
}

export async function *twinesToCar(twines: AnyIterable<Twine<TwineValue>>, roots: AnyIterable<CID> = [EmptyCID]): AsyncIterable<Uint8Array> {
  const { writer, out } = CarWriter.create(await collect(roots))
  // writer.put doesn't resolve until next out bytes are consumed
  // so this is fine
  drain(
    twines,
    (twine) => writer.put(twine),
    () => writer.close()
  )
  for await (const chunk of out) {
    yield chunk
  }
}

export async function *allTwines(store: Store){
  for await (const chain of store.chains()) {
    yield chain
    for await (const pulse of store.pulses(chain)) {
      yield pulse
    }
  }
}

export async function *roots(store: Store){
  for await (const chain of store.chains()) {
    yield chain.cid
    const latest = await store.resolveLatest(chain.cid)
    if (!latest?.pulse) {
      throw new Error(`Could not resolve latest pulse for chain ${chain.cid}`)
    }
    yield latest.pulse.cid
  }
}

/**
 * Convert a store to a car format.
 * You can output the car to a file with:
 * ```js
 * const fs = require('fs')
 * Readable.from(out)
 *  .pipe(fs.createWriteStream('example.car'))
 * ```
 */
export function storeToCar(store: Store): AsyncIterable<Uint8Array> {
  return twinesToCar(allTwines(store), roots(store))
}
