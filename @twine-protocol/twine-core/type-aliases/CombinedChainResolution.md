[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / CombinedChainResolution

# Type Alias: CombinedChainResolution

> **CombinedChainResolution**: [`ChainResolution`](ChainResolution.md) & `object`

A combined chain resolution

## Type declaration

### errors?

> `optional` **errors**: `Error`[]

Any errors that occurred during resolution

### resolver?

> `optional` **resolver**: [`Resolver`](../interfaces/Resolver.md)

The resolver that provided the result

## Defined in

[packages/twine-core/src/resolver/combine.ts:91](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/combine.ts#L91)