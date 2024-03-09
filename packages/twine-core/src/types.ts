import type { JWK } from 'jose'
export type { JWK } from 'jose'
import type { CID } from 'multiformats/cid'
export type { CID } from 'multiformats/cid'

/**
 * Something that can be `await`ed
 */
export type Awaitable<T> = T | Promise<T>
/**
 * An async or sycn iterable
 */
export type AnyIterable<T> = Iterable<T> | AsyncIterable<T>

/**
 * The signature type
 */
export type Signature = string
/**
 * Mixins store the information about links between chains
 */
export type Mixin = {
  /** CID of the other chain */
  chain: CID,
  /** CID of the other chain's pulse */
  value: CID,
}

/** Generic map */
export type AnyMap = {
  [key: string]: any,
}

/**
 * Chain metadata
 */
export type ChainContent<M extends AnyMap = AnyMap> = {
  /** Public key in JWK format */
  key: JWK,
  /** Radix used for links list */
  links_radix: number,
  /** General Metadata */
  meta: M,
  /** List of mixins */
  mixins: Mixin[],
  /** Short identifier to denote the source producing this chain */
  source: string,
  /** Twine specification */
  specification: string,
}

/** Pulse index (block height) */
export type PulseIndex = number

/**
 * Pulse
 */
export type PulseContent<P extends AnyMap = AnyMap> = {
  /** Chain CID this pulse belongs to */
  chain: CID,
  /** Index of this pulse */
  index: PulseIndex,
  /** List of links on the same chain */
  links: CID[],
  /** List of mixins to other chains */
  mixins: Mixin[],
  /** User specified payload */
  payload: P,
  /** Short identifier to denote the source producing this pulse */
  source: string,
}

/** Chain or pulse content */
export type TwineContent = ChainContent | PulseContent;

/** Value field for chains */
export type ChainValue<M extends AnyMap = AnyMap> = {
  /** Chain content */
  content: ChainContent<M>;
  /** Chain signature */
  signature: Signature;
}

/** Value field for pulses */
export type PulseValue<P extends AnyMap = AnyMap> = {
  /** Pulse content */
  content: PulseContent<P>;
  /** Pulse signature */
  signature: Signature;
}

/** Value field for chain or pulse */
export type TwineValue<M extends AnyMap = AnyMap, P extends AnyMap = AnyMap> = ChainValue<M> | PulseValue<P>;

import type { Twine } from './twine'
/** Any type that can be coerced into a CID */
export type IntoCid = CID | string | Uint8Array | Twine<TwineValue>

/**
 * Any class implementing this interface can be used as a signer for Twine
 */
export interface Signer {
  /**
   * Get the public key in JWK format
   */
  getPublicJWK(): Promise<JWK>
  /**
   * Sign the given bytes
   * @param bytes - Bytes to sign
   */
  sign(bytes: Uint8Array): Promise<Signature>
}