[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / fromBytes

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

[packages/twine-core/src/conversion.ts:211](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/conversion.ts#L211)
