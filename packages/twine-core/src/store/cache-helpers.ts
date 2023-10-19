export type CacheOptions = {
  // default 10000, 0 for unlimited
  maxSize?: number
}

export class CacheMap<K, V> extends Map<K, V> {
  private maxSize: number

  constructor(iterable?: Iterable<[K, V]>, options?: CacheOptions) {
    super(iterable)
    this.maxSize = options?.maxSize ?? 10000
  }

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

  set(key: K, value: V) {
    super.set(key, value)
    this.setMaxSize(this.maxSize)
    return this
  }

  get(key: K) {
    const value = super.get(key)
    if (value !== undefined) {
      this.delete(key)
      this.set(key, value)
    }
    return value
  }
}
