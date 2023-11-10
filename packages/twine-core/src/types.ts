import type { JWK } from 'jose'
export type { JWK } from 'jose'
import type { CID } from 'multiformats/cid'
export type { CID } from 'multiformats/cid'

export type Awaitable<T> = T | Promise<T>
export type AnyIterable<T> = Iterable<T> | AsyncIterable<T>

export type Signature = string
export type Mixin = {
  chain: CID,
  value: CID,
}

export type AnyMap = {
  [key: string]: any,
}

export type ChainContent<M extends AnyMap = AnyMap> = {
  key: JWK,
  links_radix: number,
  meta: M,
  mixins: Mixin[],
  source: string,
  specification: string,
}

export type PulseIndex = number

export type PulseContent<P extends AnyMap = AnyMap> = {
  chain: CID,
  index: PulseIndex,
  links: CID[],
  mixins: Mixin[],
  payload: P,
  source: string,
}

export type TwineContent = ChainContent | PulseContent;

export type ChainValue<M extends AnyMap = AnyMap> = {
  content: ChainContent<M>;
  signature: Signature;
}

export type PulseValue<P extends AnyMap = AnyMap> = {
  content: PulseContent<P>;
  signature: Signature;
}

export type TwineValue<M extends AnyMap = AnyMap, P extends AnyMap = AnyMap> = ChainValue<M> | PulseValue<P>;

import type { Twine } from './twine'
export type IntoCid = CID | string | Uint8Array | Twine<TwineValue>

export interface Signer {
  getPublicJWK(): Promise<JWK>
  sign(bytes: Uint8Array): Promise<Signature>
}