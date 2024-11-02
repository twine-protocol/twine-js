[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / asCid

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

[packages/twine-core/src/conversion.ts:96](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/conversion.ts#L96)
