import { describe, test, expect, mock } from 'bun:test'
import { resolveHelper, combineResolvers } from '.'
import { MemoryStore, TwineCache } from '..'
import * as mockData from '../../mock-data.js'

const cache = new TwineCache()

const fns = {
  fetchPulse: ({ chainCID, pulseCID }) => {
    if (pulseCID.equals(mockData.pulse.cid)) {
      return mockData.pulse
    }
    return null
  }
  , fetchChain: ({ chainCID }) => {
    if (chainCID.equals(mockData.chain.cid)) {
      return mockData.chain
    }
    return null
  }
  , fetchLatest: (chainCID, options) => {
    if (chainCID.equals(mockData.chain.cid)) {
      return mockData.pulse
    }
    return null
  },
  cache
}

const fnsOnlyOrphan = {
  fetchPulse: ({ chainCID, pulseCID }) => mockData.orphanPulse
  , fetchChain: ({ chainCID }) => false
}

const fnsWrongChain = {
  fetchPulse: ({ chainCID, pulseCID }) => mockData.orphanPulse
  , fetchChain: ({ chainCID }) => mockData.chain
}

const mockResolver = {
  async resolve(query, options) {
    return await resolveHelper(fns, query, options)
  },
  async resolveLatest(chainCID, options) {
    const pulse = fns.fetchLatest(chainCID)
    return this.resolve({ chain: chainCID, pulse }, options)
  },
  async *chains() {
    yield mockData.chain
  },
  async has(cid) {
    return cid.equals(mockData.chain.cid) || cid.equals(mockData.pulse.cid)
  }
}

describe('resolveHelper()', () => {
  test('should accept cids', async () => {
    const chain = mockData.chain.cid
    const pulse = mockData.pulse.cid
    await mockData.chain.verifySignature()
    const result = await resolveHelper(fns, {
      chain
      , pulse
    })
    expect(result).toEqual({
      chain: mockData.chain
      , pulse: mockData.pulse
    })
  })

  test('should accept string cids', async () => {
    const chain = mockData.chain.cid.toString()
    const pulse = mockData.pulse.cid.toString()
    const result = await resolveHelper(fns, {
      chain
      , pulse
    })
    expect(result).toEqual({
      chain: mockData.chain
      , pulse: mockData.pulse
    })
  })

  test('should accept twine instances', async () => {
    const chain = mockData.chain
    const pulse = mockData.pulse.cid.toString()
    const result = await resolveHelper(fns, {
      chain
      , pulse
    })
    expect(result).toEqual({
      chain: mockData.chain
      , pulse: mockData.pulse
    })
  })

  test('should accept twine pulse directly', async () => {
    const pulse = mockData.pulse
    const result = await resolveHelper(fns, pulse)
    expect(result).toEqual({
      chain: mockData.chain
      , pulse: mockData.pulse
    })
  })

  test('should resolve only a chain', async () => {
    const chain = mockData.chain.cid.toString()
    const result = await resolveHelper(fns, {
      chain
    })
    expect(result).toEqual({
      chain: mockData.chain
    })
  })

  test('should return nulls for unfound queries', async () => {
    const chain = mockData.chain.cid.toString()
    const pulse = mockData.orphanPulse.cid
    expect(
      await resolveHelper(fns, {
        chain
        , pulse
      })
    ).toEqual({
      chain: null
      , pulse: null
    })

    expect(
      await resolveHelper(fns, {
        // eslint-disable-next-line max-len
        chain: 'bafyriqgo2tqjhcudv2au65jis2vtvcynhdtneql5uwuwgawtq5qcimvyhebziiumyzp7yg55sztkpczdkviizh45afrnnswwl4vxd4emfpomu'
        , pulse
      })
    ).toEqual({
      chain: null
      , pulse: null
    })

    expect(
      await resolveHelper(fns, {
        // eslint-disable-next-line max-len
        chain: 'bafyriqgo2tqjhcudv2au65jis2vtvcynhdtneql5uwuwgawtq5qcimvyhebziiumyzp7yg55sztkpczdkviizh45afrnnswwl4vxd4emfpomu'
      })
    ).toEqual({
      chain: null
    })
  })

  test('should reject an empty query', async () => {
    expect(resolveHelper(fns, {})).rejects.toBeDefined()
  })

  test('should reject specifying both pulse and value', async () => {
    expect(resolveHelper(fns, { pulse: 1, value: 1 })).rejects.toBeDefined()
  })

  test('should throw if chain does not match pulse', async () => {
    expect(resolveHelper(fnsOnlyOrphan, {
      chain: mockData.chain
      , pulse: mockData.orphanPulse.cid
    })).rejects.toBeDefined()

    expect(resolveHelper(fnsWrongChain, {
      pulse: mockData.orphanPulse.cid
    })).rejects.toBeDefined()
  })

  test('should return empty if chain is unretrievable', async () => {
    expect(await resolveHelper(fnsOnlyOrphan, {
      pulse: mockData.orphanPulse.cid
    })).toEqual({
      chain: null
      , pulse: null
    })
  })

  test('should throw if wrong data is fetched', async () => {
    expect(resolveHelper(fnsOnlyOrphan, {
      pulse: mockData.pulse.cid
    })).rejects.toBeDefined()
  })

  test('should allow for unsafe noVerify option', async () => {
    expect(await resolveHelper(fnsOnlyOrphan, {
      chain: mockData.chain
      , pulse: mockData.orphanPulse.cid
    }, { noVerify: true })).toEqual({
      chain: mockData.chain
      , pulse: mockData.orphanPulse
    })
  })

  test('should cache results', async () => {
    const result = await resolveHelper(fns, {
      chain: mockData.chain.cid
      , pulse: mockData.pulse.cid
    })
    expect(result).toEqual({
      chain: mockData.chain
      , pulse: mockData.pulse
    })
    expect(cache.fetch(mockData.chain.cid.toString())).toEqual(mockData.chain)
    expect(cache.fetch(mockData.pulse.cid.toString())).toEqual(mockData.pulse)
    const result2 = await resolveHelper({ cache }, {
      chain: mockData.chain.cid
      , pulse: mockData.pulse.cid
    })
    expect(result2).toEqual({
      chain: mockData.chain
      , pulse: mockData.pulse
    })
  })

  test('should disable cache with noCache option', async () => {
    const fns2 = {
      fetchPulse: mock(fns.fetchPulse),
      fetchChain: mock(fns.fetchChain),
      cache
    }
    const result = await resolveHelper(fns2, {
      chain: mockData.chain.cid
      , pulse: mockData.pulse.cid
    }, { noCache: true })
    expect(result).toEqual({
      chain: mockData.chain
      , pulse: mockData.pulse
    })
    expect(fns2.fetchChain).toHaveBeenCalledTimes(1)
    expect(fns2.fetchPulse).toHaveBeenCalledTimes(1)
  })
})


describe('combineResolvers()', () => {
  const store = new MemoryStore()
  store.save(mockData.chain2)
  store.save(mockData.chain2pulse2)
  const resolvers = combineResolvers([
    mockResolver,
    store
  ])

  test('should resolve latest pulses', async () => {
    const result = await resolvers.resolveLatest(mockData.chain.cid)
    expect(result).toEqual({
      chain: mockData.chain
      , pulse: mockData.pulse
      , errors: undefined
    })
  })

  test('should resolve pulses in one of the stores', async () => {
    const result = await resolvers.resolve({
      chain: mockData.chain2.cid
      , pulse: mockData.chain2pulse2.cid
    })
    expect(result).toEqual({
      chain: mockData.chain2
      , pulse: mockData.chain2pulse2
      , errors: undefined
    })
  })

  test('should resolve to nulls correctly', async () => {
    const result = await resolvers.resolve({
      chain: mockData.chain2.cid
      , pulse: mockData.chain2pulse3.cid
    })
    expect(result).toEqual({
      chain: null
      , pulse: null
      , errors: undefined
    })
  })

  test('should produce all chains', async () => {
    const chains = []
    for await (const chain of resolvers.chains()) {
      chains.push(chain.cid.toString())
    }
    expect(chains).toContain(mockData.chain.cid.toString())
    expect(chains).toContain(mockData.chain2.cid.toString())
  })

  test('should has() all pulses', async () => {
    expect(await resolvers.has(mockData.chain.cid)).toBe(true)
    expect(await resolvers.has(mockData.pulse.cid)).toBe(true)
    expect(await resolvers.has(mockData.chain2.cid)).toBe(true)
    expect(await resolvers.has(mockData.chain2pulse2.cid)).toBe(true)
    expect(await resolvers.has(mockData.chain2pulse3.cid)).toBe(false)
  })
})