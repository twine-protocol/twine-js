[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / fromBytes

# Function: fromBytes()

> **fromBytes**(`__namedParameters`): `Promise`\<[`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)\>

Converts a bytes array (ipld block) into a twine instance

The CID must be provided, as it is not encoded in the bytes.
It will be used to verify the bytes.

Throws an error if the data is invalid.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.bytes**: `Uint8Array`

• **\_\_namedParameters.cid**: [`CID`](../classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>

• **\_\_namedParameters.hasher?**: `MultihashHasher`\<`number`\> = `sha3512`

## Returns

`Promise`\<[`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)\>

## Defined in

[packages/twine-core/src/conversion.ts:211](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/conversion.ts#L211)
