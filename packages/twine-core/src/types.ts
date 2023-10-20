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

export type ChainContent = {
  key: JWK,
  links_radix: number,
  meta: {},
  mixins: Mixin[],
  source: string,
  specification: string,
}

export type Payload = {
  [key: string]: any,
}

export type PulseIndex = number

export type PulseContent = {
  chain: CID,
  index: PulseIndex,
  links: CID[],
  mixins: Mixin[],
  payload: Payload,
  source: string,
}

export type TwineContent = ChainContent | PulseContent;

export type ChainValue = {
  content: ChainContent;
  signature: Signature;
}

export type PulseValue = {
  content: PulseContent;
  signature: Signature;
}

export type TwineValue = ChainValue | PulseValue;

import type { Twine } from './twine'
export type IntoCid = CID | string | Uint8Array | Twine<TwineValue>

export interface Signer {
  getPublicJWK(): Promise<JWK>
  sign(bytes: Uint8Array): Promise<Signature>
}