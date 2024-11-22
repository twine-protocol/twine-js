[**@twine-protocol/twine-builder v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-builder](../index.md) / UnsanitizedChainContent

# Interface: UnsanitizedChainContent\<M\>

**`Internal`**

Chain content accepted by the builder

## Type Parameters

• **M** *extends* `AnyMap`

## Properties

### source

> **source**: `string`

Short identifier to denote the source producing this chain

#### Defined in

[sanitize.ts:14](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-builder/src/sanitize.ts#L14)

***

### specification?

> `optional` **specification**: `string`

Twine specification (eg: "twine/1.0.x/my-spec/1.0.0")

#### Defined in

[sanitize.ts:18](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-builder/src/sanitize.ts#L18)

***

### key?

> `optional` **key**: [`JWK`](../../twine-core/interfaces/JWK.md)

JWK to sign the chain

#### Defined in

[sanitize.ts:22](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-builder/src/sanitize.ts#L22)

***

### links\_radix?

> `optional` **links\_radix**: `number`

Radix for links

A value of 1 is not allowed

A value of 0 is interpreted as a no-radix list. Pulses will just be linked to their previous pulse.

#### Default

```ts
32
```

#### Defined in

[sanitize.ts:32](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-builder/src/sanitize.ts#L32)

***

### mixins?

> `optional` **mixins**: `IntoResolvePulseQuery`[]

List of mixins

#### Defined in

[sanitize.ts:36](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-builder/src/sanitize.ts#L36)

***

### meta?

> `optional` **meta**: `M`

General Metadata

#### Defined in

[sanitize.ts:40](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-builder/src/sanitize.ts#L40)
