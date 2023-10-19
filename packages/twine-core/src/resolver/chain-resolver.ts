import type { Resolver } from './types'
import type { IntoCid } from '../types'
import type { Chain } from '../twine'

export class ChainResolver {
  private resolver: Resolver
  private chain: Chain

  static async create(resolver: Resolver, chainCid: IntoCid) {
    const { chain } = await resolver.resolve({ chain: chainCid })
    if (!chain) { throw new Error('Could not resolve chain') }
    return new ChainResolver(
      resolver,
      chain
    )
  }

  constructor(resolver: Resolver, chain: Chain) {
    this.resolver = resolver
    this.chain = chain
  }

  async pulse(ref: IntoCid | number) {
    const chain = this.chain
    const query = typeof ref === 'number' ?
      { index: ref, chain } :
      { pulse: ref, chain }
    const res = await this.resolver.resolve(query)
    return res.pulse
  }

  pulses(start?: IntoCid | number) {
    return this.resolver.pulses(this.chain, start)
  }

  async latest() {
    const chain = this.chain
    const res = await this.resolver.resolveLatest(chain)
    return res.pulse
  }
}