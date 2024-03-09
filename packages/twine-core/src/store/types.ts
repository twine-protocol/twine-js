import type { AnyIterable, Awaitable, IntoCid, TwineValue } from '../types'
import type { Chain, Twine } from '../twine'
import type { Resolver } from '../resolver/types'

/**
 * A store that can fetch and save twines
 *
 * @group Storage
 */
export interface Store extends Resolver {
  /**
   * Fetch a twine from storage, returning null if it is not found
   *
   * it is NOT expected that the twine signature is checked,
   * that is for the {@link Resolver} to do.
   */
  fetch(cid: IntoCid): Awaitable<Twine<TwineValue> | null>,
  /**
   * Save a twine to storage
   */
  save(twine: Twine<TwineValue>): Awaitable<void>,
  /**
   * Save many twines to storage
   */
  saveMany(twines: AnyIterable<Twine<TwineValue>>): Awaitable<void>,
  /**
   * Delete a twine from storage
   */
  delete(cid: IntoCid): Awaitable<void>,
}
