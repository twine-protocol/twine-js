[**@twine-protocol/twine-car-utils v0.0.3**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-car-utils](../index.md) / toMemoryStore

# Function: toMemoryStore()

> **toMemoryStore**(`reader`): `Promise`\<`MemoryStore`\>

Convert a CARv2 reader to a MemoryStore

This will save all twines in the reader to a MemoryStore

## Parameters

| Parameter | Type |
| ------ | ------ |
| `reader` | `CarReader` |

## Returns

`Promise`\<`MemoryStore`\>

## Example

```js
import { CarReader } from '@ipld/car'
const reader = await CarReader.fromBytes(bytes)
const memstore = await toMemoryStore(reader)
// use memstore as a Resolver
```

## Defined in

[car-to-memory-store.ts:37](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-car-utils/src/car-to-memory-store.ts#L37)