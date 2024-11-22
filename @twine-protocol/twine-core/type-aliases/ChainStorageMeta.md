[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / ChainStorageMeta

# Type Alias: ChainStorageMeta

> **ChainStorageMeta**: `object`

Metadata used by the memory store to keep track of chains and pulses

## Type declaration

### chainCid

> **chainCid**: [`CID`](../classes/CID.md)

The CID of the chain

### latestIndex

> **latestIndex**: `number`

The latest index of the chain

### indexMap

> **indexMap**: [`CacheMap`](../classes/CacheMap.md)\<`number`, [`Pulse`](Pulse.md)\>

A map of pulse index to pulse CID

## Defined in

[packages/twine-core/src/store/memory-store.ts:17](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/store/memory-store.ts#L17)
