import type { TwineContent } from './types'
import type { Chain, Pulse } from './twine'
import { bytes } from 'multiformats'
import * as codec from '@ipld/dag-cbor'
import { sha3512 } from '@multiformats/sha3'
import * as jose from 'jose'
import { InvalidSignature, InvalidTwineData } from './errors'
import { MultihashDigest } from 'multiformats/hashes/digest'
import { isChain, isTwine } from './checks'

/**
 * Get the hash digest of twine content
 *
 * Used when verifying signatures
 *
 * @group Internal
 */
export async function getContentDigest(content: TwineContent): Promise<MultihashDigest> {
  const bytes = codec.encode(content)
  return sha3512.digest(bytes)
}

/**
 * Verify the signature of a chain or pulse
 *
 * @group Internal
 * @throws {InvalidTwineData} If the chain or pulse is invalid
 * @throws {InvalidSignature} If the signature is invalid
 * @throws {Error} If inputs don't make sense (likely programmer error)
 */
export async function verifySignature(chain: Chain, twine: Chain | Pulse) {
  if (!isChain(chain)) {
    throw new InvalidTwineData('Invalid chain instance specified')
  }
  if (!isTwine(twine)) {
    throw new InvalidTwineData('Invalid twine instance specified')
  }

  if (twine.isChain && twine !== chain) {
    throw new Error('Can not validate chain other than self')
  } else if (twine.isPulse && !chain.cid.equals(twine.chainCid)) {
    throw new Error('Provided pulse value not a member of specified chain')
  }

  let key
  try {
    key = await jose.importJWK(chain.value.content.key)
  } catch (e: any) {
    throw new InvalidTwineData('Invalid chain key', { cause: e })
  }
  const signature = twine.value.signature.toString()
  try {
    const { payload } = await jose.compactVerify(signature, key)
    const digest = await twine.getContentDigest()
    if (!bytes.equals(payload, digest.bytes)) {
      throw new InvalidSignature('Payload bytes do not match')
    }
  } catch (cause: any) {
    throw new InvalidSignature('', { cause })
  }

  return true
}
