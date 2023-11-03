import type { Resolver } from './types'
import type { IntoCid, ChainValue } from '../types'
import { Twine, type Chain } from '../twine'

export class ChainResolver extends Twine<ChainValue> {
  private resolver: Resolver

  static async create(resolver: Resolver, chainCid: IntoCid) {
    const { chain } = await resolver.resolve({ chain: chainCid })
    if (!chain) { throw new Error('Could not resolve chain') }
    return new ChainResolver(
      resolver,
      chain
    )
  }

  constructor(resolver: Resolver, chain: Chain) {
    super(chain)
    this.resolver = resolver
  }

  async pulse(ref: IntoCid | number) {
    const chain = this
    if (typeof ref === 'number') {
      const res = await this.resolver.resolveIndex(chain, ref)
      return res.pulse
    }
    const res = await this.resolver.resolve({ pulse: ref, chain })
    return res.pulse
  }

  pulses(start?: IntoCid | number) {
    return this.resolver.pulses(this, start)
  }

  async latest() {
    const chain = this
    const res = await this.resolver.resolveLatest(chain)
    return res.pulse
  }
}