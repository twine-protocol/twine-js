[**@twine-protocol/twine-blockstore-store v0.0.3**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-blockstore-store](../index.md) / BlockstoreStore

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

[index.ts:25](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L25)

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

[index.ts:88](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L88)

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

[index.ts:107](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L107)

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

[index.ts:137](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L137)

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

[index.ts:145](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L145)

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

[index.ts:164](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L164)

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

[index.ts:170](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L170)

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

[index.ts:204](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L204)

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

[index.ts:221](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L221)

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

[index.ts:231](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L231)

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

[index.ts:256](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L256)

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

[index.ts:267](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L267)

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

[index.ts:276](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L276)

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

[index.ts:277](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L277)

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

[index.ts:288](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-blockstore-store/src/index.ts#L288)
