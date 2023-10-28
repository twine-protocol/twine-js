import { describe, test, expect, beforeAll } from 'bun:test'
import { crawl, along, across, spread } from './crawl'
import { createPulse, createChain, JoseSigner } from '@twine-protocol/twine-builder'
import { MemoryStore } from './store'

function* times(n) {
  for (let i = 0; i < n; i++) { yield i }
}

async function zigzagGraph(nchains = 3, length = 10, holeChance = 0, startingMixins = []) {
  const signer = await JoseSigner.fromRandomness()
  const chains = await Promise.all(Array.from(times(nchains), n => {
    return createChain({ source: 'test', meta: { n } }, signer)
  }))
  const store = new MemoryStore()
  chains.forEach(chain => store.save(chain))
  const latest = []
  const mixins = []
  for (let i = 0; i < length; i++) {
    for (let n = 0; n < nchains; n++) {
      const chain = chains[n]
      const prev = latest[n] || false
      const pulse = await createPulse(chain, prev, {
        payload: { chain: n, pulse: i },
        mixins: mixins.filter((p, i) => i !== n).concat(startingMixins.splice(0, 1))
      }, signer)
      store.save(pulse)
      latest[n] = pulse
      if (holeChance < Math.random()) {
        mixins[n] = pulse
      }
    }
  }
  return { store, latest }
}

describe('crawl()', () => {
  let graph
  beforeAll(async () => {
    graph = await zigzagGraph(3, 10)
  })

  test('should crawl along a chain', async () => {
    for await (const next of crawl(graph.latest[2], along())) {
      const { chain, pulse } = await next.load(graph.store)
      expect(chain).toBeDefined()
      expect(pulse).toBeDefined()
      expect(chain.value.content.meta.n).toBe(2)
    }
  })

  test('should crawl along a chain until a specific pulse', async () => {
    const third = await graph.store.resolveIndex(graph.latest[0].value.content.chain, 3)
    let lastVisited
    for await (const next of crawl(graph.latest[0], along(third))) {
      const { chain, pulse } = await next.load(graph.store)
      lastVisited = pulse
    }
    expect(lastVisited.value.content.index).toBe(3)
    expect(lastVisited.value.content.chain.toString()).toBe(graph.latest[0].value.content.chain.toString())
  })

  test('should crawl across a chain', async () => {
    const visited = new Set()
    for await (const next of crawl(graph.latest[1], across(), visited)) {
      const { chain, pulse } = await next.load(graph.store)
      expect(chain).toBeDefined()
      expect(pulse).toBeDefined()
    }
    expect(visited.size).toBe(3)
  })

  test('should not repeat pulses', async () => {
    const visited = new Set()
    for await (const next of crawl(graph.latest[1], spread())) {
      const { chain, pulse, path } = await next.load(graph.store)
      expect(chain).toBeDefined()
      expect(pulse).toBeDefined()
      if (visited.has(pulse.cid.toString())) {
        console.log('repeat', pulse.cid.toString(), path)
      }
      expect(visited.has(pulse.cid.toString())).toBe(false)
      visited.add(pulse.cid.toString())
    }
  })
})