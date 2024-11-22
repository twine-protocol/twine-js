[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / ResolveLatestOptionsCombined

# Interface: ResolveLatestOptionsCombined

Options for combined resolution of latest pulse calls

## Extends

- [`ResolveOptions`](../type-aliases/ResolveOptions.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `checkAll?` | `boolean` | If true, all resolvers will be queried and the best/latest result will be returned | - | [packages/twine-core/src/resolver/combine.ts:37](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/combine.ts#L37) |
| `noVerify?` | `boolean` | If true, the resolver will not verify the signature of the resolved twine | `ResolveOptions.noVerify` | [packages/twine-core/src/resolver/types.ts:161](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/types.ts#L161) |
| `noCache?` | `boolean` | If true, the resolver will bypass the cache | `ResolveOptions.noCache` | [packages/twine-core/src/resolver/types.ts:165](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/types.ts#L165) |
