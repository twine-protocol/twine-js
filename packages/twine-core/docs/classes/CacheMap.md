[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / CacheMap

# Class: CacheMap\<K, V\>

A map that caches the most recently accessed items

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`\<`K`, `V`\>

  ↳ **`CacheMap`**

## Table of contents

### Constructors

- [constructor](CacheMap.md#constructor)

### Properties

- [[toStringTag]](CacheMap.md#[tostringtag])
- [size](CacheMap.md#size)
- [[species]](CacheMap.md#[species])

### Methods

- [[iterator]](CacheMap.md#[iterator])
- [clear](CacheMap.md#clear)
- [delete](CacheMap.md#delete)
- [entries](CacheMap.md#entries)
- [forEach](CacheMap.md#foreach)
- [get](CacheMap.md#get)
- [has](CacheMap.md#has)
- [keys](CacheMap.md#keys)
- [set](CacheMap.md#set)
- [setMaxSize](CacheMap.md#setmaxsize)
- [values](CacheMap.md#values)

## Constructors

### constructor

• **new CacheMap**\<`K`, `V`\>(`iterable?`, `options?`): [`CacheMap`](CacheMap.md)\<`K`, `V`\>

Create a new cache map

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable?` | `Iterable`\<[`K`, `V`]\> | An iterable of key-value pairs |
| `options?` | [`CacheOptions`](../modules.md#cacheoptions) | Options for the cache |

#### Returns

[`CacheMap`](CacheMap.md)\<`K`, `V`\>

#### Overrides

Map\&lt;K, V\&gt;.constructor

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:29](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/cache-helpers.ts#L29)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.[toStringTag]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:46

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.[species]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

#### Inherited from

Map.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:119

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:21

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

Map.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### entries

▸ **entries**(): `IterableIterator`\<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:124

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`\<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:29

___

### get

▸ **get**(`key`): `undefined` \| `V`

See [Map.get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Overrides

Map.get

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:65](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/cache-helpers.ts#L65)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

Map.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:38

___

### keys

▸ **keys**(): `IterableIterator`\<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`K`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:129

___

### set

▸ **set**(`key`, `value`): [`CacheMap`](CacheMap.md)\<`K`, `V`\>

See [Map.set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`CacheMap`](CacheMap.md)\<`K`, `V`\>

#### Overrides

Map.set

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:56](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/cache-helpers.ts#L56)

___

### setMaxSize

▸ **setMaxSize**(`maxSize`): `void`

Set the maximum number of items to keep in the cache

If the cache is already larger than the new max size, the oldest items will be removed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSize` | `number` |

#### Returns

`void`

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:39](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/cache-helpers.ts#L39)

___

### values

▸ **values**(): `IterableIterator`\<`V`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`V`\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:134
