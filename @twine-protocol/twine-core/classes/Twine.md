[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / Twine

# Class: Twine\<T\>

Generic class for twine data

## Extends

- `Block`\<`T`, `number`, `number`, `Version`\>

## Extended by

- [`ChainResolver`](ChainResolver.md)

## Type Parameters

• **T** *extends* [`ChainValue`](../type-aliases/ChainValue.md) \| [`PulseValue`](../type-aliases/PulseValue.md)

## Constructors

### new Twine()

> **new Twine**\<`T`\>(`__namedParameters`): [`Twine`](Twine.md)\<`T`\>

Create a new twine instance

This class extends the Block class from multiformats/block. So
anything that reads or writes blocks can be used with this class.
A twine can be created from a multi-format block too.

But generally you'll want to use the [fromBytes](../functions/fromBytes.md) or [fromJSON](../functions/fromJSON.md)
functions to decode a twine instance. Or use the
[twine-builder](https://github.com/twine-protocol/twine-js/tree/master/packages/twine-builder)
package to create a twine instance.

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.cid**: [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\>

• **\_\_namedParameters.bytes**: `Uint8Array`

• **\_\_namedParameters.value**: `T`

#### Returns

[`Twine`](Twine.md)\<`T`\>

#### Overrides

`Block.Block<T, number, number, Version>.constructor`

#### Defined in

[packages/twine-core/src/twine.ts:47](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L47)

## Properties

### isTwineInstance

> **isTwineInstance**: `boolean` = `true`

is a twine instance (true)

#### Defined in

[packages/twine-core/src/twine.ts:24](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L24)

***

### isChain

> **isChain**: `boolean`

is this a chain

#### Defined in

[packages/twine-core/src/twine.ts:26](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L26)

***

### chainCid

> **chainCid**: [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\>

chain CID (either this CID or the pulse's chain CID)

#### Defined in

[packages/twine-core/src/twine.ts:28](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L28)

***

### cid

> `readonly` **cid**: [`CID`](CID.md)\<`T`, `number`, `number`, `Version`\>

#### Inherited from

`Block.Block.cid`

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:10

***

### bytes

> `readonly` **bytes**: `ByteView`\<`T`\>

#### Inherited from

`Block.Block.bytes`

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:11

***

### value

> `readonly` **value**: `T`

#### Inherited from

`Block.Block.value`

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:12

***

### asBlock

> `readonly` **asBlock**: [`Twine`](Twine.md)\<`T`\>

#### Inherited from

`Block.Block.asBlock`

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:13

## Accessors

### isPulse

#### Get Signature

> **get** **isPulse**(): `boolean`

Is this a pulse

##### Returns

`boolean`

#### Defined in

[packages/twine-core/src/twine.ts:82](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L82)

## Methods

### isTwine()

> `static` **isTwine**(`thing`): thing is Chain \| Pulse

Check if a value is a twine

#### Parameters

• **thing**: `any`

#### Returns

thing is Chain \| Pulse

#### Defined in

[packages/twine-core/src/twine.ts:31](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L31)

***

### toJSON()

> **toJSON**(): `any`

Get the twine data as a DAG-JSON object

#### Returns

`any`

#### Defined in

[packages/twine-core/src/twine.ts:89](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L89)

***

### getContentDigest()

> **getContentDigest**(): `Promise`\<`MultihashDigest`\<`number`\>\>

Get the twine content field hash digest

#### Returns

`Promise`\<`MultihashDigest`\<`number`\>\>

#### Defined in

[packages/twine-core/src/twine.ts:101](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L101)

***

### verifySignature()

> **verifySignature**(`chain`?): `Promise`\<`boolean`\>

Verify the signature of this twine instance

If this is a chain, no chain instance is required. If this is a pulse,
a chain instance must be provided.

#### Parameters

• **chain?**: [`Chain`](../type-aliases/Chain.md)\<[`AnyMap`](../type-aliases/AnyMap.md)\>

Chain instance to use for verification

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/twine-core/src/twine.ts:113](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L113)

***

### links()

> **links**(): `Iterable`\<[`string`, [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\>], `any`, `any`\>

#### Returns

`Iterable`\<[`string`, [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\>], `any`, `any`\>

#### Inherited from

`Block.Block.links`

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:19

***

### tree()

> **tree**(): `Iterable`\<`string`, `any`, `any`\>

#### Returns

`Iterable`\<`string`, `any`, `any`\>

#### Inherited from

`Block.Block.tree`

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:20

***

### get()

> **get**(`path`?): `BlockCursorView`\<`unknown`\>

#### Parameters

• **path?**: `string`

#### Returns

`BlockCursorView`\<`unknown`\>

#### Inherited from

`Block.Block.get`

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:21
