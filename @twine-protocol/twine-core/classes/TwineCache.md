[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / TwineCache

# Class: TwineCache

A store that caches twines in memory

## Extends

- [`MemoryStore`](MemoryStore.md)

## Constructors

### new TwineCache()

> **new TwineCache**(`maxSize`): [`TwineCache`](TwineCache.md)

Create a new twine cache

#### Parameters

• **maxSize**: `number` = `10000`

The maximum number of twines to keep in memory (default 10000)

#### Returns

[`TwineCache`](TwineCache.md)

#### Overrides

[`MemoryStore`](MemoryStore.md).[`constructor`](MemoryStore.md#constructors)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:287](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L287)

## Properties

### chainStorageMeta

> `protected` **chainStorageMeta**: `Map`\<`string`, [`ChainStorageMeta`](../type-aliases/ChainStorageMeta.md)\>

Chain storage metadata

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`chainStorageMeta`](MemoryStore.md#chainstoragemeta)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:40](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L40)

***

### chainStore

> `protected` **chainStore**: `Map`\<`string`, [`Chain`](../type-aliases/Chain.md)\>

Chains are stored in a map with the CID as the key

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`chainStore`](MemoryStore.md#chainstore)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:36](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L36)

***

### maxSize

> `protected` **maxSize**: `number`

The maximum number of twines to keep in memory

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`maxSize`](MemoryStore.md#maxsize)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:48](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L48)

***

### pulseStore

> `protected` **pulseStore**: [`CacheMap`](CacheMap.md)\<`string`, [`Pulse`](../type-aliases/Pulse.md)\>

Pulses are stored in a map with the CID as the key

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`pulseStore`](MemoryStore.md#pulsestore)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:44](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L44)

## Methods

### ~~add()~~

> **add**(`twine`): `void`

#### Parameters

• **twine**: [`Twine`](Twine.md)\<`any`\>

#### Returns

`void`

#### Deprecated

#### Defined in

[packages/twine-core/src/store/memory-store.ts:303](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L303)

***

### chains()

> **chains**(): `MapIterator`\<[`Chain`](../type-aliases/Chain.md)\>

Get an iterator of all the chains in the store

#### Returns

`MapIterator`\<[`Chain`](../type-aliases/Chain.md)\>

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`chains`](MemoryStore.md#chains)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:180](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L180)

***

### delete()

> **delete**(`cid`): `void`

Delete a twine from storage

#### Parameters

• **cid**: [`IntoCid`](../type-aliases/IntoCid.md)

The CID of the twine to delete

#### Returns

`void`

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`delete`](MemoryStore.md#delete)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:104](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L104)

***

### fetch()

> **fetch**(`cid`): `null` \| [`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)

Fetch a twine from storage, returning null if it is not found

it is NOT expected that the twine signature is checked,
that is for the [Resolver](../interfaces/Resolver.md) to do.

#### Parameters

• **cid**: [`IntoCid`](../type-aliases/IntoCid.md)

The CID of the twine to fetch

#### Returns

`null` \| [`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`fetch`](MemoryStore.md#fetch)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:80](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L80)

***

### ~~get()~~

> **get**(`cid`): `null` \| [`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)

#### Parameters

• **cid**: [`IntoCid`](../type-aliases/IntoCid.md)

#### Returns

`null` \| [`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)

#### Deprecated

#### Defined in

[packages/twine-core/src/store/memory-store.ts:294](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L294)

***

### has()

> **has**(`cid`): `boolean`

Check if a cid can be resolved

#### Parameters

• **cid**: [`IntoCid`](../type-aliases/IntoCid.md)

The CID to check

#### Returns

`boolean`

True if the CID can be resolved, false otherwise

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`has`](MemoryStore.md#has)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:96](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L96)

***

### pulses()

> **pulses**(`chainCid`, `start`?, `options`?): `AsyncGenerator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\>

Get an async iterator of all the pulses in a chain

#### Parameters

• **chainCid**: [`IntoCid`](../type-aliases/IntoCid.md)

• **start?**: `number` \| [`IntoCid`](../type-aliases/IntoCid.md)

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

#### Returns

`AsyncGenerator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\>

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`pulses`](MemoryStore.md#pulses)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:187](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L187)

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

• **query**: [`IntoResolveChainQuery`](../type-aliases/IntoResolveChainQuery.md)

The query to resolve

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

Options for the resolution

##### Returns

`Promise`\<[`ChainResolution`](../type-aliases/ChainResolution.md)\>

A chain or pulse resolution

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

##### Inherited from

[`MemoryStore`](MemoryStore.md).[`resolve`](MemoryStore.md#resolve)

##### Defined in

[packages/twine-core/src/store/memory-store.ts:214](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L214)

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve a pulse (with its chain) from a query

##### Parameters

• **query**: [`IntoResolvePulseQuery`](../type-aliases/IntoResolvePulseQuery.md)

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

##### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

A chain or pulse resolution

A chain or pulse resolution

##### Inherited from

[`MemoryStore`](MemoryStore.md).[`resolve`](MemoryStore.md#resolve)

##### Defined in

[packages/twine-core/src/store/memory-store.ts:215](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L215)

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

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`resolveIndex`](MemoryStore.md#resolveindex)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:245](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L245)

***

### resolveLatest()

> **resolveLatest**(`chainCid`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve the latest pulse of a chain

#### Parameters

• **chainCid**: [`IntoCid`](../type-aliases/IntoCid.md)

The chain CID or chain itself to resolve the latest pulse from

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

Options for the resolution

#### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

A pulse resolution

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`resolveLatest`](MemoryStore.md#resolvelatest)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:229](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L229)

***

### save()

> **save**(`twine`): `void`

Save a twine to storage

#### Parameters

• **twine**: [`Twine`](Twine.md)\<`any`\>

The twine to save

#### Returns

`void`

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`save`](MemoryStore.md#save)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:146](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L146)

***

### saveMany()

Save many twines to storage

#### saveMany(twines)

> **saveMany**(`twines`): `Promise`\<`void`\>

Save many twines to storage

##### Parameters

• **twines**: `AsyncIterable`\<[`Twine`](Twine.md)\<[`TwineValue`](../type-aliases/TwineValue.md)\>, `any`, `any`\>

The twines to save

##### Returns

`Promise`\<`void`\>

##### Inherited from

[`MemoryStore`](MemoryStore.md).[`saveMany`](MemoryStore.md#savemany)

##### Defined in

[packages/twine-core/src/store/memory-store.ts:158](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L158)

#### saveMany(twines)

> **saveMany**(`twines`): `void`

Save many twines to storage

##### Parameters

• **twines**: `Iterable`\<[`Twine`](Twine.md)\<[`TwineValue`](../type-aliases/TwineValue.md)\>, `any`, `any`\>

##### Returns

`void`

##### Inherited from

[`MemoryStore`](MemoryStore.md).[`saveMany`](MemoryStore.md#savemany)

##### Defined in

[packages/twine-core/src/store/memory-store.ts:159](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L159)

***

### setMaxSize()

> **setMaxSize**(`maxSize`): `void`

Set the maximum number of twines to keep in memory

If the store is already larger than the new max size, the oldest twines will be removed.

#### Parameters

• **maxSize**: `number`

#### Returns

`void`

#### Inherited from

[`MemoryStore`](MemoryStore.md).[`setMaxSize`](MemoryStore.md#setmaxsize)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:69](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/memory-store.ts#L69)
