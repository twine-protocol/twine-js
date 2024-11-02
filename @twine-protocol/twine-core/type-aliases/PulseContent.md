[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / PulseContent

# Type Alias: PulseContent\<P\>

> **PulseContent**\<`P`\>: `object`

Pulse

## Type Parameters

• **P** *extends* [`AnyMap`](AnyMap.md) = [`AnyMap`](AnyMap.md)

## Type declaration

### chain

> **chain**: [`CID`](../classes/CID.md)

Chain CID this pulse belongs to

### index

> **index**: [`PulseIndex`](PulseIndex.md)

Index of this pulse

### links

> **links**: [`CID`](../classes/CID.md)[]

List of links on the same chain

### mixins

> **mixins**: [`Mixin`](Mixin.md)[]

List of mixins to other chains

### payload

> **payload**: `P`

User specified payload

### source

> **source**: `string`

Short identifier to denote the source producing this pulse

## Defined in

[packages/twine-core/src/types.ts:58](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/types.ts#L58)
