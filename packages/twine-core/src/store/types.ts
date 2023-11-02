import type { AnyIterable, Awaitable, IntoCid, TwineValue } from '../types'
import type { Chain, Twine } from '../twine'
import type { Resolver } from '../resolver/types'

export interface Store extends Resolver {
  fetch(cid: IntoCid): Awaitable<Twine<TwineValue> | null>,
  save(twine: Twine<TwineValue>): Awaitable<void>,
  saveMany(twines: AnyIterable<Twine<TwineValue>>): Awaitable<void>,
  delete(cid: IntoCid): Awaitable<void>,
}
