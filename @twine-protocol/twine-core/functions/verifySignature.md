[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / verifySignature

# Function: verifySignature()

> **verifySignature**(`chain`, `twine`): `Promise`\<`boolean`\>

Verify the signature of a chain or pulse

## Parameters

| Parameter | Type |
| ------ | ------ |
| `chain` | [`Chain`](../type-aliases/Chain.md) |
| `twine` | [`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md) |

## Returns

`Promise`\<`boolean`\>

## Throws

If the chain or pulse is invalid

## Throws

If the signature is invalid

## Throws

If inputs don't make sense (likely programmer error)

## Defined in

[packages/twine-core/src/verify.ts:31](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/verify.ts#L31)
