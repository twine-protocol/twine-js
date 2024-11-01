import { Twine, TwineValue, MemoryStore, fromBytes } from '@twine-protocol/twine-core'
import { CarReader } from '@ipld/car'
import { CID } from '@twine-protocol/twine-core'

/**
 * A block in a CARv2 file
 */
export interface Block {
  /** The block CID */
  cid: CID
  /** The block bytes */
  bytes: Uint8Array
}

/**
 * Convert blocks to twines
 */
export async function *blocksToTwines(blocks: AsyncIterable<Block>): AsyncIterable<Twine<TwineValue>> {
  for await (const { cid, bytes } of blocks) {
    yield fromBytes({ cid, bytes })
  }
}

/**
 * Convert a CARv2 reader to a MemoryStore
 *
 * This will save all twines in the reader to a MemoryStore
 *
 * @example
 * ```js
 * import { CarReader } from '@ipld/car'
 * const reader = await CarReader.fromBytes(bytes)
 * const memstore = await toMemoryStore(reader)
 * // use memstore as a Resolver
 * ```
 */
export async function toMemoryStore(reader: CarReader): Promise<MemoryStore> {
  const store = new MemoryStore()
  for await (const block of blocksToTwines(reader.blocks())) {
    store.save(block)
  }
  return store
}