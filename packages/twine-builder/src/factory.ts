import { encode as blockEncode } from 'multiformats/block'
import * as codec from '@ipld/dag-cbor'
import { sha3512 } from '@multiformats/sha3'
import type { MultihashHasher } from 'multiformats'
import * as jose from 'jose'
import { UnsanitizedChainContent, sanitizeChainContent, sanitizePulseContent } from './sanitize'
import type { Chain, Pulse, Signer, TwineContent, TwineValue, AnyMap } from '@twine-protocol/twine-core'
import { Twine, getContentDigest, getLayerPos, isTwine, IntoMixin } from '@twine-protocol/twine-core'
import { JoseSigner } from '.'

export type { UnsanitizedChainContent}

const DEFAULT_SPECIFICATION = 'twine/1.0.x'
const specificationRegex = /^twine\/(0|[1-9]\d*)\.(0|[1-9]\d*)\.x($|(\/[\w-_\d]+\/(0|[1-9]\d*)\.(0|[1-9]\d*)\.x)?$)/

/**
 * Next pulses skip links
 *
 * If the chain has a links radix of 0, the next pulse will have a single link to the previous pulse.
 *
 * @internal
 * @param chain The chain
 * @param previous The previous pulse, or false for first pulse
 */
export const getNextLinks = (chain: Chain, previous: Pulse | false) => {
  if (previous === false) {
    return []
  }
  const radix = chain.value.content.links_radix
  const links = previous.value.content.links.slice(0)
  const pindex = previous.value.content.index

  if (radix === 1) {
    throw new Error('Chains with radix 1 not supported')
  }

  if (pindex === 0) {
    return [previous.cid]
  }

  const expectedLen = radix === 0 ?
    1 :
    Math.max(1, Math.ceil(Math.log2(pindex) / Math.log2(radix)))
  if (links.length !== expectedLen) {
    throw new Error(`Previous links array has incorrect size. Expected: ${expectedLen}, got: ${links.length}`)
  }

  if (radix === 0) {
    return [previous.cid]
  }

  const z = getLayerPos(radix, pindex) + 1
  if (z > links.length) {
    links.length = z
  }

  return links.fill(previous.cid, 0, z)
}

const createTwine = async (content: TwineContent, signer: Signer, hasher: MultihashHasher = sha3512) => {
  const digest = await getContentDigest(content)
  const signature = await signer.sign(digest.bytes)
  const value = {
    content
    , signature
  } as TwineValue
  const { cid, bytes } = await blockEncode({
    value
    , hasher
    , codec
  })
  return new Twine({ cid, bytes, value })
}

/**
 * Create a new chain
 *
 * Note: The only supported hash function is SHA3-512 at the moment
 *
 * @param arg0 The chain content
 * @param signer The signer
 * @param hasher The hasher
 * @returns The chain as a Twine object
 */
export const createChain = async <M extends AnyMap>(
  {
    source
    , specification = DEFAULT_SPECIFICATION
    , links_radix = 32
    , mixins = []
    , meta = {}
  } : UnsanitizedChainContent<M | {}>,
  signer: Signer,
  hasher: MultihashHasher = sha3512
): Promise<Chain<M>> => {
  if (!specificationRegex.test(specification)) {
    throw new Error('Invalid specification string')
  }
  const content = sanitizeChainContent({
    source
    , key: await signer.getPublicJWK() // public key
    , links_radix
    , mixins
    , specification
    , meta
  })
  const twine = await createTwine(content, signer, hasher)
  return twine as Chain<M>
}

/**
 * Create a new pulse
 *
 * Note: The only supported hash function is SHA3-512 at the moment
 *
 * @param chain The chain
 * @param previous The previous pulse, or false for first pulse
 * @param arg2 The mixins and payload
 * @param arg2.mixins The mixins
 * @param arg2.payload The payload
 * @param signer The signer
 * @param hasher The hasher
 * @returns The pulse as a Twine object
 */
export const createPulse = async <P extends AnyMap>(
  chain: Chain,
  previous: Pulse | false,
  { mixins = [], payload = {} }: {
    mixins?: IntoMixin[]
    , payload?: P | {}
  },
  signer: Signer,
  hasher: MultihashHasher = sha3512
): Promise<Pulse<P>> => {
  if (!isTwine(chain)) {
    throw new Error('Provided chain must be a Twine object instance')
  }
  if (previous !== false && !isTwine(previous)) {
    throw new Error('Provided previous value must be a Twine object instance or false')
  }
  if (previous && !chain.cid.equals(previous.get('/content/chain').value)) {
    throw new Error('Provided previous value not a member of this chain')
  }
  const thumprintsEqual = (
    await jose.calculateJwkThumbprint(await signer.getPublicJWK()) ===
    await jose.calculateJwkThumbprint(chain.value.content.key)
  )

  if (!thumprintsEqual) {
    throw new Error('Chain key does not match private key supplied')
  }

  const prevIndex = previous ? previous.get('/content/index').value : -2
  if (typeof prevIndex !== 'number') {
    throw new Error(`Previous pulse index is not numeric type (type ${typeof prevIndex})`)
  }
  const index = previous ? prevIndex + 1 : 0
  const links = previous ? getNextLinks(chain, previous) : []
  const source = chain.get('/content/source').value
  if (typeof source !== 'string') {
    throw new Error('Previous pulse source is not a string type')
  }
  const content = sanitizePulseContent({
    chain: chain.cid
    , source
    , index
    , links
    , mixins
    , payload
  }, previous)

  const twine = await createTwine(content, signer, hasher)
  return twine as Pulse<P>
}