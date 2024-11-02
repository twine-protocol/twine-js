[**@twine-protocol/twine-car-utils v0.0.3**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-car-utils](../README.md) / twinesToCar

# Function: twinesToCar()

> **twinesToCar**(`twines`, `roots`): `AsyncIterable`\<`Uint8Array`\>

Convert an iterable of twines to a CARv2 formatted async iterable of byte arrays.

## Parameters

• **twines**: `AnyIterable`\<`Twine`\<`TwineValue`\>\>

An iterable of twines

• **roots**: `AnyIterable`\<[`CID`](../../twine-core/classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>\> = `...`

An iterable of CIDs to use as roots (typically the latest pulse of each chain, and the chain itself)

## Returns

`AsyncIterable`\<`Uint8Array`\>

An async iterable of byte arrays

## Defined in

[index.ts:36](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/index.ts#L36)
