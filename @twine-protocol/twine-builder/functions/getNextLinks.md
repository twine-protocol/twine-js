[**@twine-protocol/twine-builder v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-builder](../README.md) / getNextLinks

# Function: getNextLinks()

> **getNextLinks**(`chain`, `previous`): [`CID`](../../twine-core/classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>[]

Next pulses skip links

If the chain has a links radix of 0, the next pulse will have a single link to the previous pulse.

## Parameters

• **chain**: `Chain`

The chain

• **previous**: `false` \| `Pulse`

The previous pulse, or false for first pulse

## Returns

[`CID`](../../twine-core/classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>[]

## Defined in

[factory.ts:24](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-builder/src/factory.ts#L24)
