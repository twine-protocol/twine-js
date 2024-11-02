[**@twine-protocol/twine-car-utils v0.0.3**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-car-utils](../README.md) / toMemoryStore

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

[car-to-memory-store.ts:37](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/car-to-memory-store.ts#L37)
