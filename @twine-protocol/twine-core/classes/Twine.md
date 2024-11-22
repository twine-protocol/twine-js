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

| Type Parameter |
| ------ |
| `T` *extends* [`ChainValue`](../type-aliases/ChainValue.md) \| [`PulseValue`](../type-aliases/PulseValue.md) |

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

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.cid` | [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\> |
| `__namedParameters.bytes` | `Uint8Array` |
| `__namedParameters.value` | `T` |

#### Returns

[`Twine`](Twine.md)\<`T`\>

#### Overrides

`Block.Block<T, number, number, Version>.constructor`

#### Defined in

[packages/twine-core/src/twine.ts:47](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/twine.ts#L47)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `isTwineInstance` | `public` | `boolean` | `true` | is a twine instance (true) | - | [packages/twine-core/src/twine.ts:24](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/twine.ts#L24) |
| `isChain` | `public` | `boolean` | `undefined` | is this a chain | - | [packages/twine-core/src/twine.ts:26](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/twine.ts#L26) |
| `chainCid` | `public` | [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\> | `undefined` | chain CID (either this CID or the pulse's chain CID) | - | [packages/twine-core/src/twine.ts:28](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/twine.ts#L28) |
| `cid` | `readonly` | [`CID`](CID.md)\<`T`, `number`, `number`, `Version`\> | `undefined` | - | `Block.Block.cid` | node\_modules/multiformats/dist/src/block.d.ts:10 |
| `bytes` | `readonly` | `ByteView`\<`T`\> | `undefined` | - | `Block.Block.bytes` | node\_modules/multiformats/dist/src/block.d.ts:11 |
| `value` | `readonly` | `T` | `undefined` | - | `Block.Block.value` | node\_modules/multiformats/dist/src/block.d.ts:12 |
| `asBlock` | `readonly` | [`Twine`](Twine.md)\<`T`\> | `undefined` | - | `Block.Block.asBlock` | node\_modules/multiformats/dist/src/block.d.ts:13 |

## Accessors

### isPulse

#### Get Signature

> **get** **isPulse**(): `boolean`

Is this a pulse

##### Returns

`boolean`

#### Defined in

[packages/twine-core/src/twine.ts:82](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/twine.ts#L82)

## Methods

### isTwine()

> `static` **isTwine**(`thing`): thing is Chain \| Pulse

Check if a value is a twine

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `thing` | `any` |

#### Returns

thing is Chain \| Pulse

#### Defined in

[packages/twine-core/src/twine.ts:31](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/twine.ts#L31)

***

### toJSON()

> **toJSON**(): `any`

Get the twine data as a DAG-JSON object

#### Returns

`any`

#### Defined in

[packages/twine-core/src/twine.ts:89](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/twine.ts#L89)

***

### getContentDigest()

> **getContentDigest**(): `Promise`\<`MultihashDigest`\<`number`\>\>

Get the twine content field hash digest

#### Returns

`Promise`\<`MultihashDigest`\<`number`\>\>

#### Defined in

[packages/twine-core/src/twine.ts:101](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/twine.ts#L101)

***

### verifySignature()

> **verifySignature**(`chain`?): `Promise`\<`boolean`\>

Verify the signature of this twine instance

If this is a chain, no chain instance is required. If this is a pulse,
a chain instance must be provided.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain`? | [`Chain`](../type-aliases/Chain.md)\<[`AnyMap`](../type-aliases/AnyMap.md)\> | Chain instance to use for verification |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/twine-core/src/twine.ts:113](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/twine.ts#L113)

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

| Parameter | Type |
| ------ | ------ |
| `path`? | `string` |

#### Returns

`BlockCursorView`\<`unknown`\>

#### Inherited from

`Block.Block.get`

#### Defined in

node\_modules/multiformats/dist/src/block.d.ts:21
