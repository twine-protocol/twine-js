[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / getContentDigest

# Function: getContentDigest()

> **getContentDigest**(`content`): `Promise`\<`MultihashDigest`\>

Get the hash digest of twine content

Used when verifying signatures

## Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | [`TwineContent`](../type-aliases/TwineContent.md) |

## Returns

`Promise`\<`MultihashDigest`\>

## Defined in

[packages/twine-core/src/verify.ts:18](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/verify.ts#L18)
