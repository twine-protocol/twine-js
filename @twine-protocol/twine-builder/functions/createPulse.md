[**@twine-protocol/twine-builder v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-builder](../README.md) / createPulse

# Function: createPulse()

> **createPulse**\<`P`\>(`chain`, `previous`, `arg2`, `signer`, `hasher`): `Promise`\<`Pulse`\<`P`\>\>

Create a new pulse

Note: The only supported hash function is SHA3-512 at the moment

## Type Parameters

• **P** *extends* `AnyMap`

## Parameters

• **chain**: `Chain`

The chain

• **previous**: `false` \| `Pulse`

The previous pulse, or false for first pulse

• **arg2**

The mixins and payload

• **arg2.mixins?**: `IntoResolvePulseQuery`[] = `[]`

The mixins

• **arg2.payload?**: `object` \| `P` = `{}`

The payload

• **signer**: `Signer`

The signer

• **hasher**: `MultihashHasher`\<`number`\> = `sha3512`

The hasher

## Returns

`Promise`\<`Pulse`\<`P`\>\>

The pulse as a Twine object

## Defined in

[factory.ts:124](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-builder/src/factory.ts#L124)
