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
   * {@inheritDoc Resolver}
   */
  /**
   * Fetch a twine from storage, returning null if it is not found
   *
   * it is NOT expected that the twine signature is checked,
   * that is for the {@link Resolver} to do.
   *
   * @param cid The CID of the twine to fetch
   */
  fetch(cid: IntoCid): Awaitable<Twine<TwineValue> | null>,
  /**
   * Save a twine to storage
   *
   * @param twine The twine to save
   */
  save(twine: Twine<TwineValue>): Awaitable<void>,
  /**
   * Save many twines to storage
   *
   * @param twines The twines to save
   */
  saveMany(twines: AnyIterable<Twine<TwineValue>>): Awaitable<void>,
  /**
   * Delete a twine from storage
   *
   * @param cid The CID of the twine to delete
   */
  delete(cid: IntoCid): Awaitable<void>,
}
