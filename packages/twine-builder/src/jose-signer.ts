import type { Signer } from '@twine-protocol/twine-core'
import type { KeyLike, GenerateKeyPairOptions } from 'jose'
import { generateKeyPair, exportJWK, CompactSign } from 'jose'

const hidden = { writable: false, enumerable: false, configurable: false }

/**
 * A signer that uses the jose library to sign twines
 *
 * @group Signer
 * @example
 * ```js
 * import { JoseSigner } from '@twine-protocol/twine-builder'
 * const signer = await JoseSigner.fromRandomness()
 * ```
 */
export class JoseSigner implements Signer {
  /** Private Key */
  privateKey: KeyLike
  /** Public Key */
  publicKey: KeyLike
  /** Algorithm */
  algorithm: string

  // https://www.rfc-editor.org/rfc/rfc7518#section-3.1
  // https://github.com/panva/jose/blob/main/src/runtime/node/generate.ts#L42
  /**
   * Create a new JoseSigner from a random key pair
   *
   * @param alg The algorithm to use
   * @param options Options for the key pair
   * @see {@link https://github.com/panva/jose/blob/main/src/runtime/node/generate.ts#L42}
   */
  static async fromRandomness(alg = 'ES256', options: GenerateKeyPairOptions = {}) {
    const { publicKey, privateKey } = await generateKeyPair(alg, options)
    return new JoseSigner(privateKey, publicKey, alg)
  }

  /**
   * Create a new JoseSigner from a JWK
   *
   * @param privateKey The private key
   * @param publicKey The public key
   * @param alg The algorithm to use
   */
  constructor(privateKey: KeyLike, publicKey: KeyLike, alg: string) {
    this.privateKey = privateKey
    this.publicKey = publicKey
    this.algorithm = alg

    Object.defineProperties(this, {
      privateKey: hidden
    })
  }

  // TODO: support exporting private key

  /**
   * Get the public JWK
   * @see {@link https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Signer.md#getpublicjwk | Signer.getPublicJWK}
   */
  async getPublicJWK() {
    const jwk = await exportJWK(this.publicKey)
    // jwk.alg = this.algorithm
    return jwk
  }

  /**
   * Sign some bytes
   * @see {@link https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Signer.md#sign | Signer.sign}
   */
  async sign(bytes: Uint8Array) {
    return await new CompactSign(bytes)
      .setProtectedHeader({ alg: this.algorithm })
      .sign(this.privateKey)
  }
}