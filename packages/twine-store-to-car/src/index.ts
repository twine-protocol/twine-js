import type { Store, Twine, TwineValue, AnyIterable } from '@twine-protocol/twine-core'
import { CarWriter } from '@ipld/car'
import { CID } from 'multiformats'

const EmptyCID = CID.parse('bafkqaaa')

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

export async function *allTwines(store: Store){
  for await (const chain of store.chains()) {
    yield chain
    for await (const pulse of store.pulses(chain)) {
      yield pulse
    }
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
  return twinesToCar(allTwines(store))
}
