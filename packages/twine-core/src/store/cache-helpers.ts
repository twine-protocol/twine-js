/**
 * Cache options
 * @category Cache
 */
export type CacheOptions = {
  /**
   * The maximum number of items to keep in the cache
   *
   * Defaults to 10000, set to 0 for no limit
   *
   * @default 10000
   */
  maxSize?: number
}

/**
 * A map that caches the most recently accessed items
 *
 * @category Cache
 */
export class CacheMap<K, V> extends Map<K, V> {
  private maxSize: number

  /**
   * Create a new cache map
   *
   * @param iterable - An iterable of key-value pairs
   * @param options - Options for the cache
   */
  constructor(iterable?: Iterable<[K, V]>, options?: CacheOptions) {
    super(iterable)
    this.maxSize = options?.maxSize ?? 10000
  }

  /**
   * Set the maximum number of items to keep in the cache
   *
   * If the cache is already larger than the new max size, the oldest items will be removed.
   */
  setMaxSize(maxSize: number) {
    this.maxSize = maxSize
    if (this.maxSize <= 0) { return }
    let diff = this.size - this.maxSize
    if (diff <= 0) { return }
    for (const key of this.keys()) {
      this.delete(key)
      diff -= 1
      if (diff <= 0) {
        return
      }
    }
  }

  /**
   * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set | Map.set}
   */
  set(key: K, value: V) {
    super.set(key, value)
    this.setMaxSize(this.maxSize)
    return this
  }

  /**
   * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get | Map.get}
   */
  get(key: K) {
    const value = super.get(key)
    if (value !== undefined) {
      this.delete(key)
      this.set(key, value)
    }
    return value
  }
}
