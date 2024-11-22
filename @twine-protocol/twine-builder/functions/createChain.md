[**@twine-protocol/twine-builder v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-builder](../index.md) / createChain

# Function: createChain()

> **createChain**\<`M`\>(`arg0`, `signer`, `hasher`): `Promise`\<`Chain`\<`M`\>\>

Create a new chain

Note: The only supported hash function is SHA3-512 at the moment

## Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `AnyMap` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `arg0` | [`UnsanitizedChainContent`](../interfaces/UnsanitizedChainContent.md)\<`object` \| `M`\> | `undefined` | The chain content |
| `signer` | `Signer` | `undefined` | The signer |
| `hasher` | `MultihashHasher`\<`number`\> | `sha3512` | The hasher |

## Returns

`Promise`\<`Chain`\<`M`\>\>

The chain as a Twine object

## Defined in

[factory.ts:85](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/factory.ts#L85)
