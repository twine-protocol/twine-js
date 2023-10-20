import { describe, test, expect } from 'bun:test'
import { asQuery } from './conversion'
import * as mockData from '../mock-data.js'
import * as Block from 'multiformats/block'
import * as codec from '@ipld/dag-cbor'
import { sha3512 } from '@multiformats/sha3'

describe('asQuery()', () => {
  test('should accept pulses alone', () => {
    expect(asQuery(mockData.pulse)).toEqual({
      chain: mockData.chain.cid
      , pulse: mockData.pulse.cid
    })
    expect(asQuery({ pulse: mockData.pulse })).toEqual({
      chain: mockData.chain.cid
      , pulse: mockData.pulse.cid
    })
  })

  test('should accept chains alone', () => {
    expect(asQuery(mockData.chain)).toEqual({
      chain: mockData.chain.cid
    })
    expect(asQuery({ chain: mockData.chain })).toEqual({
      chain: mockData.chain.cid
    })
  })

  test('should accept pulses and chains wrapped in object', () => {
    expect(asQuery({
      pulse: mockData.pulse
      , chain: mockData.chain
    })).toEqual({
      chain: mockData.chain.cid
      , pulse: mockData.pulse.cid
    })
  })

  test('should accept pulse wrapped with value field', () => {
    expect(asQuery({ value: mockData.pulse })).toEqual({
      chain: mockData.chain.cid
      , pulse: mockData.pulse.cid
    })
  })

  test('should accept on chain CIDs without pulse CIDs', () => {
    expect(asQuery({ chain: mockData.chain.cid })).toEqual({
      chain: mockData.chain.cid
    })
  })

  test('should accept chain and pulse CIDs together', () => {
    const query = { chain: mockData.chain.cid, pulse: mockData.pulse.cid }
    expect(asQuery(query)).toEqual(query)
  })

  test('should accept pulse with null chain', () => {
    expect(asQuery({ pulse: mockData.pulse, chain: null })).toEqual({
      chain: mockData.chain.cid
      , pulse: mockData.pulse.cid
    })
  })

  test('should accept chain with null pulse/value', () => {
    const output = {
      chain: mockData.chain.cid
    }
    expect(asQuery({ pulse: null, chain: mockData.chain })).toEqual(output)
    expect(asQuery({ value: null, chain: mockData.chain })).toEqual(output)
  })

  test('should return null on null input', () => {
    expect(asQuery(null)).toBeNull()
  })

  test('should return null on undefined input', () => {
    expect(asQuery(undefined)).toBeNull()
  })

  test('should return null on pulse CIDs without chain CIDs', () => {
    expect(asQuery({ pulse: mockData.pulse.cid })).toBeNull()
  })

  test('should return null on unlabeled CIDs', () => {
    expect(asQuery(mockData.pulse.cid)).toBeNull()
  })

  test('should return null on non-twine blocks', async () => {
    const block = await Block.encode({
      value: mockData.pulse.value
      , codec: codec
      , hasher: sha3512
    })
    expect(asQuery(block)).toBeNull()
    expect(asQuery({ pulse: block, chain: mockData.chain })).toBeNull()
    expect(asQuery({ pulse: block })).toBeNull()
  })

  // test('should return null on with non-matching chain', () => {
  //   const signer = JoseSigner.fromRandomness()
  //   const altChain = createChain({ source: 'test' }, signer)
  //   expect(asQuery({ pulse: mockData.pulse, chain: altChain })).toBeNull()
  // })

  test('should reject malformed CIDs', () => {
    expect(() => asQuery({
      pulse: mockData.pulse.cid.slice(0, -10),
      chain: mockData.chain.cid
    })).toThrow()
    expect(() => asQuery({
      pulse: mockData.pulse.cid,
      chain: mockData.chain.cid.slice(0, -10)
    })).toThrow()
  })

  test('should return null on objects with null for chain and CID for pulse', () => {
    expect(asQuery({ pulse: mockData.pulse.cid, chain: null })).toBeNull()
  })

  test('should return null objects with pulse or value that is actually a chain', () => {
    expect(asQuery({ pulse: mockData.chain })).toBeNull()
    expect(asQuery({ value: mockData.chain })).toBeNull()
    expect(asQuery({ pulse: mockData.chain, chain: mockData.chain })).toBeNull()
    expect(asQuery({ pulse: mockData.chain, chain: mockData.chain })).toBeNull()
  })

  test('should return null objects with chain that is actually a pulse', () => {
    expect(asQuery({ pulse: mockData.pulse, chain: mockData.pulse })).toBeNull()
    expect(asQuery({ pulse: mockData.chain, chain: mockData.pulse })).toBeNull()
  })

  test('should return null on object with only undefined fields', () => {
    expect(asQuery({})).toBeNull()
    expect(asQuery({ value: undefined })).toBeNull()
    expect(asQuery({ pulse: undefined })).toBeNull()
    expect(asQuery({ pulse: undefined, chain: undefined })).toBeNull()
  })
})