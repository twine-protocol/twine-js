import { describe, test, expect, mock } from 'bun:test'
import { resolveHelper } from '.'
import { TwineCache } from '..'
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
      chain: mockData.chain
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


// describe('combineResolvers', () => {
//   test('should resolve latest pulses', async () => {
//     const resolvers = combineResolvers([
//       mockResolver
//     ])

//     const result = await resolvers.resolveLatest(mockData.chain.cid)
//     if (result.errors.length) {
//       // eslint-disable-next-line no-console
//       console.log(result.errors)
//     }
//     expect(result).toEqual({
//       chain: mockData.chain
//       , pulse: mockData.pulse
//       , errors: []
//     })
//   })
// })