[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / asCid

# Function: asCid()

> **asCid**(`val`): `null` \| [`CID`](../classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>

Convert something into a CID

## Parameters

• **val**: `any`

The value to convert

## Returns

`null` \| [`CID`](../classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>

The CID or null if it could not be converted

## Example

```js
const cid = asCid('bafybeib3...')
const anotherCid = asCid(somePulse)
```

## Defined in

[packages/twine-core/src/conversion.ts:96](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/conversion.ts#L96)
