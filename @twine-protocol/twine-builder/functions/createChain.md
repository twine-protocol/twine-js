[**@twine-protocol/twine-builder v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-builder](../index.md) / createChain

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

[factory.ts:85](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-builder/src/factory.ts#L85)
