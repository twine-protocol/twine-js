[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / ChainContent

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

[packages/twine-core/src/types.ts:37](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/types.ts#L37)
