[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / CacheMap

# Class: CacheMap\<K, V\>

A map that caches the most recently accessed items

## Extends

- `Map`\<`K`, `V`\>

## Type Parameters

• **K**

• **V**

## Constructors

### new CacheMap()

> **new CacheMap**\<`K`, `V`\>(`iterable`?, `options`?): [`CacheMap`](CacheMap.md)\<`K`, `V`\>

Create a new cache map

#### Parameters

• **iterable?**: `Iterable`\<[`K`, `V`], `any`, `any`\>

An iterable of key-value pairs

• **options?**: [`CacheOptions`](../type-aliases/CacheOptions.md)

Options for the cache

#### Returns

[`CacheMap`](CacheMap.md)\<`K`, `V`\>

#### Overrides

`Map<K, V>.constructor`

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:29](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/cache-helpers.ts#L29)

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

#### Inherited from

`Map.[toStringTag]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

***

### size

> `readonly` **size**: `number`

#### Returns

the number of elements in the Map.

#### Inherited from

`Map.size`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:45

***

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

#### Inherited from

`Map.[species]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

## Methods

### \[iterator\]()

> **\[iterator\]**(): `MapIterator`\<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.[iterator]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:143

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

• **key**: `K`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

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

### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

• **callbackfn**

• **thisArg?**: `any`

#### Returns

`void`

#### Inherited from

`Map.forEach`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

***

### get()

> **get**(`key`): `undefined` \| `V`

See [Map.get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)

#### Parameters

• **key**: `K`

#### Returns

`undefined` \| `V`

#### Overrides

`Map.get`

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:65](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/cache-helpers.ts#L65)

***

### has()

> **has**(`key`): `boolean`

#### Parameters

• **key**: `K`

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

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

### set()

> **set**(`key`, `value`): [`CacheMap`](CacheMap.md)\<`K`, `V`\>

See [Map.set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)

#### Parameters

• **key**: `K`

• **value**: `V`

#### Returns

[`CacheMap`](CacheMap.md)\<`K`, `V`\>

#### Overrides

`Map.set`

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:56](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/cache-helpers.ts#L56)

***

### setMaxSize()

> **setMaxSize**(`maxSize`): `void`

Set the maximum number of items to keep in the cache

If the cache is already larger than the new max size, the oldest items will be removed.

#### Parameters

• **maxSize**: `number`

#### Returns

`void`

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:39](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/store/cache-helpers.ts#L39)

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

### groupBy()

> `static` **groupBy**\<`K`, `T`\>(`items`, `keySelector`): `Map`\<`K`, `T`[]\>

Groups members of an iterable according to the return value of the passed callback.

#### Type Parameters

• **K**

• **T**

#### Parameters

• **items**: `Iterable`\<`T`, `any`, `any`\>

An iterable.

• **keySelector**

A callback which will be invoked for each item in items.

#### Returns

`Map`\<`K`, `T`[]\>

#### Inherited from

`Map.groupBy`

#### Defined in

node\_modules/typescript/lib/lib.esnext.collection.d.ts:25
