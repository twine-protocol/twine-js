import type { Signer } from '@twine-protocol/twine-core'
import type { KeyLike, GenerateKeyPairOptions } from 'jose'
import { generateKeyPair, exportJWK, CompactSign } from 'jose'

const hidden = { writable: false, enumerable: false, configurable: false }

export class JoseSigner implements Signer {
  privateKey: KeyLike
  publicKey: KeyLike
  algorithm: string

  // https://www.rfc-editor.org/rfc/rfc7518#section-3.1
  // https://github.com/panva/jose/blob/main/src/runtime/node/generate.ts#L42
  static async fromRandomness(alg = 'ES256', options: GenerateKeyPairOptions = {}) {
    const { publicKey, privateKey } = await generateKeyPair(alg, options)
    return new JoseSigner(privateKey, publicKey, alg)
  }

  constructor(privateKey: KeyLike, publicKey: KeyLike, alg: string) {
    this.privateKey = privateKey
    this.publicKey = publicKey
    this.algorithm = alg

    Object.defineProperties(this, {
      privateKey: hidden
    })
  }

  async getPublicJWK() {
    const jwk = await exportJWK(this.publicKey)
    jwk.alg = this.algorithm
    return jwk
  }

  async sign(bytes: Uint8Array) {
    return await new CompactSign(bytes)
      .setProtectedHeader({ alg: this.algorithm })
      .sign(this.privateKey)
  }
}