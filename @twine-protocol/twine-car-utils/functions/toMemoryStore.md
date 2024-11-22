[**@twine-protocol/twine-car-utils v0.0.3**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-car-utils](../index.md) / toMemoryStore

# Function: toMemoryStore()

> **toMemoryStore**(`reader`): `Promise`\<`MemoryStore`\>

Convert a CARv2 reader to a MemoryStore

This will save all twines in the reader to a MemoryStore

## Parameters

• **reader**: `CarReader`

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

[car-to-memory-store.ts:37](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-car-utils/src/car-to-memory-store.ts#L37)
