[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / ChainStorageMeta

# Type Alias: ChainStorageMeta

> **ChainStorageMeta**: `object`

Metadata used by the memory store to keep track of chains and pulses

## Type declaration

### chainCid

> **chainCid**: [`CID`](../classes/CID.md)

The CID of the chain

### indexMap

> **indexMap**: [`CacheMap`](../classes/CacheMap.md)\<`number`, [`Pulse`](Pulse.md)\>

A map of pulse index to pulse CID

### latestIndex

> **latestIndex**: `number`

The latest index of the chain

## Defined in

[packages/twine-core/src/store/memory-store.ts:16](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L16)
