import type { Resolver } from './types'
import type { IntoCid, ChainValue } from '../types'
import { Twine, type Chain } from '../twine'

/**
 * A helper to restrict the resolution to a specific chain
 *
 * @category Resolving
 */
export class ChainResolver extends Twine<ChainValue> {
  private resolver: Resolver

  /**
   * Create a new ChainResolver
   *
   * @param resolver - The resolver to use
   * @param chainCid - The chain or chain CID to use
   * @returns A ChainResolver
   */
  static async create(resolver: Resolver, chainCid: IntoCid) {
    const { chain } = await resolver.resolve({ chain: chainCid })
    if (!chain) { throw new Error('Could not resolve chain') }
    return new ChainResolver(
      resolver,
      chain
    )
  }

  /**
   * Create a new ChainResolver
   *
   * @param resolver - The resolver to use
   * @param chain - The chain to use
   * @returns A ChainResolver
   */
  constructor(resolver: Resolver, chain: Chain) {
    super(chain)
    this.resolver = resolver
  }

  /**
   * Resolve a pulse in the chain
   *
   * @param ref - The pulse or pulse CID to resolve
   * @returns The resolved pulse
   */
  async pulse(ref: IntoCid | number) {
    const chain = this
    if (typeof ref === 'number') {
      const res = await this.resolver.resolveIndex(chain, ref)
      return res.pulse
    }
    const res = await this.resolver.resolve({ pulse: ref, chain })
    return res.pulse
  }

  /**
   * Async iterator for the pulses in the chain
   *
   * @param start - The index or CID of the pulse to start from
   */
  pulses(start?: IntoCid | number) {
    return this.resolver.pulses(this, start)
  }

  /**
   * Latest pulse in the chain
   */
  async latest() {
    const chain = this
    const res = await this.resolver.resolveLatest(chain)
    return res.pulse
  }
}