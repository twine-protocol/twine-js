[**@twine-protocol/twine-car-utils v0.0.3**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-car-utils](../index.md) / twinesToCar

# Function: twinesToCar()

> **twinesToCar**(`twines`, `roots`): `AsyncIterable`\<`Uint8Array`\>

Convert an iterable of twines to a CARv2 formatted async iterable of byte arrays.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `twines` | `AnyIterable`\<`Twine`\<`TwineValue`\>\> | An iterable of twines |
| `roots` | `AnyIterable`\<[`CID`](../../twine-core/classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>\> | An iterable of CIDs to use as roots (typically the latest pulse of each chain, and the chain itself) |

## Returns

`AsyncIterable`\<`Uint8Array`\>

An async iterable of byte arrays

## Defined in

[index.ts:41](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-car-utils/src/index.ts#L41)
