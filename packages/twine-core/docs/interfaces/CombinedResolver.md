[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / CombinedResolver

# Interface: CombinedResolver

A resolver that combines multiple resolvers

## Hierarchy

- [`Resolver`](Resolver.md)

  ↳ **`CombinedResolver`**

## Table of contents

### Properties

- [add](CombinedResolver.md#add)
- [remove](CombinedResolver.md#remove)
- [setCacheSize](CombinedResolver.md#setcachesize)

### Methods

- [chains](CombinedResolver.md#chains)
- [close](CombinedResolver.md#close)
- [has](CombinedResolver.md#has)
- [pulses](CombinedResolver.md#pulses)
- [resolve](CombinedResolver.md#resolve)
- [resolveIndex](CombinedResolver.md#resolveindex)
- [resolveLatest](CombinedResolver.md#resolvelatest)

## Properties

### add

• **add**: (`r`: [`Resolver`](Resolver.md)) => `void`

Add a resolver to the combined resolver

#### Type declaration

▸ (`r`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | [`Resolver`](Resolver.md) | The resolver to add |

##### Returns

`void`

#### Defined in

[packages/twine-core/src/resolver/combine.ts:52](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/combine.ts#L52)

___

### remove

• **remove**: (`r`: [`Resolver`](Resolver.md)) => `void`

Remove a resolver from the combined resolver

#### Type declaration

▸ (`r`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | [`Resolver`](Resolver.md) | The resolver to remove |

##### Returns

`void`

#### Defined in

[packages/twine-core/src/resolver/combine.ts:58](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/combine.ts#L58)

___

### setCacheSize

• **setCacheSize**: (`count`: `number`) => `void`

Set the maximum number of items to cache

#### Type declaration

▸ (`count`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | The maximum number of items to cache |

##### Returns

`void`

#### Defined in

[packages/twine-core/src/resolver/combine.ts:64](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/combine.ts#L64)

## Methods

### chains

▸ **chains**(): `AsyncGenerator`\<[`Chain`](../modules.md#chain), `any`, `unknown`\> \| `Generator`\<[`Chain`](../modules.md#chain), `any`, `unknown`\> \| [`AnyIterable`](../modules.md#anyiterable)\<[`Chain`](../modules.md#chain)\>

Get the chains that are known to the resolver

#### Returns

`AsyncGenerator`\<[`Chain`](../modules.md#chain), `any`, `unknown`\> \| `Generator`\<[`Chain`](../modules.md#chain), `any`, `unknown`\> \| [`AnyIterable`](../modules.md#anyiterable)\<[`Chain`](../modules.md#chain)\>

An sync/async iterable of chains

**`Example`**

```js
const chains = await collect(resolver.chains())
```

#### Inherited from

[Resolver](Resolver.md).[chains](Resolver.md#chains)

#### Defined in

[packages/twine-core/src/resolver/types.ts:324](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L324)

___

### close

▸ **close**(): [`Awaitable`](../modules.md#awaitable)\<`void`\>

Close the resolver (if cleanup is needed in sub-resolvers)

#### Returns

[`Awaitable`](../modules.md#awaitable)\<`void`\>

#### Defined in

[packages/twine-core/src/resolver/combine.ts:68](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/combine.ts#L68)

___

### has

▸ **has**(`cid`): [`Awaitable`](../modules.md#awaitable)\<`boolean`\>

Check if a cid can be resolved

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cid` | [`IntoCid`](../modules.md#intocid) | The CID to check |

#### Returns

[`Awaitable`](../modules.md#awaitable)\<`boolean`\>

True if the CID can be resolved, false otherwise

**`Example`**

```js
const exists = await resolver.has('bafybeib3...')
if (exists) {
  console.log('chain exists')
} else {
  console.log('chain does not exist')
}
```

#### Inherited from

[Resolver](Resolver.md).[has](Resolver.md#has)

#### Defined in

[packages/twine-core/src/resolver/types.ts:295](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L295)

___

### pulses

▸ **pulses**(`chain`, `start?`, `options?`): `AsyncGenerator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| `Generator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| [`AnyIterable`](../modules.md#anyiterable)\<[`Pulse`](../modules.md#pulse)\>

Get the pulses of a chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`IntoCid`](../modules.md#intocid) | The chain CID or chain itself to get the pulses from |
| `start?` | `number` \| [`IntoCid`](../modules.md#intocid) | The index or CID of the pulse to start from |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) | Options for the resolution |

#### Returns

`AsyncGenerator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| `Generator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| [`AnyIterable`](../modules.md#anyiterable)\<[`Pulse`](../modules.md#pulse)\>

An sync/async iterable of pulses

**`Example`**

```js
// loop through pulses and print indices
for await (const pulse of resolver.pulses('bafybeib3...')) {
  console.log('pulse', pulse.value.content.index)
}
```

#### Inherited from

[Resolver](Resolver.md).[pulses](Resolver.md#pulses)

#### Defined in

[packages/twine-core/src/resolver/types.ts:313](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L313)

___

### resolve

▸ **resolve**(`query`, `options?`): `Promise`\<[`ChainResolution`](../modules.md#chainresolution)\>

Resolve a chain from a query

This is the main way to get a pulse or chain from somewhere
and have it automatically verified.

If the input is already a successful resolution, it will
be returned as is.

If the input is a chain or pulse, it will be resolved as
a chain or pulse resolution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`IntoResolveChainQuery`](../modules.md#intoresolvechainquery) | The query to resolve |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) | Options for the resolution |

#### Returns

`Promise`\<[`ChainResolution`](../modules.md#chainresolution)\>

A chain or pulse resolution

**`Example`**

```js
const { chain } = await resolver.resolve({ chain: 'bafybeib3...' })
if (chain) {
  console.log('chain', chain)
} else {
  console.log('no chain')
}
```

**`Example`**

```js
const { chain, pulse } = await resolver.resolve({
  chain: 'bafybeib3...',
  pulse: 'bafybeib3...'
})

if (pulse) {
  console.log('pulse', pulse)
} else {
  console.log('no pulse')
}
```

#### Inherited from

[Resolver](Resolver.md).[resolve](Resolver.md#resolve)

#### Defined in

[packages/twine-core/src/resolver/types.ts:233](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L233)

▸ **resolve**(`query`, `options?`): `Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

Resolve a pulse (with its chain) from a query

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`IntoResolvePulseQuery`](../modules.md#intoresolvepulsequery) |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) |

#### Returns

`Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

#### Inherited from

[Resolver](Resolver.md).[resolve](Resolver.md#resolve)

#### Defined in

[packages/twine-core/src/resolver/types.ts:237](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L237)

___

### resolveIndex

▸ **resolveIndex**(`chain`, `index`, `options?`): `Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

Resolve a pulse by index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`IntoCid`](../modules.md#intocid) | The chain CID or chain itself to resolve the pulse from |
| `index` | `number` | The index of the pulse to resolve |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) | Options for the resolution |

#### Returns

`Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

A pulse resolution

**`Example`**

```js
const resolution = await resolver.resolveIndex('bafybeib3...', 42)
if (resolution.pulse) {
  console.log('pulse', resolution.pulse)
}
```

#### Inherited from

[Resolver](Resolver.md).[resolveIndex](Resolver.md#resolveindex)

#### Defined in

[packages/twine-core/src/resolver/types.ts:278](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L278)

___

### resolveLatest

▸ **resolveLatest**(`chain`, `options?`): `Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

Resolve the latest pulse of a chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`IntoCid`](../modules.md#intocid) | The chain CID or chain itself to resolve the latest pulse from |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) | Options for the resolution |

#### Returns

`Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

A pulse resolution

**`Example`**

```js
const resolution = await resolver.resolveLatest('bafybeib3...')
if (resolution.pulse) {
  console.log('pulse', resolution.pulse)
}
```

**`Example`**

```js
const { chain } = await resolver.resolve({ chain: 'bafybeib3...' })
const resolution = await resolver.resolveLatest(chain)
```

#### Inherited from

[Resolver](Resolver.md).[resolveLatest](Resolver.md#resolvelatest)

#### Defined in

[packages/twine-core/src/resolver/types.ts:260](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L260)
