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

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.bytes` | `Uint8Array` |
| `__namedParameters.cid` | [`CID`](../classes/CID.md)\<`unknown`, `number`, `number`, `Version`\> |
| `__namedParameters.hasher`? | `MultihashHasher`\<`number`\> |

## Returns

`Promise`\<[`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)\>

## Defined in

[packages/twine-core/src/conversion.ts:211](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/conversion.ts#L211)
