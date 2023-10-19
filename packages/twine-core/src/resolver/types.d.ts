import type { PulseIndex, IntoCid, CID, Mixin } from '../types'
import type { Chain, Pulse } from '../twine'


export type ResolveChainQuery<T = CID | IntoCid> = {
  chain: T
}

export type ResolvePulseQuery<T = CID | IntoCid> = {
  chain?: T,
  pulse: T,
}

export type ResolveMixinQuery<T = CID | IntoCid> = {
  chain: T,
  value: T,
}

export type ResolveQuery =
  ResolveChainQuery<IntoCid> |
  ResolvePulseQuery<IntoCid> |
  ResolveMixinQuery<IntoCid>

export type ResolveQueryStrict =
  ResolveChainQuery<CID> |
  ResolvePulseQuery<CID> |
  ResolveMixinQuery<CID>

export type IntoResolveQuery = ResolveQuery | Chain | Pulse | Mixin

export type FulfilledResolution = {
  chain: Chain,
  pulse?: Pulse,
}

export type UnfulfilledResolution = {
  chain: null,
  pulse?: null,
}

export type Resolution = FulfilledResolution | UnfulfilledResolution

export type ResolveOptions = {
  noVerify?: boolean,
  noCache?: boolean,
}

export interface Resolver {
  resolve(query: ResolveQuery, options?: ResolveOptions): Promise<Resolution>,
  resolveLatest(chain: Chain, options?: ResolveOptions): Promise<Resolution>,
  pulses(chain: Chain, start?: PulseIndex | IntoCid, options?: ResolveOptions): AsyncGenerator<Pulse>,
}
