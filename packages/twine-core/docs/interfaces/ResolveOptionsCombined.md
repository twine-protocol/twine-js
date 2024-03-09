[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / ResolveOptionsCombined

# Interface: ResolveOptionsCombined

Options for combined resolution calls

## Hierarchy

- [`ResolveOptions`](../modules.md#resolveoptions)

  ↳ **`ResolveOptionsCombined`**

## Table of contents

### Properties

- [noCache](ResolveOptionsCombined.md#nocache)
- [noVerify](ResolveOptionsCombined.md#noverify)
- [race](ResolveOptionsCombined.md#race)

## Properties

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

___

### race

• `Optional` **race**: `boolean`

If true all resolvers will be sent the request and the first to
respond will be used. If false, the resolvers will be queried in series.

#### Defined in

[packages/twine-core/src/resolver/combine.ts:26](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/combine.ts#L26)
