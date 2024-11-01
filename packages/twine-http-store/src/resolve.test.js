import { describe, test, expect, beforeAll, mock, afterAll } from 'bun:test'
import { HttpStore } from '.'
import { mockFetch, setIsVerbose, setIsUsingBuiltInFetchFallback, clearFetchMocks } from '@aryzing/bun-mock-fetch'
import { createChain, createPulse, JoseSigner } from '@twine-protocol/twine-builder'
import { MemoryStore } from '@twine-protocol/twine-core'

setIsUsingBuiltInFetchFallback(false)
setIsVerbose(true)

async function* skip(iterable, count) {
  let i = 0
  for await (const item of iterable) {
    if (i++ >= count) yield item
  }
}

async function collect(iterable, count) {
  const items = []
  for await (const item of iterable) {
    items.push(item)
    if (count && items.length >= count) break
  }
  return items
}

describe('HttpStore', () => {
  const store = new HttpStore('http://localhost:3000')
  let chains = null

  beforeAll(async () => {
    const memory = new MemoryStore()

    const signer = await JoseSigner.fromRandomness('RS256', { modulusLength: 2048 })
    const chain = await createChain({ source: 'test', links_radix: 3 }, signer)
    memory.save(chain)
    let pulse = false
    for (let i = 0; i < 200; i++) {
      pulse = await createPulse(chain, pulse, { payload: { value: i } }, signer)
      memory.save(pulse)
    }

    mockFetch('http://localhost:3000/chains', {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      data: [chain]
    })

    mockFetch(`http://localhost:3000/chains/${chain.cid}`, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      data: chain
    })

    mockFetch(`http://localhost:3000/chains/${chain.cid}/pulses`, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      data: await collect(memory.pulses(chain))
    })

    mockFetch(`http://localhost:3000/chains/${chain.cid}/pulses/latest`, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      data: pulse
    })

    mockFetch(`http://localhost:3000/chains/${chain.cid}/pulses/199-100`, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      data: await collect(memory.pulses(chain), 100)
    })

    mockFetch(`http://localhost:3000/chains/${chain.cid}/pulses/99-0`, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      data: await collect(skip(memory.pulses(chain), 100), 100)
    })

    chains = await collect(store.chains())
  })

  test('should fetch chains', async () => {
    expect(chains).toBeDefined()
    expect(chains.length).toBeGreaterThan(0)
  })

  test('should resolve latest pulse', async () => {
    const latest = await store.resolveLatest(chains[0])
    expect(latest.chain).toBeDefined()
    expect(latest.pulse).toBeDefined()
  })

  test('should throttle parallel requests', async () => {
    const f = mock(fetch)
    const store = new HttpStore('http://localhost:3000', { fetch: f })
    for (const i of [1, 2, 3]){
      store.resolveLatest(chains[0])
    }
    await store.resolveLatest(chains[0])
    expect(f).toHaveBeenCalledTimes(1)
  })

  test('should resolve 10 pulses', async () => {
    const pulses = await collect(store.pulses(chains[0]), 10)
    expect(pulses.length).toBe(10)
  })

  test('should resolve 200 pulses', async () => {
    console.time('resolve 200 chain')
    const pulses = await collect(store.pulses(chains[0]), 200)
    console.timeEnd('resolve 200 chain')
    expect(pulses.length).toBe(200)
  })

  afterAll(() => {
    clearFetchMocks()
  })
})