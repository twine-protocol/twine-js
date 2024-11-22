[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / ResolveLatestOptionsCombined

# Interface: ResolveLatestOptionsCombined

Options for combined resolution of latest pulse calls

## Extends

- [`ResolveOptions`](../type-aliases/ResolveOptions.md)

## Properties

### checkAll?

> `optional` **checkAll**: `boolean`

If true, all resolvers will be queried and the best/latest result will be returned

#### Defined in

[packages/twine-core/src/resolver/combine.ts:37](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/combine.ts#L37)

***

### noVerify?

> `optional` **noVerify**: `boolean`

If true, the resolver will not verify the signature of the resolved twine

#### Inherited from

`ResolveOptions.noVerify`

#### Defined in

[packages/twine-core/src/resolver/types.ts:161](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/types.ts#L161)

***

### noCache?

> `optional` **noCache**: `boolean`

If true, the resolver will bypass the cache

#### Inherited from

`ResolveOptions.noCache`

#### Defined in

[packages/twine-core/src/resolver/types.ts:165](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/types.ts#L165)
