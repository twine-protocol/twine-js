[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / verifySignature

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

[packages/twine-core/src/verify.ts:31](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/verify.ts#L31)
