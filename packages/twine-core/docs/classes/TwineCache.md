[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / TwineCache

# Class: TwineCache

A store that caches twines in memory

## Hierarchy

- [`MemoryStore`](MemoryStore.md)

  ↳ **`TwineCache`**

## Table of contents

### Constructors

- [constructor](TwineCache.md#constructor)

### Properties

- [chainStorageMeta](TwineCache.md#chainstoragemeta)
- [chainStore](TwineCache.md#chainstore)
- [maxSize](TwineCache.md#maxsize)
- [pulseStore](TwineCache.md#pulsestore)

### Methods

- [add](TwineCache.md#add)
- [chains](TwineCache.md#chains)
- [delete](TwineCache.md#delete)
- [fetch](TwineCache.md#fetch)
- [get](TwineCache.md#get)
- [has](TwineCache.md#has)
- [pulses](TwineCache.md#pulses)
- [resolve](TwineCache.md#resolve)
- [resolveIndex](TwineCache.md#resolveindex)
- [resolveLatest](TwineCache.md#resolvelatest)
- [save](TwineCache.md#save)
- [saveMany](TwineCache.md#savemany)
- [setMaxSize](TwineCache.md#setmaxsize)

## Constructors

### constructor

• **new TwineCache**(`maxSize?`): [`TwineCache`](TwineCache.md)

Create a new twine cache

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `maxSize` | `number` | `10000` | The maximum number of twines to keep in memory (default 10000) |

#### Returns

[`TwineCache`](TwineCache.md)

#### Overrides

[MemoryStore](MemoryStore.md).[constructor](MemoryStore.md#constructor)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:287](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L287)

## Properties

### chainStorageMeta

• `Protected` **chainStorageMeta**: `Map`\<`string`, [`ChainStorageMeta`](../modules.md#chainstoragemeta)\>

Chain storage metadata

#### Inherited from

[MemoryStore](MemoryStore.md).[chainStorageMeta](MemoryStore.md#chainstoragemeta)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:40](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L40)

___

### chainStore

• `Protected` **chainStore**: `Map`\<`string`, [`Chain`](../modules.md#chain)\>

Chains are stored in a map with the CID as the key

#### Inherited from

[MemoryStore](MemoryStore.md).[chainStore](MemoryStore.md#chainstore)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:36](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L36)

___

### maxSize

• `Protected` **maxSize**: `number`

The maximum number of twines to keep in memory

#### Inherited from

[MemoryStore](MemoryStore.md).[maxSize](MemoryStore.md#maxsize)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:48](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L48)

___

### pulseStore

• `Protected` **pulseStore**: [`CacheMap`](CacheMap.md)\<`string`, [`Pulse`](../modules.md#pulse)\>

Pulses are stored in a map with the CID as the key

#### Inherited from

[MemoryStore](MemoryStore.md).[pulseStore](MemoryStore.md#pulsestore)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:44](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L44)

## Methods

### add

▸ **add**(`twine`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `twine` | [`Twine`](Twine.md)\<`any`\> |

#### Returns

`void`

**`Deprecated`**

#### Defined in

[packages/twine-core/src/store/memory-store.ts:303](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L303)

___

### chains

▸ **chains**(): `IterableIterator`\<[`Chain`](../modules.md#chain)\>

Get an iterator of all the chains in the store

#### Returns

`IterableIterator`\<[`Chain`](../modules.md#chain)\>

#### Inherited from

[MemoryStore](MemoryStore.md).[chains](MemoryStore.md#chains)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[delete](MemoryStore.md#delete)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[fetch](MemoryStore.md#fetch)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:80](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L80)

___

### get

▸ **get**(`cid`): ``null`` \| [`Chain`](../modules.md#chain) \| [`Pulse`](../modules.md#pulse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | [`IntoCid`](../modules.md#intocid) |

#### Returns

``null`` \| [`Chain`](../modules.md#chain) \| [`Pulse`](../modules.md#pulse)

**`Deprecated`**

#### Defined in

[packages/twine-core/src/store/memory-store.ts:294](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L294)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[has](MemoryStore.md#has)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[pulses](MemoryStore.md#pulses)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[resolve](MemoryStore.md#resolve)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[resolve](MemoryStore.md#resolve)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[resolveIndex](MemoryStore.md#resolveindex)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[resolveLatest](MemoryStore.md#resolvelatest)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[save](MemoryStore.md#save)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[saveMany](MemoryStore.md#savemany)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[saveMany](MemoryStore.md#savemany)

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

#### Inherited from

[MemoryStore](MemoryStore.md).[setMaxSize](MemoryStore.md#setmaxsize)

#### Defined in

[packages/twine-core/src/store/memory-store.ts:69](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L69)
