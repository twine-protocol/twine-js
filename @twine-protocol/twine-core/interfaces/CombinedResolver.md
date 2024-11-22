[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / CombinedResolver

# Interface: CombinedResolver

A resolver that combines multiple resolvers

## Extends

- [`Resolver`](Resolver.md)

## Properties

### add()

> **add**: (`r`) => `void`

Add a resolver to the combined resolver

#### Parameters

• **r**: [`Resolver`](Resolver.md)

The resolver to add

#### Returns

`void`

#### Defined in

[packages/twine-core/src/resolver/combine.ts:51](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/combine.ts#L51)

***

### remove()

> **remove**: (`r`) => `void`

Remove a resolver from the combined resolver

#### Parameters

• **r**: [`Resolver`](Resolver.md)

The resolver to remove

#### Returns

`void`

#### Defined in

[packages/twine-core/src/resolver/combine.ts:57](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/combine.ts#L57)

***

### setCacheSize()

> **setCacheSize**: (`count`) => `void`

Set the maximum number of items to cache

#### Parameters

• **count**: `number`

The maximum number of items to cache

#### Returns

`void`

#### Defined in

[packages/twine-core/src/resolver/combine.ts:63](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/combine.ts#L63)

## Methods

### close()

> **close**(): [`Awaitable`](../type-aliases/Awaitable.md)\<`void`\>

Close the resolver (if cleanup is needed in sub-resolvers)

#### Returns

[`Awaitable`](../type-aliases/Awaitable.md)\<`void`\>

#### Defined in

[packages/twine-core/src/resolver/combine.ts:67](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/combine.ts#L67)

***

### resolve()

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<[`ChainResolution`](../type-aliases/ChainResolution.md)\>

Resolve a chain from a query

This is the main way to get a pulse or chain from somewhere
and have it automatically verified.

If the input is already a successful resolution, it will
be returned as is.

If the input is a chain or pulse, it will be resolved as
a chain or pulse resolution.

##### Parameters

• **query**: [`IntoResolveChainQuery`](../type-aliases/IntoResolveChainQuery.md)

The query to resolve

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

Options for the resolution

##### Returns

`Promise`\<[`ChainResolution`](../type-aliases/ChainResolution.md)\>

A chain or pulse resolution

##### Examples

```js
const { chain } = await resolver.resolve({ chain: 'bafybeib3...' })
if (chain) {
  console.log('chain', chain)
} else {
  console.log('no chain')
}
```

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

##### Inherited from

[`Resolver`](Resolver.md).[`resolve`](Resolver.md#resolve)

##### Defined in

[packages/twine-core/src/resolver/types.ts:233](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/types.ts#L233)

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve a pulse (with its chain) from a query

##### Parameters

• **query**: [`IntoResolvePulseQuery`](../type-aliases/IntoResolvePulseQuery.md)

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

##### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

##### Inherited from

[`Resolver`](Resolver.md).[`resolve`](Resolver.md#resolve)

##### Defined in

[packages/twine-core/src/resolver/types.ts:237](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/types.ts#L237)

***

### resolveLatest()

> **resolveLatest**(`chain`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve the latest pulse of a chain

#### Parameters

• **chain**: [`IntoCid`](../type-aliases/IntoCid.md)

The chain CID or chain itself to resolve the latest pulse from

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

Options for the resolution

#### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

A pulse resolution

#### Examples

```js
const resolution = await resolver.resolveLatest('bafybeib3...')
if (resolution.pulse) {
  console.log('pulse', resolution.pulse)
}
```

```js
const { chain } = await resolver.resolve({ chain: 'bafybeib3...' })
const resolution = await resolver.resolveLatest(chain)
```

#### Inherited from

[`Resolver`](Resolver.md).[`resolveLatest`](Resolver.md#resolvelatest)

#### Defined in

[packages/twine-core/src/resolver/types.ts:260](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/types.ts#L260)

***

### resolveIndex()

> **resolveIndex**(`chain`, `index`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve a pulse by index

#### Parameters

• **chain**: [`IntoCid`](../type-aliases/IntoCid.md)

The chain CID or chain itself to resolve the pulse from

• **index**: `number`

The index of the pulse to resolve

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

Options for the resolution

#### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

A pulse resolution

#### Example

```js
const resolution = await resolver.resolveIndex('bafybeib3...', 42)
if (resolution.pulse) {
  console.log('pulse', resolution.pulse)
}
```

#### Inherited from

[`Resolver`](Resolver.md).[`resolveIndex`](Resolver.md#resolveindex)

#### Defined in

[packages/twine-core/src/resolver/types.ts:278](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/types.ts#L278)

***

### has()

> **has**(`cid`): [`Awaitable`](../type-aliases/Awaitable.md)\<`boolean`\>

Check if a cid can be resolved

#### Parameters

• **cid**: [`IntoCid`](../type-aliases/IntoCid.md)

The CID to check

#### Returns

[`Awaitable`](../type-aliases/Awaitable.md)\<`boolean`\>

True if the CID can be resolved, false otherwise

#### Example

```js
const exists = await resolver.has('bafybeib3...')
if (exists) {
  console.log('chain exists')
} else {
  console.log('chain does not exist')
}
```

#### Inherited from

[`Resolver`](Resolver.md).[`has`](Resolver.md#has)

#### Defined in

[packages/twine-core/src/resolver/types.ts:295](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/types.ts#L295)

***

### pulses()

> **pulses**(`chain`, `start`?, `options`?): `AsyncGenerator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| `Generator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| [`AnyIterable`](../type-aliases/AnyIterable.md)\<[`Pulse`](../type-aliases/Pulse.md)\>

Get the pulses of a chain

#### Parameters

• **chain**: [`IntoCid`](../type-aliases/IntoCid.md)

The chain CID or chain itself to get the pulses from

• **start?**: `number` \| [`IntoCid`](../type-aliases/IntoCid.md)

The index or CID of the pulse to start from

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

Options for the resolution

#### Returns

`AsyncGenerator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| `Generator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| [`AnyIterable`](../type-aliases/AnyIterable.md)\<[`Pulse`](../type-aliases/Pulse.md)\>

An sync/async iterable of pulses

#### Example

```js
// loop through pulses and print indices
for await (const pulse of resolver.pulses('bafybeib3...')) {
  console.log('pulse', pulse.value.content.index)
}
```

#### Inherited from

[`Resolver`](Resolver.md).[`pulses`](Resolver.md#pulses)

#### Defined in

[packages/twine-core/src/resolver/types.ts:313](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/types.ts#L313)

***

### chains()

> **chains**(): `AsyncGenerator`\<[`Chain`](../type-aliases/Chain.md), `any`, `any`\> \| `Generator`\<[`Chain`](../type-aliases/Chain.md), `any`, `any`\> \| [`AnyIterable`](../type-aliases/AnyIterable.md)\<[`Chain`](../type-aliases/Chain.md)\>

Get the chains that are known to the resolver

#### Returns

`AsyncGenerator`\<[`Chain`](../type-aliases/Chain.md), `any`, `any`\> \| `Generator`\<[`Chain`](../type-aliases/Chain.md), `any`, `any`\> \| [`AnyIterable`](../type-aliases/AnyIterable.md)\<[`Chain`](../type-aliases/Chain.md)\>

An sync/async iterable of chains

#### Example

```js
const chains = await collect(resolver.chains())
```

#### Inherited from

[`Resolver`](Resolver.md).[`chains`](Resolver.md#chains)

#### Defined in

[packages/twine-core/src/resolver/types.ts:324](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/types.ts#L324)
