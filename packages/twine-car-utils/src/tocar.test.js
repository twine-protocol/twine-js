import { describe, test, expect, beforeAll } from 'bun:test'
import { createPulse, createChain, JoseSigner } from '@twine-protocol/twine-builder'
import { MemoryStore } from '@twine-protocol/twine-core'
import { storeToCar, toMemoryStore } from '.'
import { CarReader } from '@ipld/car'

async function concatUint8Arrays(iter) {
  const chunks = [];
  for await (const chunk of iter) {
    chunks.push(chunk);
  }
  return new Uint8Array(chunks.flatMap((chunk) => Array.from(chunk)));
}

describe('car-utils', async () => {
  let store
  let cids = []
  beforeAll(async () => {
    store = new MemoryStore()
    const signer = await JoseSigner.fromRandomness()
    const chain = await createChain({ source: 'test' }, signer)
    const first = await createPulse(chain, false, { payload: { hello: 'world' } }, signer)
    const second = await createPulse(chain, first, { payload: { hello: 'world' } }, signer)
    cids.push(chain.cid, first.cid, second.cid)
    store.save(chain)
    store.save(first)
    store.save(second)
  })

  test('should create a car from a store', async () => {
    const out = storeToCar(store)
    const bytes = await concatUint8Arrays(out)
    expect(bytes).toBeDefined()
    const reader = await CarReader.fromBytes(bytes)
    // reader should have all store contents
    for (const cid of cids){
      const block = await reader.get(cid)
      const twine = await store.fetch(cid)
      expect(block.bytes).toEqual(twine.bytes)
    }
  })

  test('should convert a car into a memory store', async () => {
    const out = storeToCar(store)
    const bytes = await concatUint8Arrays(out)
    expect(bytes).toBeDefined()
    const reader = await CarReader.fromBytes(bytes)
    const memstore = await toMemoryStore(reader)
    // memstore should have all store contents
    for (const cid of cids){
      const orig = await store.fetch(cid)
      const twine = await memstore.fetch(cid)
      expect(orig.bytes).toEqual(twine.bytes)
    }
  })
})