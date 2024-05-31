import { describe, test, expect, beforeEach } from 'bun:test'
import { JoseSigner } from './jose-signer'
import { createChain, createPulse } from './factory'
import { Twine, getContentDigest, InvalidSignature } from '@twine-protocol/twine-core'
import * as Block from 'multiformats/block'
import { sha3512 } from '@multiformats/sha3'
import * as codec from '@ipld/dag-cbor'

export const createTwineFromValue = async (value) => {
  return new Twine(await Block.encode({ value, codec, hasher: sha3512 }))
}

describe('Signing',  async () => {
  let signer = await JoseSigner.fromRandomness()
  describe('JoseSigner', async () => {
    const testSignature = async (alg, options = {}) => {
      signer = await JoseSigner.fromRandomness(alg, options)
      const chain = await createChain(
        { source: 'foo' },
        signer
      )
      const pulse = await createPulse(
        chain,
        false,
        { mixins: [], payload: { value: 'bar' } },
        signer
      )
      expect(chain).toHaveProperty('isChain', true)
      expect(pulse).toHaveProperty('isChain', false)
      expect(await chain.verifySignature()).toBeTrue()
      expect(await pulse.verifySignature(chain)).toBeTrue()
    }

    test('should be able to use Ed25519', () => {
      return testSignature('EdDSA', { crv: 'Ed25519' })
    })

    // test('should be able to use same algorithm with different curve', () => {
    //   return testSignature('EdDSA', { crv: 'Ed448' })
    // })

    test('should be able to use RSA PKCS1.5 2048 (RS256)', () => {
      return testSignature('RS256')
    })

    test('should be able to use RSASSA-PSS (PS256)', () => {
      return testSignature('PS256')
    })

    test('should be able to use use ECDSA NIST P-256 elliptic curve (ES256)', () => {
      return testSignature('ES256')
    })

    test('should be able to use use ECDSA NIST P-384 elliptic curve (ES384)', () => {
      return testSignature('ES384')
    })
  })
})
