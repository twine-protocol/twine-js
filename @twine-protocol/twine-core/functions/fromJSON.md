[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / fromJSON

# Function: fromJSON()

> **fromJSON**(`json`): `Promise`\<[`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)\>

Convert a DAG-JSON encoded twine into a twine instance

This is one of the primary ways to read twine data.

Throws an error if the data is invalid.

## Parameters

• **json**: `string` \| `object`

## Returns

`Promise`\<[`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)\>

## Defined in

[packages/twine-core/src/conversion.ts:175](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/conversion.ts#L175)
