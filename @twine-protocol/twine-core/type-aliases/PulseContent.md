[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / PulseContent

# Type Alias: PulseContent\<P\>

> **PulseContent**\<`P`\>: `object`

Pulse content

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

[packages/twine-core/src/types.ts:62](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/types.ts#L62)
