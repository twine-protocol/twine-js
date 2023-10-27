import type { PulseIndex, IntoCid, CID, Mixin, AnyIterable } from '../types'
import type { Chain, Pulse } from '../twine'

export type ResolveChainQuery<T = CID | IntoCid> = {
  chain: T
}

export type ResolvePulseQuery<T = CID | IntoCid> = {
  chain?: T,
  pulse: T,
}

export type ResolveChainQueryStrict = {
  chain: CID,
}

export type ResolvePulseQueryStrict = {
  chain: CID,
  pulse: CID,
}

export type ResolveQueryStrict = ResolveChainQueryStrict | ResolvePulseQueryStrict

export type FulfilledChainResolution = {
  chain: Chain
}

export type FulfilledPulseResolution = {
  chain: Chain,
  pulse: Pulse,
}

export type UnfulfilledChainResolution = {
  chain: null,
}

export type UnfulfilledPulseResolution = {
  chain: null,
  pulse: null,
}

export type FulfilledResolution = FulfilledChainResolution | FulfilledPulseResolution
export type UnfulfilledResolution = UnfulfilledChainResolution | UnfulfilledPulseResolution
export type ChainResolution = FulfilledChainResolution | UnfulfilledChainResolution
export type PulseResolution = FulfilledPulseResolution | UnfulfilledPulseResolution
export type Resolution = FulfilledResolution | UnfulfilledResolution

export type IntoResolveChainQuery = FulfilledChainResolution | ResolveChainQuery | Chain
export type IntoResolvePulseQuery = FulfilledPulseResolution | ResolvePulseQuery | Pulse | Mixin

export type ResolveOptions = {
  noVerify?: boolean,
  noCache?: boolean,
}

export interface Resolver {
  resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>,
  resolveLatest(chain: IntoCid, options?: ResolveOptions): Promise<PulseResolution>,
  resolveIndex(chain: IntoCid, index: PulseIndex, options?: ResolveOptions): Promise<PulseResolution>,
  pulses(chain: IntoCid, start?: PulseIndex | IntoCid, options?: ResolveOptions): AsyncGenerator<Pulse> | Generator<Pulse> | AnyIterable<Pulse>,
}
