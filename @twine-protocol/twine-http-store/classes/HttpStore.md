[**@twine-protocol/twine-http-store v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-http-store](../index.md) / HttpStore

# Class: HttpStore

An HTTP client that implements Store

## Implements

- `Store`

## Constructors

### new HttpStore()

> **new HttpStore**(`baseUrl`, `fetcherOptions`?): [`HttpStore`](HttpStore.md)

Create a new HTTP store

#### Parameters

• **baseUrl**: `string`

The base URL of the store

• **fetcherOptions?**: `FetcherOptions` & [`HttpStoreOptions`](../type-aliases/HttpStoreOptions.md)

Options for the fetcher

#### Returns

[`HttpStore`](HttpStore.md)

#### Defined in

[index.ts:188](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L188)

## Methods

### fetchChain()

> **fetchChain**(`chainCid`): `Promise`\<`null` \| `Chain`\>

Fetch a chain by CID without validation

#### Parameters

• **chainCid**: `IntoCid`

#### Returns

`Promise`\<`null` \| `Chain`\>

#### Defined in

[index.ts:219](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L219)

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

[index.ts:228](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L228)

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

[index.ts:236](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L236)

***

### fetch()

> **fetch**(`cid`): `Promise`\<`null` \| `Twine`\<`TwineValue`\>\>

Fetch a twine from storage, returning null if it is not found

it is NOT expected that the twine signature is checked,
that is for the Resolver to do.

#### Parameters

• **cid**: `IntoCid`

The CID of the twine to fetch

#### Returns

`Promise`\<`null` \| `Twine`\<`TwineValue`\>\>

#### Implementation of

`Store.fetch`

#### Defined in

[index.ts:294](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L294)

***

### has()

> **has**(`cid`): `Promise`\<`boolean`\>

Check if a cid can be resolved

#### Parameters

• **cid**: `IntoCid`

The CID to check

#### Returns

`Promise`\<`boolean`\>

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

#### Implementation of

`Store.has`

#### Defined in

[index.ts:303](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L303)

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

[index.ts:309](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L309)

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

[index.ts:313](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L313)

***

### resolve()

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<`ChainResolution`\>

Resolve a chain from a query

This is the main way to get a pulse or chain from somewhere
and have it automatically verified.

If the input is already a successful resolution, it will
be returned as is.

If the input is a chain or pulse, it will be resolved as
a chain or pulse resolution.

##### Parameters

• **query**: `IntoResolveChainQuery`

The query to resolve

• **options?**: `ResolveOptions`

Options for the resolution

##### Returns

`Promise`\<`ChainResolution`\>

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

`Store.resolve`

##### Defined in

[index.ts:327](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L327)

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<`PulseResolution`\>

Resolve a pulse (with its chain) from a query

##### Parameters

• **query**: `IntoResolvePulseQuery`

• **options?**: `ResolveOptions`

##### Returns

`Promise`\<`PulseResolution`\>

##### Implementation of

`Store.resolve`

##### Defined in

[index.ts:328](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L328)

***

### resolveLatest()

> **resolveLatest**(`chain`, `options`?): `Promise`\<`PulseResolution`\>

Resolve the latest pulse of a chain

#### Parameters

• **chain**: `IntoCid`

The chain CID or chain itself to resolve the latest pulse from

• **options?**: `ResolveOptions`

Options for the resolution

#### Returns

`Promise`\<`PulseResolution`\>

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

#### Implementation of

`Store.resolveLatest`

#### Defined in

[index.ts:342](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L342)

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

[index.ts:353](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L353)

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

[index.ts:394](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-http-store/src/index.ts#L394)
