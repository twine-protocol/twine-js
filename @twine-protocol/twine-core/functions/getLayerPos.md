[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / getLayerPos

# Function: getLayerPos()

> **getLayerPos**(`radix`, `index`): `number`

Get the highest layer for which this (pulse) index
is an anchor for.
For example: in base 10, for the following indicies...

## Parameters

• **radix**: `number`

• **index**: `number`

## Returns

`number`

## Example

```js
getLayerPos(10, 1560) == 1 // (multiple of 10)
getLayerPos(10, 1264) == 0 // (NOT a multiple of 10)
getLayerPos(10, 3000) == 3 // (multiple of 1000)
getLayerPos(10, 3700) == 2 // (multiple 100)
```

## Defined in

[packages/twine-core/src/links.ts:16](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/links.ts#L16)
