[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / ResolveLatestOptionsCombined

# Interface: ResolveLatestOptionsCombined

Options for combined resolution of latest pulse calls

## Extends

- [`ResolveOptions`](../type-aliases/ResolveOptions.md)

## Properties

### checkAll?

> `optional` **checkAll**: `boolean`

If true, all resolvers will be queried and the best/latest result will be returned

#### Defined in

[packages/twine-core/src/resolver/combine.ts:38](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/resolver/combine.ts#L38)

***

### noCache?

> `optional` **noCache**: `boolean`

If true, the resolver will bypass the cache

#### Inherited from

`ResolveOptions.noCache`

#### Defined in

[packages/twine-core/src/resolver/types.ts:165](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/resolver/types.ts#L165)

***

### noVerify?

> `optional` **noVerify**: `boolean`

If true, the resolver will not verify the signature of the resolved twine

#### Inherited from

`ResolveOptions.noVerify`

#### Defined in

[packages/twine-core/src/resolver/types.ts:161](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/resolver/types.ts#L161)
