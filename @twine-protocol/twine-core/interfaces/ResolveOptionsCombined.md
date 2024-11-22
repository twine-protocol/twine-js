[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / ResolveOptionsCombined

# Interface: ResolveOptionsCombined

Options for combined resolution calls

## Extends

- [`ResolveOptions`](../type-aliases/ResolveOptions.md)

## Properties

### race?

> `optional` **race**: `boolean`

If true all resolvers will be sent the request and the first to
respond will be used. If false, the resolvers will be queried in series.

#### Defined in

[packages/twine-core/src/resolver/combine.ts:25](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/combine.ts#L25)

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
