[**@twine-protocol/twine-builder v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-builder](../README.md) / UnsanitizedChainContent

# Interface: UnsanitizedChainContent\<M\>

Chain content accepted by the builder

## Type Parameters

• **M** *extends* `AnyMap`

## Properties

### key?

> `optional` **key**: [`JWK`](../../twine-core/interfaces/JWK.md)

JWK to sign the chain

#### Defined in

[sanitize.ts:21](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-builder/src/sanitize.ts#L21)

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

[sanitize.ts:31](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-builder/src/sanitize.ts#L31)

***

### meta?

> `optional` **meta**: `M`

General Metadata

#### Defined in

[sanitize.ts:39](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-builder/src/sanitize.ts#L39)

***

### mixins?

> `optional` **mixins**: `IntoResolvePulseQuery`[]

List of mixins

#### Defined in

[sanitize.ts:35](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-builder/src/sanitize.ts#L35)

***

### source

> **source**: `string`

Short identifier to denote the source producing this chain

#### Defined in

[sanitize.ts:13](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-builder/src/sanitize.ts#L13)

***

### specification?

> `optional` **specification**: `string`

Twine specification (eg: "twine/1.0.x/my-spec/1.0.0")

#### Defined in

[sanitize.ts:17](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-builder/src/sanitize.ts#L17)
