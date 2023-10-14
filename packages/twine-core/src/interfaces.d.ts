import type { JWK } from 'jose'
import type { Signature } from './types'

export interface Signer {
  async getPublicJWK(): Promise<JWK>
  async sign(bytes: Uint8Array): Promise<Signature>
}
