[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / MemoryStore

# Class: MemoryStore

A store that keeps twines in memory

This store is the base for the [TwineCache](TwineCache.md).

## Hierarchy

- **`MemoryStore`**

  ↳ [`TwineCache`](TwineCache.md)

## Implements

- [`Store`](../interfaces/Store.md)

## Table of contents

### Constructors

- [constructor](MemoryStore.md#constructor)

### Properties

- [chainStorageMeta](MemoryStore.md#chainstoragemeta)
- [chainStore](MemoryStore.md#chainstore)
- [maxSize](MemoryStore.md#maxsize)
- [pulseStore](MemoryStore.md#pulsestore)

### Methods

- [chains](MemoryStore.md#chains)
- [delete](MemoryStore.md#delete)
- [fetch](MemoryStore.md#fetch)
- [has](MemoryStore.md#has)
- [pulses](MemoryStore.md#pulses)
- [resolve](MemoryStore.md#resolve)
- [resolveIndex](MemoryStore.md#resolveindex)
- [resolveLatest](MemoryStore.md#resolvelatest)
- [save](MemoryStore.md#save)
- [saveMany](MemoryStore.md#savemany)
- [setMaxSize](MemoryStore.md#setmaxsize)

## Constructors

### constructor

• **new MemoryStore**(`maxSize?`): [`MemoryStore`](MemoryStore.md)

Create a new memory store

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `maxSize` | `number` | `0` | The maximum number of twines to keep in memory (default infinite) |

#### Returns

[`MemoryStore`](MemoryStore.md)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:59](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L59)

## Properties

### chainStorageMeta

• `Protected` **chainStorageMeta**: `Map`\<`string`, [`ChainStorageMeta`](../modules.md#chainstoragemeta)\>

Chain storage metadata

#### Defined in

[packages/twine-core/src/store/memory-store.ts:40](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L40)

___

### chainStore

• `Protected` **chainStore**: `Map`\<`string`, [`Chain`](../modules.md#chain)\>

Chains are stored in a map with the CID as the key

#### Defined in

[packages/twine-core/src/store/memory-store.ts:36](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L36)

___

### maxSize

• `Protected` **maxSize**: `number`

The maximum number of twines to keep in memory

#### Defined in

[packages/twine-core/src/store/memory-store.ts:48](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L48)

___

### pulseStore

• `Protected` **pulseStore**: [`CacheMap`](CacheMap.md)\<`string`, [`Pulse`](../modules.md#pulse)\>

Pulses are stored in a map with the CID as the key

#### Defined in

[packages/twine-core/src/store/memory-store.ts:44](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L44)

## Methods

### chains

▸ **chains**(): `IterableIterator`\<[`Chain`](../modules.md#chain)\>

Get an iterator of all the chains in the store

#### Returns

`IterableIterator`\<[`Chain`](../modules.md#chain)\>

#### Implementation of

[Store](../interfaces/Store.md).[chains](../interfaces/Store.md#chains)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:180](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L180)

___

### delete

▸ **delete**(`cid`): `void`

Delete a twine from storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | [`IntoCid`](../modules.md#intocid) |

#### Returns

`void`

#### Implementation of

[Store](../interfaces/Store.md).[delete](../interfaces/Store.md#delete)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:104](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L104)

___

### fetch

▸ **fetch**(`cid`): ``null`` \| [`Chain`](../modules.md#chain) \| [`Pulse`](../modules.md#pulse)

Fetch a twine from storage, returning null if it is not found

it is NOT expected that the twine signature is checked,
that is for the [Resolver](../interfaces/Resolver.md) to do.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | [`IntoCid`](../modules.md#intocid) |

#### Returns

``null`` \| [`Chain`](../modules.md#chain) \| [`Pulse`](../modules.md#pulse)

#### Implementation of

[Store](../interfaces/Store.md).[fetch](../interfaces/Store.md#fetch)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:80](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L80)

___

### has

▸ **has**(`cid`): `boolean`

Check if a cid can be resolved

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cid` | [`IntoCid`](../modules.md#intocid) | The CID to check |

#### Returns

`boolean`

True if the CID can be resolved, false otherwise

#### Implementation of

[Store](../interfaces/Store.md).[has](../interfaces/Store.md#has)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:96](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L96)

___

### pulses

▸ **pulses**(`chainCid`, `start?`, `options?`): `AsyncGenerator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\>

Get an async iterator of all the pulses in a chain

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainCid` | [`IntoCid`](../modules.md#intocid) |
| `start?` | `number` \| [`IntoCid`](../modules.md#intocid) |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) |

#### Returns

`AsyncGenerator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\>

#### Implementation of

[Store](../interfaces/Store.md).[pulses](../interfaces/Store.md#pulses)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:187](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L187)

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

#### Implementation of

[Store](../interfaces/Store.md).[resolve](../interfaces/Store.md#resolve)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:214](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L214)

▸ **resolve**(`query`, `options?`): `Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

Resolve a pulse (with its chain) from a query

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`IntoResolvePulseQuery`](../modules.md#intoresolvepulsequery) |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) |

#### Returns

`Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

#### Implementation of

[Store](../interfaces/Store.md).[resolve](../interfaces/Store.md#resolve)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:215](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L215)

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

#### Implementation of

[Store](../interfaces/Store.md).[resolveIndex](../interfaces/Store.md#resolveindex)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:245](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L245)

___

### resolveLatest

▸ **resolveLatest**(`chainCid`, `options?`): `Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

Resolve the latest pulse of a chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainCid` | [`IntoCid`](../modules.md#intocid) | The chain CID or chain itself to resolve the latest pulse from |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) | Options for the resolution |

#### Returns

`Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

A pulse resolution

#### Implementation of

[Store](../interfaces/Store.md).[resolveLatest](../interfaces/Store.md#resolvelatest)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:229](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L229)

___

### save

▸ **save**(`twine`): `void`

Save a twine to storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `twine` | [`Twine`](Twine.md)\<`any`\> |

#### Returns

`void`

#### Implementation of

[Store](../interfaces/Store.md).[save](../interfaces/Store.md#save)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:146](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L146)

___

### saveMany

▸ **saveMany**(`twines`): `Promise`\<`void`\>

Save many twines to storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `twines` | `AsyncIterable`\<[`Twine`](Twine.md)\<[`TwineValue`](../modules.md#twinevalue)\>\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Store](../interfaces/Store.md).[saveMany](../interfaces/Store.md#savemany)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:158](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L158)

▸ **saveMany**(`twines`): `void`

Save many twines to storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `twines` | `Iterable`\<[`Twine`](Twine.md)\<[`TwineValue`](../modules.md#twinevalue)\>\> |

#### Returns

`void`

#### Implementation of

Store.saveMany

#### Defined in

[packages/twine-core/src/store/memory-store.ts:159](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L159)

___

### setMaxSize

▸ **setMaxSize**(`maxSize`): `void`

Set the maximum number of twines to keep in memory

If the store is already larger than the new max size, the oldest twines will be removed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSize` | `number` |

#### Returns

`void`

#### Defined in

[packages/twine-core/src/store/memory-store.ts:69](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L69)
