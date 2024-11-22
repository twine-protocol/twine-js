[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / verifySignature

# Function: verifySignature()

> **verifySignature**(`chain`, `twine`): `Promise`\<`boolean`\>

Verify the signature of a chain or pulse

## Parameters

• **chain**: [`Chain`](../type-aliases/Chain.md)

• **twine**: [`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)

## Returns

`Promise`\<`boolean`\>

## Throws

If the chain or pulse is invalid

## Throws

If the signature is invalid

## Throws

If inputs don't make sense (likely programmer error)

## Defined in

[packages/twine-core/src/verify.ts:31](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/verify.ts#L31)
