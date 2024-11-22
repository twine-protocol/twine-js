[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / ChainContent

# Type Alias: ChainContent\<M\>

> **ChainContent**\<`M`\>: `object`

Chain metadata

## Type Parameters

• **M** *extends* [`AnyMap`](AnyMap.md) = [`AnyMap`](AnyMap.md)

## Type declaration

### key

> **key**: [`JWK`](../interfaces/JWK.md)

Public key in JWK format

### links\_radix

> **links\_radix**: `number`

Radix used for links list

### meta

> **meta**: `M`

General Metadata

### mixins

> **mixins**: [`Mixin`](Mixin.md)[]

List of mixins

### source

> **source**: `string`

Short identifier to denote the source producing this chain

### specification

> **specification**: `string`

Twine specification

## Defined in

[packages/twine-core/src/types.ts:39](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/types.ts#L39)
