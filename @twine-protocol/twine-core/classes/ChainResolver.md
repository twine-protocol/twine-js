[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / ChainResolver

# Class: ChainResolver

A helper to restrict the resolution to a specific chain

## Extends

- [`Twine`](Twine.md)\<[`ChainValue`](../type-aliases/ChainValue.md)\>

## Constructors

### new ChainResolver()

> **new ChainResolver**(`resolver`, `chain`): [`ChainResolver`](ChainResolver.md)

Create a new ChainResolver

#### Parameters

• **resolver**: [`Resolver`](../interfaces/Resolver.md)

The resolver to use

• **chain**: [`Chain`](../type-aliases/Chain.md)

The chain to use

#### Returns

[`ChainResolver`](ChainResolver.md)

A ChainResolver

#### Overrides

[`Twine`](Twine.md).[`constructor`](Twine.md#constructors)

#### Defined in

[packages/twine-core/src/resolver/chain-resolver.ts:36](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/chain-resolver.ts#L36)

## Properties

### isTwineInstance

> **isTwineInstance**: `boolean` = `true`

is a twine instance (true)

#### Inherited from

[`Twine`](Twine.md).[`isTwineInstance`](Twine.md#istwineinstance)

#### Defined in

[packages/twine-core/src/twine.ts:24](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L24)

***

### isChain

> **isChain**: `boolean`

is this a chain

#### Inherited from

[`Twine`](Twine.md).[`isChain`](Twine.md#ischain)

#### Defined in

[packages/twine-core/src/twine.ts:26](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L26)

***

### chainCid

> **chainCid**: [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\>

chain CID (either this CID or the pulse's chain CID)

#### Inherited from

[`Twine`](Twine.md).[`chainCid`](Twine.md#chaincid)

#### Defined in

[packages/twine-core/src/twine.ts:28](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L28)

***

### cid

> `readonly` **cid**: [`CID`](CID.md)\<[`ChainValue`](../type-aliases/ChainValue.md), `number`, `number`, `Version`\>

#### Inherited from

[`Twine`](Twine.md).[`cid`](Twine.md#cid)

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:10

***

### bytes

> `readonly` **bytes**: `ByteView`\<[`ChainValue`](../type-aliases/ChainValue.md)\>

#### Inherited from

[`Twine`](Twine.md).[`bytes`](Twine.md#bytes)

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:11

***

### value

> `readonly` **value**: [`ChainValue`](../type-aliases/ChainValue.md)

#### Inherited from

[`Twine`](Twine.md).[`value`](Twine.md#value)

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:12

***

### asBlock

> `readonly` **asBlock**: [`ChainResolver`](ChainResolver.md)

#### Inherited from

[`Twine`](Twine.md).[`asBlock`](Twine.md#asblock)

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:13

## Accessors

### isPulse

#### Get Signature

> **get** **isPulse**(): `boolean`

Is this a pulse

##### Returns

`boolean`

#### Inherited from

[`Twine`](Twine.md).[`isPulse`](Twine.md#ispulse)

#### Defined in

[packages/twine-core/src/twine.ts:82](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L82)

## Methods

### create()

> `static` **create**(`resolver`, `chainCid`): `Promise`\<[`ChainResolver`](ChainResolver.md)\>

Create a new ChainResolver

#### Parameters

• **resolver**: [`Resolver`](../interfaces/Resolver.md)

The resolver to use

• **chainCid**: [`IntoCid`](../type-aliases/IntoCid.md)

The chain or chain CID to use

#### Returns

`Promise`\<[`ChainResolver`](ChainResolver.md)\>

A ChainResolver

#### Defined in

[packages/twine-core/src/resolver/chain-resolver.ts:20](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/chain-resolver.ts#L20)

***

### isTwine()

> `static` **isTwine**(`thing`): thing is Chain \| Pulse

Check if a value is a twine

#### Parameters

• **thing**: `any`

#### Returns

thing is Chain \| Pulse

#### Inherited from

[`Twine`](Twine.md).[`isTwine`](Twine.md#istwine)

#### Defined in

[packages/twine-core/src/twine.ts:31](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L31)

***

### pulse()

> **pulse**(`ref`): `Promise`\<`null` \| [`Pulse`](../type-aliases/Pulse.md)\>

Resolve a pulse in the chain

#### Parameters

• **ref**: `number` \| [`IntoCid`](../type-aliases/IntoCid.md)

The pulse or pulse CID to resolve

#### Returns

`Promise`\<`null` \| [`Pulse`](../type-aliases/Pulse.md)\>

The resolved pulse

#### Defined in

[packages/twine-core/src/resolver/chain-resolver.ts:47](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/chain-resolver.ts#L47)

***

### pulses()

> **pulses**(`start`?): `AsyncGenerator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| `Generator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| [`AnyIterable`](../type-aliases/AnyIterable.md)\<[`Pulse`](../type-aliases/Pulse.md)\>

Async iterator for the pulses in the chain

#### Parameters

• **start?**: `number` \| [`IntoCid`](../type-aliases/IntoCid.md)

The index or CID of the pulse to start from

#### Returns

`AsyncGenerator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| `Generator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| [`AnyIterable`](../type-aliases/AnyIterable.md)\<[`Pulse`](../type-aliases/Pulse.md)\>

#### Defined in

[packages/twine-core/src/resolver/chain-resolver.ts:62](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/chain-resolver.ts#L62)

***

### latest()

> **latest**(): `Promise`\<`null` \| [`Pulse`](../type-aliases/Pulse.md)\>

Latest pulse in the chain

#### Returns

`Promise`\<`null` \| [`Pulse`](../type-aliases/Pulse.md)\>

#### Defined in

[packages/twine-core/src/resolver/chain-resolver.ts:69](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/chain-resolver.ts#L69)

***

### toJSON()

> **toJSON**(): `any`

Get the twine data as a DAG-JSON object

#### Returns

`any`

#### Inherited from

[`Twine`](Twine.md).[`toJSON`](Twine.md#tojson)

#### Defined in

[packages/twine-core/src/twine.ts:89](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L89)

***

### getContentDigest()

> **getContentDigest**(): `Promise`\<`MultihashDigest`\<`number`\>\>

Get the twine content field hash digest

#### Returns

`Promise`\<`MultihashDigest`\<`number`\>\>

#### Inherited from

[`Twine`](Twine.md).[`getContentDigest`](Twine.md#getcontentdigest)

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

#### Inherited from

[`Twine`](Twine.md).[`verifySignature`](Twine.md#verifysignature)

#### Defined in

[packages/twine-core/src/twine.ts:113](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/twine.ts#L113)

***

### links()

> **links**(): `Iterable`\<[`string`, [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\>], `any`, `any`\>

#### Returns

`Iterable`\<[`string`, [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\>], `any`, `any`\>

#### Inherited from

[`Twine`](Twine.md).[`links`](Twine.md#links)

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:19

***

### tree()

> **tree**(): `Iterable`\<`string`, `any`, `any`\>

#### Returns

`Iterable`\<`string`, `any`, `any`\>

#### Inherited from

[`Twine`](Twine.md).[`tree`](Twine.md#tree)

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

[`Twine`](Twine.md).[`get`](Twine.md#get)

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:21
