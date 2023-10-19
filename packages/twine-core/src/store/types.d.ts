import type { AnyIterable, Awaitable, IntoCid, TwineValue } from '../types'
import type { Chain, Twine } from '../twine'
import type { Resolver } from '../resolver/types'

export interface Store extends Resolver {
  fetch(cid: IntoCid): Awaitable<Twine<TwineValue> | null>,
  has(cid: IntoCid): Awaitable<boolean>,
  save(twine: Twine<TwineValue>): Awaitable<void>,
  saveMany(twines: AnyIterable<Twine<TwineValue>>): Awaitable<void>,
  chains(): AsyncGenerator<Chain> | Generator<Chain> | AnyIterable<Chain>,
  delete(cid: IntoCid): Awaitable<void>,
}
