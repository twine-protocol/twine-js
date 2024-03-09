[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / ResolveLatestOptionsCombined

# Interface: ResolveLatestOptionsCombined

Options for combined resolution of latest pulse calls

## Hierarchy

- [`ResolveOptions`](../modules.md#resolveoptions)

  ↳ **`ResolveLatestOptionsCombined`**

## Table of contents

### Properties

- [checkAll](ResolveLatestOptionsCombined.md#checkall)
- [noCache](ResolveLatestOptionsCombined.md#nocache)
- [noVerify](ResolveLatestOptionsCombined.md#noverify)

## Properties

### checkAll

• `Optional` **checkAll**: `boolean`

If true, all resolvers will be queried and the best/latest result will be returned

#### Defined in

[packages/twine-core/src/resolver/combine.ts:38](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/combine.ts#L38)

___

### noCache

• `Optional` **noCache**: `boolean`

If true, the resolver will bypass the cache

#### Inherited from

ResolveOptions.noCache

#### Defined in

[packages/twine-core/src/resolver/types.ts:165](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L165)

___

### noVerify

• `Optional` **noVerify**: `boolean`

If true, the resolver will not verify the signature of the resolved twine

#### Inherited from

ResolveOptions.noVerify

#### Defined in

[packages/twine-core/src/resolver/types.ts:161](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L161)
