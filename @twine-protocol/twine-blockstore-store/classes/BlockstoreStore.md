[**@twine-protocol/twine-blockstore-store v0.0.3**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-blockstore-store](../README.md) / BlockstoreStore

# Class: BlockstoreStore

Storage wrapper for storing Twine objects inside datastore and a blockstore

## Implements

- `Store`

## Constructors

### new BlockstoreStore()

> **new BlockstoreStore**(`datastore`, `blockstore`): [`BlockstoreStore`](BlockstoreStore.md)

Create a new BlockstoreStore

#### Parameters

• **datastore**: `Datastore`\<`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`\>

The datastore to use

• **blockstore**: `Blockstore`\<`object`, `object`, `object`, `object`, `object`, `object`, `object`, `object`\>

The blockstore to use

#### Returns

[`BlockstoreStore`](BlockstoreStore.md)

#### Defined in

[index.ts:19](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L19)

## Methods

### \_cidOf()

> **\_cidOf**(`chain`, `index`): `Promise`\<`null` \| [`CID`](../../twine-core/classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>\>

Get cid of pulse with specified index

#### Parameters

• **chain**: `IntoCid`

The chain CID

• **index**: `number`

The index

#### Returns

`Promise`\<`null` \| [`CID`](../../twine-core/classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>\>

The CID of the pulse, or null if not found

#### Defined in

[index.ts:82](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L82)

***

### chains()

> **chains**(): `AsyncIterable`\<`Chain`, `any`, `any`\>

Get the chains that are known to the resolver

#### Returns

`AsyncIterable`\<`Chain`, `any`, `any`\>

An sync/async iterable of chains

#### Example

```js
const chains = await collect(resolver.chains())
```

#### Implementation of

`Store.chains`

#### Defined in

[index.ts:215](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L215)

***

### delete()

> **delete**(`cid`): `Promise`\<`void`\>

Delete a twine from storage

#### Parameters

• **cid**: `IntoCid`

The CID of the twine to delete

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Store.delete`

#### Defined in

[index.ts:164](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L164)

***

### fetch()

> **fetch**(`cid`): `Promise`\<`null` \| `Chain` \| `Pulse`\>

Fetch a twine by it's CID

#### Parameters

• **cid**: `IntoCid`

#### Returns

`Promise`\<`null` \| `Chain` \| `Pulse`\>

#### Implementation of

`Store.fetch`

#### Defined in

[index.ts:198](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L198)

***

### fetchIndex()

> **fetchIndex**(`chain`, `index`): `Promise`\<`null` \| `Chain` \| `Pulse`\>

fetch by index

#### Parameters

• **chain**: `IntoCid`

The chain CID

• **index**: `number`

The index

#### Returns

`Promise`\<`null` \| `Chain` \| `Pulse`\>

#### Defined in

[index.ts:131](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L131)

***

### has()

> **has**(`cid`): `Promise`\<`boolean`\>

Check if a Twine is present in the blockstore

#### Parameters

• **cid**: `IntoCid`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

`Store.has`

#### Defined in

[index.ts:250](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L250)

***

### pulses()

> **pulses**(`chain`, `start`?, `options`?): `AsyncIterable`\<`Pulse`, `any`, `any`\>

Get the pulses of a chain

#### Parameters

• **chain**: `IntoCid`

The chain CID or chain itself to get the pulses from

• **start?**: `number` \| `IntoCid`

The index or CID of the pulse to start from

• **options?**: `ResolveOptions`

Options for the resolution

#### Returns

`AsyncIterable`\<`Pulse`, `any`, `any`\>

An sync/async iterable of pulses

#### Example

```js
// loop through pulses and print indices
for await (const pulse of resolver.pulses('bafybeib3...')) {
  console.log('pulse', pulse.value.content.index)
}
```

#### Implementation of

`Store.pulses`

#### Defined in

[index.ts:225](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L225)

***

### reIndex()

> **reIndex**(`latestCid`): `Promise`\<`void`\>

Reindex a chain

#### Parameters

• **latestCid**: `IntoCid`

The CID of the latest pulse

#### Returns

`Promise`\<`void`\>

#### Defined in

[index.ts:101](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L101)

***

### resolve()

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<`PulseResolution`\>

Resolves a twine query

##### Parameters

• **query**: `IntoResolvePulseQuery`

• **options?**: `ResolveOptions`

##### Returns

`Promise`\<`PulseResolution`\>

##### Implementation of

`Store.resolve`

##### Defined in

[index.ts:270](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L270)

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<`ChainResolution`\>

Resolve a pulse (with its chain) from a query

##### Parameters

• **query**: `IntoResolveChainQuery`

• **options?**: `ResolveOptions`

##### Returns

`Promise`\<`ChainResolution`\>

##### Implementation of

`Store.resolve`

##### Defined in

[index.ts:271](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L271)

***

### resolveIndex()

> **resolveIndex**(`chain`, `index`, `options`?): `Promise`\<`PulseResolution`\>

Resolve a pulse by index

#### Parameters

• **chain**: `IntoCid`

The chain CID or chain itself to resolve the pulse from

• **index**: `number`

The index of the pulse to resolve

• **options?**: `ResolveOptions`

Options for the resolution

#### Returns

`Promise`\<`PulseResolution`\>

A pulse resolution

#### Example

```js
const resolution = await resolver.resolveIndex('bafybeib3...', 42)
if (resolution.pulse) {
  console.log('pulse', resolution.pulse)
}
```

#### Implementation of

`Store.resolveIndex`

#### Defined in

[index.ts:261](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L261)

***

### resolveLatest()

> **resolveLatest**(`chain`): `Promise`\<`PulseResolution`\>

Resolves the latest pulse for specified chain

#### Parameters

• **chain**: `IntoCid`

#### Returns

`Promise`\<`PulseResolution`\>

#### Implementation of

`Store.resolveLatest`

#### Defined in

[index.ts:282](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L282)

***

### save()

> **save**(`twine`): `Promise`\<`void`\>

Save a twine to storage

#### Parameters

• **twine**: `Twine`\<`TwineValue`\>

The twine to save

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Store.save`

#### Defined in

[index.ts:139](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L139)

***

### saveMany()

> **saveMany**(`twines`): `Promise`\<`void`\>

Save many twines to storage

#### Parameters

• **twines**: `AnyIterable`\<`Twine`\<`TwineValue`\>\>

The twines to save

#### Returns

`Promise`\<`void`\>

#### Implementation of

`Store.saveMany`

#### Defined in

[index.ts:158](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-blockstore-store/src/index.ts#L158)
