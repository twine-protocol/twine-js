import { Twine, TwineValue, MemoryStore, fromBytes } from '@twine-protocol/twine-core'
import { CarReader } from '@ipld/car'
import { CID } from '@twine-protocol/twine-core'

export interface Block {
  cid: CID
  bytes: Uint8Array
}

export async function *blocksToTwines(blocks: AsyncIterable<Block>): AsyncIterable<Twine<TwineValue>> {
  for await (const { cid, bytes } of blocks) {
    yield fromBytes({ cid, bytes })
  }
}

export async function toMemoryStore(reader: CarReader): Promise<MemoryStore> {
  const store = new MemoryStore()
  for await (const block of blocksToTwines(reader.blocks())) {
    store.save(block)
  }
  return store
}