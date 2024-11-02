[**@twine-protocol/twine-builder v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-builder](../README.md) / createChain

# Function: createChain()

> **createChain**\<`M`\>(`arg0`, `signer`, `hasher`): `Promise`\<`Chain`\<`M`\>\>

Create a new chain

Note: The only supported hash function is SHA3-512 at the moment

## Type Parameters

• **M** *extends* `AnyMap`

## Parameters

• **arg0**: [`UnsanitizedChainContent`](../interfaces/UnsanitizedChainContent.md)\<`object` \| `M`\>

The chain content

• **signer**: `Signer`

The signer

• **hasher**: `MultihashHasher`\<`number`\> = `sha3512`

The hasher

## Returns

`Promise`\<`Chain`\<`M`\>\>

The chain as a Twine object

## Defined in

[factory.ts:84](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-builder/src/factory.ts#L84)
