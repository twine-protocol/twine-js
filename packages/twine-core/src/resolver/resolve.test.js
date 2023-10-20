import { describe, test, expect } from 'bun:test'
import { resolveHelper } from '.'
import { asQuery } from '../conversion'
import { TwineCache } from '..'
import * as mock from '../../mock-data.js'
import * as Block from 'multiformats/block'
import * as codec from '@ipld/dag-cbor'
import * as sha3512 from '@multiformats/sha3'

describe('Twine Resolution', () => {

  const cache = new TwineCache()

  const fns = {
    fetchPulse: ({ chainCID, pulseCID }) => {
      if (pulseCID.equals(mock.pulse.cid)) {
        return mock.pulse
      }
      return null
    }
    , fetchChain: ({ chainCID }) => {
      if (chainCID.equals(mock.chain.cid)) {
        return mock.chain
      }
      return null
    }
    , fetchLatest: (chainCID, options) => {
      if (chainCID.equals(mock.chain.cid)) {
        return mock.pulse
      }
      return null
    },
    cache
  }

  const fnsOnlyOrphan = {
    fetchPulse: ({ chainCID, pulseCID }) => mock.orphanPulse
    , fetchChain: ({ chainCID }) => false
  }

  const fnsWrongChain = {
    fetchPulse: ({ chainCID, pulseCID }) => mock.orphanPulse
    , fetchChain: ({ chainCID }) => mock.chain
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
      const chain = mock.chain.cid
      const pulse = mock.pulse.cid
      await mock.chain.verifySignature()
      const result = await resolveHelper(fns, {
        chain
        , pulse
      })
      expect(result).toEqual({
        chain: mock.chain
        , pulse: mock.pulse
      })
    })

    test('should accept string cids', async () => {
      const chain = mock.chain.cid.toString()
      const pulse = mock.pulse.cid.toString()
      const result = await resolveHelper(fns, {
        chain
        , pulse
      })
      expect(result).toEqual({
        chain: mock.chain
        , pulse: mock.pulse
      })
    })

    test('should accept twine instances', async () => {
      const chain = mock.chain
      const pulse = mock.pulse.cid.toString()
      const result = await resolveHelper(fns, {
        chain
        , pulse
      })
      expect(result).toEqual({
        chain: mock.chain
        , pulse: mock.pulse
      })
    })

    test('should accept twine pulse directly', async () => {
      const pulse = mock.pulse
      const result = await resolveHelper(fns, pulse)
      expect(result).toEqual({
        chain: mock.chain
        , pulse: mock.pulse
      })
    })

    test('should resolve only a chain', async () => {
      const chain = mock.chain.cid.toString()
      const result = await resolveHelper(fns, {
        chain
      })
      expect(result).toEqual({
        chain: mock.chain
      })
    })

    test('should return nulls for unfound queries', async () => {
      const chain = mock.chain.cid.toString()
      const pulse = mock.orphanPulse.cid
      expect(
        await resolveHelper(fns, {
          chain
          , pulse
        })
      ).toEqual({
        chain: mock.chain
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
      await expect(resolveHelper(fns, {})).to.be.rejected
    })

    test('should reject specifying both pulse and value', async () => {
      await expect(resolveHelper(fns, { pulse: 1, value: 1 })).to.be.rejected
    })

    test('should throw if chain does not match pulse', async () => {
      await expect(resolveHelper(fnsOnlyOrphan, {
        chain: mock.chain
        , pulse: mock.orphanPulse.cid
      })).to.be.rejected

      await expect(resolveHelper(fnsWrongChain, {
        pulse: mock.orphanPulse.cid
      })).to.be.rejected
    })

    test('should return empty if chain is unretrievable', async () => {
      expect(await resolveHelper(fnsOnlyOrphan, {
        pulse: mock.orphanPulse.cid
      })).toEqual({
        chain: null
        , pulse: null
      })
    })

    test('should throw if wrong data is fetched', async () => {
      await expect(resolveHelper(fnsOnlyOrphan, {
        pulse: mock.pulse.cid
      })).to.be.rejected
    })

    test('should allow for unsafe noVerify option', async () => {
      expect(await resolveHelper(fnsOnlyOrphan, {
        chain: mock.chain
        , pulse: mock.orphanPulse.cid
      }, { noVerify: true })).toEqual({
        chain: mock.chain
        , pulse: mock.orphanPulse
      })
    })

    test('should cache results', async () => {
      const result = await resolveHelper(fns, {
        chain: mock.chain.cid
        , pulse: mock.pulse.cid
      })
      expect(result).toEqual({
        chain: mock.chain
        , pulse: mock.pulse
      })
      expect(cache.get(mock.chain.cid.toString())).toEqual(mock.chain)
      expect(cache.get(mock.pulse.cid.toString())).toEqual(mock.pulse)
      const result2 = await resolveHelper({ cache }, {
        chain: mock.chain.cid
        , pulse: mock.pulse.cid
      })
      expect(result2).toEqual({
        chain: mock.chain
        , pulse: mock.pulse
      })
    })

    test('should disable cache with noCache option', async () => {
      const spy = fn => {
        const wrap = (...args) => {
          const result = fn(...args)
          wrap.callCount++
          return result
        }
        wrap.callCount = 0
        return wrap
      }
      const fns2 = {
        fetchPulse: spy(fns.fetchPulse),
        fetchChain: spy(fns.fetchChain),
        cache
      }
      const result = await resolveHelper(fns2, {
        chain: mock.chain.cid
        , pulse: mock.pulse.cid
      }, { noCache: true })
      expect(result).toEqual({
        chain: mock.chain
        , pulse: mock.pulse
      })
      expect(fns2.fetchChain.callCount).toEqual(1)
      expect(fns2.fetchPulse.callCount).toEqual(1)
    })
  })

  describe('asQuery()', () => {
    test('should accept pulses alone', () => {
      expect(asQuery(mock.pulse)).toEqual({
        chain: mock.chain.cid
        , pulse: mock.pulse.cid
      })
      expect(asQuery({ pulse: mock.pulse })).toEqual({
        chain: mock.chain.cid
        , pulse: mock.pulse.cid
      })
    })

    test('should accept chains alone', () => {
      expect(asQuery(mock.chain)).to.be.eql({
        chain: mock.chain.cid
        , pulse: null
      })
      expect(asQuery({ chain: mock.chain })).toEqual({
        chain: mock.chain.cid
        , pulse: null
      })
    })

    test('should accept pulses and chains wrapped in object', () => {
      expect(asQuery({
        pulse: mock.pulse
        , chain: mock.chain
      })).toEqual({
        chain: mock.chain.cid
        , pulse: mock.pulse.cid
      })
    })

    test('should accept pulse wrapped with value field', () => {
      expect(asQuery({ value: mock.pulse })).toEqual({
        chain: mock.chain.cid
        , pulse: mock.pulse.cid
      })
    })

    test('should accept on chain CIDs without pulse CIDs', () => {
      expect(asQuery({ chain: mock.chain.cid })).to.be.eql({
        chain: mock.chain.cid
        , pulse: null
      })
    })

    test('should accept chain and pulse CIDs together', () => {
      const query = { chain: mock.chain.cid, pulse: mock.pulse.cid }
      expect(asQuery(query)).toEqual(query)
    })

    test('should accept pulse with null chain', () => {
      expect(asQuery({ pulse: mock.pulse, chain: null })).toEqual({
        chain: mock.chain.cid
        , pulse: mock.pulse.cid
      })
    })

    test('should accept chain with null pulse/value', () => {
      const output = {
        chain: mock.chain.cid
        , pulse: null
      }
      expect(asQuery({ pulse: null, chain: mock.chain })).to.be.eql(output)
      expect(asQuery({ value: null, chain: mock.chain })).to.be.eql(output)
    })

    test('should return null on null input', () => {
      expect(asQuery(null)).to.be.null
    })

    test('should return null on undefined input', () => {
      expect(asQuery(undefined)).to.be.null
    })

    test('should return null on pulse CIDs without chain CIDs', () => {
      expect(asQuery({ pulse: mock.pulse.cid })).to.be.null
    })

    test('should return null on unlabeled CIDs', () => {
      expect(asQuery(mock.pulse.cid)).to.be.null
    })

    test('should return null on non-twine blocks', () => {
      const block = Block.encode({
        value: mock.pulse.value
        , codec: codec
        , hasher: sha3512
      })
      expect(block?.isTwine?.call()).to.not.be.ok // ie: to be falsy
      expect(asQuery(block)).to.be.null
      expect(asQuery({ pulse: block, chain: mock.chain })).to.be.null
      expect(asQuery({ pulse: block })).to.be.null
    })

    // test('should return null on with non-matching chain', () => {
    //   const signer = JoseSigner.fromRandomness()
    //   const altChain = createChain({ source: 'test' }, signer)
    //   expect(asQuery({ pulse: mock.pulse, chain: altChain })).to.be.null
    // })

    test('should reject malformed CIDs', () => {
      expect(() => asQuery({ pulse: mock.pulse.cid.slice(0, -10), chain: mock.chain.cid })).to.throw()
      expect(() => asQuery({ pulse: mock.pulse.cid, chain: mock.chain.cid.slice(0, -10) })).to.throw()
    })

    test('should return null on objects with null for chain and CID for pulse', () => {
      expect(asQuery({ pulse: mock.pulse.cid, chain: null })).to.be.null
    })

    test('should return null objects with pulse or value that is actually a chain', () => {
      expect(asQuery({ pulse: mock.chain })).to.be.null
      expect(asQuery({ value: mock.chain })).to.be.null
      expect(asQuery({ pulse: mock.chain, chain: mock.chain })).to.be.null
      expect(asQuery({ pulse: mock.chain, chain: mock.chain })).to.be.null
    })

    test('should return null objects with chain that is actually a pulse', () => {
      expect(asQuery({ pulse: mock.pulse, chain: mock.pulse })).to.be.null
      expect(asQuery({ pulse: mock.chain, chain: mock.pulse })).to.be.null
    })

    test('should return null on object with only undefined fields', () => {
      expect(asQuery({})).to.be.null
      expect(asQuery({ value: undefined })).to.be.null
      expect(asQuery({ pulse: undefined })).to.be.null
      expect(asQuery({ pulse: undefined, chain: undefined })).to.be.null
    })

    test('should return null on pulses passed with non-matching chains', () => {
      const chain = createChain({ source: 'test' }, JoseSigner.fromRandomness())
      expect(asQuery({ pulse: mock.pulse, chain: chain })).to.be.null
    })
  })

  // describe('combineResolvers', () => {
  //   test('should resolve latest pulses', async () => {
  //     const resolvers = combineResolvers([
  //       mockResolver
  //     ])

  //     const result = await resolvers.resolveLatest(mock.chain.cid)
  //     if (result.errors.length) {
  //       // eslint-disable-next-line no-console
  //       console.log(result.errors)
  //     }
  //     expect(result).toEqual({
  //       chain: mock.chain
  //       , pulse: mock.pulse
  //       , errors: []
  //     })
  //   })
  // })
})