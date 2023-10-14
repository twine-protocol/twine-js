import type { JWK } from 'jose'
export type { JWK } from 'jose'
import type { CID } from 'multiformats/cid'
export type { CID } from 'multiformats/cid'

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

export type PulseContent = {
  chain: CID,
  index: number,
  links: CID[],
  mixins: Mixin[],
  payload: Payload,
  source: string,
}

export type TwineContent = ChainContent | PulseContent;

export type TwineValue<T extends TwineContent> = {
  content: T;
  signature: Signature;
}

export type ChainValue = TwineValue<ChainContent>
export type PulseValue = TwineValue<PulseContent>

import type { Twine } from './twine'
export type IntoCid = CID | string | Uint8Array | Twine