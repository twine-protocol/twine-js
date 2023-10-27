import { describe, test, expect, beforeAll } from 'bun:test'
import { HttpStore } from '.'

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

  test('should resolve 10 pulses', async () => {
    const pulses = await collect(store.pulses(chains[0]), 10)
    expect(pulses.length).toBe(10)
  })

  test('should resolve 400 pulses', async () => {
    console.time('resolve 400 chain')
    const pulses = await collect(store.pulses(chains[0]), 400)
    console.timeEnd('resolve 400 chain')
    expect(pulses.length).toBe(400)
  })
})