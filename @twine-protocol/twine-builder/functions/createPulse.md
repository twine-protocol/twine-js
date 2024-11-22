[**@twine-protocol/twine-builder v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-builder](../index.md) / createPulse

# Function: createPulse()

> **createPulse**\<`P`\>(`chain`, `previous`, `arg2`, `signer`, `hasher`): `Promise`\<`Pulse`\<`P`\>\>

Create a new pulse

Note: The only supported hash function is SHA3-512 at the moment

## Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* `AnyMap` |

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `chain` | `Chain` | `undefined` | The chain |
| `previous` | `false` \| `Pulse` | `undefined` | The previous pulse, or false for first pulse |
| `arg2` | `object` | `undefined` | The mixins and payload |
| `arg2.mixins`? | `IntoResolvePulseQuery`[] | `[]` | The mixins |
| `arg2.payload`? | `object` \| `P` | `{}` | The payload |
| `signer` | `Signer` | `undefined` | The signer |
| `hasher` | `MultihashHasher`\<`number`\> | `sha3512` | The hasher |

## Returns

`Promise`\<`Pulse`\<`P`\>\>

The pulse as a Twine object

## Defined in

[factory.ts:125](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/factory.ts#L125)
