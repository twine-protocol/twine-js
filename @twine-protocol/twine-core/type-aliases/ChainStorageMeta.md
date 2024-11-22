[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / ChainStorageMeta

# Type Alias: ChainStorageMeta

> **ChainStorageMeta**: `object`

Metadata used by the memory store to keep track of chains and pulses

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `chainCid` | [`CID`](../classes/CID.md) | The CID of the chain | [packages/twine-core/src/store/memory-store.ts:19](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L19) |
| `latestIndex` | `number` | The latest index of the chain | [packages/twine-core/src/store/memory-store.ts:21](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L21) |
| `indexMap` | [`CacheMap`](../classes/CacheMap.md)\<`number`, [`Pulse`](Pulse.md)\> | A map of pulse index to pulse CID | [packages/twine-core/src/store/memory-store.ts:23](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L23) |

## Defined in

[packages/twine-core/src/store/memory-store.ts:17](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L17)
