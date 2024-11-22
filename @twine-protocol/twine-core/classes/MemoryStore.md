[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / MemoryStore

# Class: MemoryStore

A store that keeps twines in memory

This store is the base for the [TwineCache](TwineCache.md).

## Extended by

- [`TwineCache`](TwineCache.md)

## Implements

- [`Store`](../interfaces/Store.md)

## Constructors

### new MemoryStore()

> **new MemoryStore**(`maxSize`): [`MemoryStore`](MemoryStore.md)

Create a new memory store

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `maxSize` | `number` | `0` | The maximum number of twines to keep in memory (default infinite) |

#### Returns

[`MemoryStore`](MemoryStore.md)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:60](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L60)

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `chainStore` | `protected` | `Map`\<`string`, [`Chain`](../type-aliases/Chain.md)\> | Chains are stored in a map with the CID as the key | [packages/twine-core/src/store/memory-store.ts:37](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L37) |
| `chainStorageMeta` | `protected` | `Map`\<`string`, [`ChainStorageMeta`](../type-aliases/ChainStorageMeta.md)\> | Chain storage metadata | [packages/twine-core/src/store/memory-store.ts:41](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L41) |
| `pulseStore` | `protected` | [`CacheMap`](CacheMap.md)\<`string`, [`Pulse`](../type-aliases/Pulse.md)\> | Pulses are stored in a map with the CID as the key | [packages/twine-core/src/store/memory-store.ts:45](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L45) |
| `maxSize` | `protected` | `number` | The maximum number of twines to keep in memory | [packages/twine-core/src/store/memory-store.ts:49](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L49) |

## Methods

### setMaxSize()

> **setMaxSize**(`maxSize`): `void`

Set the maximum number of twines to keep in memory

If the store is already larger than the new max size, the oldest twines will be removed.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `maxSize` | `number` |

#### Returns

`void`

#### Defined in

[packages/twine-core/src/store/memory-store.ts:70](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L70)

***

### fetch()

> **fetch**(`cid`): `null` \| [`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)

Fetch a twine from storage, returning null if it is not found

it is NOT expected that the twine signature is checked,
that is for the [Resolver](../interfaces/Resolver.md) to do.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cid` | [`IntoCid`](../type-aliases/IntoCid.md) | The CID of the twine to fetch |

#### Returns

`null` \| [`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)

#### Implementation of

[`Store`](../interfaces/Store.md).[`fetch`](../interfaces/Store.md#fetch)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:81](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L81)

***

### has()

> **has**(`cid`): `boolean`

Check if a cid can be resolved

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cid` | [`IntoCid`](../type-aliases/IntoCid.md) | The CID to check |

#### Returns

`boolean`

True if the CID can be resolved, false otherwise

#### Implementation of

[`Store`](../interfaces/Store.md).[`has`](../interfaces/Store.md#has)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:97](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L97)

***

### delete()

> **delete**(`cid`): `void`

Delete a twine from storage

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cid` | [`IntoCid`](../type-aliases/IntoCid.md) | The CID of the twine to delete |

#### Returns

`void`

#### Implementation of

[`Store`](../interfaces/Store.md).[`delete`](../interfaces/Store.md#delete)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:105](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L105)

***

### save()

> **save**(`twine`): `void`

Save a twine to storage

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `twine` | [`Twine`](Twine.md)\<`any`\> | The twine to save |

#### Returns

`void`

#### Implementation of

[`Store`](../interfaces/Store.md).[`save`](../interfaces/Store.md#save)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:147](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L147)

***

### saveMany()

Save many twines to storage

#### saveMany(twines)

> **saveMany**(`twines`): `Promise`\<`void`\>

Save many twines to storage

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `twines` | `AsyncIterable`\<[`Twine`](Twine.md)\<[`TwineValue`](../type-aliases/TwineValue.md)\>, `any`, `any`\> | The twines to save |

##### Returns

`Promise`\<`void`\>

##### Implementation of

[`Store`](../interfaces/Store.md).[`saveMany`](../interfaces/Store.md#savemany)

##### Defined in

[packages/twine-core/src/store/memory-store.ts:159](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L159)

#### saveMany(twines)

> **saveMany**(`twines`): `void`

Save many twines to storage

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `twines` | `Iterable`\<[`Twine`](Twine.md)\<[`TwineValue`](../type-aliases/TwineValue.md)\>, `any`, `any`\> |

##### Returns

`void`

##### Implementation of

`Store.saveMany`

##### Defined in

[packages/twine-core/src/store/memory-store.ts:160](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L160)

***

### chains()

> **chains**(): `MapIterator`\<[`Chain`](../type-aliases/Chain.md)\>

Get an iterator of all the chains in the store

#### Returns

`MapIterator`\<[`Chain`](../type-aliases/Chain.md)\>

#### Implementation of

[`Store`](../interfaces/Store.md).[`chains`](../interfaces/Store.md#chains)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:181](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L181)

***

### pulses()

> **pulses**(`chainCid`, `start`?, `options`?): `AsyncGenerator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\>

Get an async iterator of all the pulses in a chain

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `chainCid` | [`IntoCid`](../type-aliases/IntoCid.md) |
| `start`? | `number` \| [`IntoCid`](../type-aliases/IntoCid.md) |
| `options`? | [`ResolveOptions`](../type-aliases/ResolveOptions.md) |

#### Returns

`AsyncGenerator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\>

#### Implementation of

[`Store`](../interfaces/Store.md).[`pulses`](../interfaces/Store.md#pulses)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:188](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L188)

***

### resolve()

Resolve a chain from a query

This is the main way to get a pulse or chain from somewhere
and have it automatically verified.

If the input is already a successful resolution, it will
be returned as is.

If the input is a chain or pulse, it will be resolved as
a chain or pulse resolution.

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

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | [`IntoResolveChainQuery`](../type-aliases/IntoResolveChainQuery.md) | The query to resolve |
| `options`? | [`ResolveOptions`](../type-aliases/ResolveOptions.md) | Options for the resolution |

##### Returns

`Promise`\<[`ChainResolution`](../type-aliases/ChainResolution.md)\>

A chain or pulse resolution

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

##### Implementation of

[`Store`](../interfaces/Store.md).[`resolve`](../interfaces/Store.md#resolve)

##### Defined in

[packages/twine-core/src/store/memory-store.ts:215](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L215)

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve a pulse (with its chain) from a query

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | [`IntoResolvePulseQuery`](../type-aliases/IntoResolvePulseQuery.md) |
| `options`? | [`ResolveOptions`](../type-aliases/ResolveOptions.md) |

##### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

A chain or pulse resolution

##### Implementation of

[`Store`](../interfaces/Store.md).[`resolve`](../interfaces/Store.md#resolve)

##### Defined in

[packages/twine-core/src/store/memory-store.ts:216](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L216)

***

### resolveLatest()

> **resolveLatest**(`chainCid`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve the latest pulse of a chain

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chainCid` | [`IntoCid`](../type-aliases/IntoCid.md) | The chain CID or chain itself to resolve the latest pulse from |
| `options`? | [`ResolveOptions`](../type-aliases/ResolveOptions.md) | Options for the resolution |

#### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

A pulse resolution

#### Implementation of

[`Store`](../interfaces/Store.md).[`resolveLatest`](../interfaces/Store.md#resolvelatest)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:230](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L230)

***

### resolveIndex()

> **resolveIndex**(`chain`, `index`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve a pulse by index

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | [`IntoCid`](../type-aliases/IntoCid.md) | The chain CID or chain itself to resolve the pulse from |
| `index` | `number` | The index of the pulse to resolve |
| `options`? | [`ResolveOptions`](../type-aliases/ResolveOptions.md) | Options for the resolution |

#### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

A pulse resolution

#### Implementation of

[`Store`](../interfaces/Store.md).[`resolveIndex`](../interfaces/Store.md#resolveindex)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:246](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/memory-store.ts#L246)
