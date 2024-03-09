[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / Twine

# Class: Twine\<T\>

Generic type for twine data

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ChainValue`](../modules.md#chainvalue) \| [`PulseValue`](../modules.md#pulsevalue) |

## Hierarchy

- `Block`\<`T`, `number`, `number`, `Version`\>

  ↳ **`Twine`**

  ↳↳ [`ChainResolver`](ChainResolver.md)

## Table of contents

### Constructors

- [constructor](Twine.md#constructor)

### Properties

- [asBlock](Twine.md#asblock)
- [bytes](Twine.md#bytes)
- [chainCid](Twine.md#chaincid)
- [cid](Twine.md#cid)
- [isChain](Twine.md#ischain)
- [isTwineInstance](Twine.md#istwineinstance)
- [value](Twine.md#value)

### Accessors

- [isPulse](Twine.md#ispulse)

### Methods

- [get](Twine.md#get)
- [getContentDigest](Twine.md#getcontentdigest)
- [links](Twine.md#links)
- [toJSON](Twine.md#tojson)
- [tree](Twine.md#tree)
- [verifySignature](Twine.md#verifysignature)
- [isTwine](Twine.md#istwine)

## Constructors

### constructor

• **new Twine**\<`T`\>(`«destructured»`): [`Twine`](Twine.md)\<`T`\>

Create a new twine instance

This class extends the Block class from multiformats/block. So
anything that reads or writes blocks can be used with this class.
A twine can be created from a multi-format block too.

But generally you'll want to use the [fromBytes](../modules.md#frombytes) or [fromJSON](../modules.md#fromjson)
functions to decode a twine instance. Or use the
[twine-builder](https://github.com/twine-protocol/twine-js/tree/master/packages/twine-builder)
package to create a twine instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ChainValue`](../modules.md#chainvalue) \| [`PulseValue`](../modules.md#pulsevalue) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `bytes` | `Uint8Array` |
| › `cid` | [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\> |
| › `value` | `T` |

#### Returns

[`Twine`](Twine.md)\<`T`\>

#### Overrides

Block.Block\&lt;T, number, number, Version\&gt;.constructor

#### Defined in

[packages/twine-core/src/twine.ts:42](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L42)

## Properties

### asBlock

• **asBlock**: [`Twine`](Twine.md)\<`T`\>

#### Inherited from

Block.Block.asBlock

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:97

___

### bytes

• **bytes**: `ByteView`\<`T`\>

#### Inherited from

Block.Block.bytes

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:95

___

### chainCid

• **chainCid**: [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\>

chain CID (either this CID or the pulse's chain CID)

#### Defined in

[packages/twine-core/src/twine.ts:23](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L23)

___

### cid

• **cid**: [`CID`](CID.md)\<`T`, `number`, `number`, `Version`\>

#### Inherited from

Block.Block.cid

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:94

___

### isChain

• **isChain**: `boolean`

is this a chain

#### Defined in

[packages/twine-core/src/twine.ts:21](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L21)

___

### isTwineInstance

• **isTwineInstance**: `boolean` = `true`

is a twine instance (true)

#### Defined in

[packages/twine-core/src/twine.ts:19](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L19)

___

### value

• **value**: `T` & ``null`` \| {}

#### Inherited from

Block.Block.value

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:96

## Accessors

### isPulse

• `get` **isPulse**(): `boolean`

Is this a pulse

#### Returns

`boolean`

#### Defined in

[packages/twine-core/src/twine.ts:77](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L77)

## Methods

### get

▸ **get**(`path?`): `BlockCursorView`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` |

#### Returns

`BlockCursorView`\<`unknown`\>

#### Inherited from

Block.Block.get

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:105

___

### getContentDigest

▸ **getContentDigest**(): `Promise`\<`MultihashDigest`\<`number`\>\>

Get the twine content field hash digest

#### Returns

`Promise`\<`MultihashDigest`\<`number`\>\>

#### Defined in

[packages/twine-core/src/twine.ts:96](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L96)

___

### links

▸ **links**(): `Iterable`\<[`string`, [`CID`](CID.md)\<`any`, `number`, `number`, `Version`\>]\>

#### Returns

`Iterable`\<[`string`, [`CID`](CID.md)\<`any`, `number`, `number`, `Version`\>]\>

#### Inherited from

Block.Block.links

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:98

___

### toJSON

▸ **toJSON**(): `any`

Get the twine data as a DAG-JSON object

#### Returns

`any`

#### Defined in

[packages/twine-core/src/twine.ts:84](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L84)

___

### tree

▸ **tree**(): `Iterable`\<`string`\>

#### Returns

`Iterable`\<`string`\>

#### Inherited from

Block.Block.tree

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:99

___

### verifySignature

▸ **verifySignature**(`chain?`): `Promise`\<`boolean`\>

Verify the signature of this twine instance

If this is a chain, no chain instance is required. If this is a pulse,
a chain instance must be provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain?` | [`Chain`](../modules.md#chain)\<[`AnyMap`](../modules.md#anymap)\> | Chain instance to use for verification |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/twine-core/src/twine.ts:108](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L108)

___

### isTwine

▸ **isTwine**(`thing`): `boolean`

Check if a value is a twine

#### Parameters

| Name | Type |
| :------ | :------ |
| `thing` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/twine-core/src/twine.ts:26](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L26)
