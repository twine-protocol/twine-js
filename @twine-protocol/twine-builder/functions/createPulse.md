[**@twine-protocol/twine-builder v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-builder](../index.md) / createPulse

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

[factory.ts:125](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-builder/src/factory.ts#L125)
