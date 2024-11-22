[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / CacheMap

# Class: CacheMap\<K, V\>

A map that caches the most recently accessed items

## Extends

- `Map`\<`K`, `V`\>

## Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `V` |

## Constructors

### new CacheMap()

> **new CacheMap**\<`K`, `V`\>(`iterable`?, `options`?): [`CacheMap`](CacheMap.md)\<`K`, `V`\>

Create a new cache map

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `iterable`? | `Iterable`\<[`K`, `V`], `any`, `any`\> | An iterable of key-value pairs |
| `options`? | [`CacheOptions`](../type-aliases/CacheOptions.md) | Options for the cache |

#### Returns

[`CacheMap`](CacheMap.md)\<`K`, `V`\>

#### Overrides

`Map<K, V>.constructor`

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:30](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/cache-helpers.ts#L30)

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `[species]` | `readonly` | `MapConstructor` | - | `Map.[species]` | node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319 |
| `size` | `readonly` | `number` |  | `Map.size` | node\_modules/typescript/lib/lib.es2015.collection.d.ts:45 |
| `[toStringTag]` | `readonly` | `string` | - | `Map.[toStringTag]` | node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137 |

## Methods

### groupBy()

> `static` **groupBy**\<`K`, `T`\>(`items`, `keySelector`): `Map`\<`K`, `T`[]\>

Groups members of an iterable according to the return value of the passed callback.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `items` | `Iterable`\<`T`, `any`, `any`\> | An iterable. |
| `keySelector` | (`item`, `index`) => `K` | A callback which will be invoked for each item in items. |

#### Returns

`Map`\<`K`, `T`[]\>

#### Inherited from

`Map.groupBy`

#### Defined in

node\_modules/typescript/lib/lib.esnext.collection.d.ts:25

***

### setMaxSize()

> **setMaxSize**(`maxSize`): `void`

Set the maximum number of items to keep in the cache

If the cache is already larger than the new max size, the oldest items will be removed.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `maxSize` | `number` |

#### Returns

`void`

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:40](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/cache-helpers.ts#L40)

***

### set()

> **set**(`key`, `value`): [`CacheMap`](CacheMap.md)\<`K`, `V`\>

See [Map.set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`CacheMap`](CacheMap.md)\<`K`, `V`\>

#### Overrides

`Map.set`

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:57](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/cache-helpers.ts#L57)

***

### get()

> **get**(`key`): `undefined` \| `V`

See [Map.get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Overrides

`Map.get`

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:66](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/store/cache-helpers.ts#L66)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Inherited from

`Map.clear`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

***

### delete()

> **delete**(`key`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

***

### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callbackfn` | (`value`, `key`, `map`) => `void` |
| `thisArg`? | `any` |

#### Returns

`void`

#### Inherited from

`Map.forEach`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

***

### has()

> **has**(`key`): `boolean`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

***

### entries()

> **entries**(): `MapIterator`\<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.entries`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:148

***

### keys()

> **keys**(): `MapIterator`\<`K`\>

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`K`\>

#### Inherited from

`Map.keys`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:153

***

### values()

> **values**(): `MapIterator`\<`V`\>

Returns an iterable of values in the map

#### Returns

`MapIterator`\<`V`\>

#### Inherited from

`Map.values`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:158

***

### \[iterator\]()

> **\[iterator\]**(): `MapIterator`\<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.[iterator]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:143
