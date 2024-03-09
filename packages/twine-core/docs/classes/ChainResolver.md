[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / ChainResolver

# Class: ChainResolver

A helper to restrict the resolution to a specific chain

## Hierarchy

- [`Twine`](Twine.md)\<[`ChainValue`](../modules.md#chainvalue)\>

  ↳ **`ChainResolver`**

## Table of contents

### Constructors

- [constructor](ChainResolver.md#constructor)

### Properties

- [asBlock](ChainResolver.md#asblock)
- [bytes](ChainResolver.md#bytes)
- [chainCid](ChainResolver.md#chaincid)
- [cid](ChainResolver.md#cid)
- [isChain](ChainResolver.md#ischain)
- [isTwineInstance](ChainResolver.md#istwineinstance)
- [value](ChainResolver.md#value)

### Accessors

- [isPulse](ChainResolver.md#ispulse)

### Methods

- [get](ChainResolver.md#get)
- [getContentDigest](ChainResolver.md#getcontentdigest)
- [latest](ChainResolver.md#latest)
- [links](ChainResolver.md#links)
- [pulse](ChainResolver.md#pulse)
- [pulses](ChainResolver.md#pulses)
- [toJSON](ChainResolver.md#tojson)
- [tree](ChainResolver.md#tree)
- [verifySignature](ChainResolver.md#verifysignature)
- [create](ChainResolver.md#create)
- [isTwine](ChainResolver.md#istwine)

## Constructors

### constructor

• **new ChainResolver**(`resolver`, `chain`): [`ChainResolver`](ChainResolver.md)

Create a new ChainResolver

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolver` | [`Resolver`](../interfaces/Resolver.md) | The resolver to use |
| `chain` | [`Chain`](../modules.md#chain) | The chain to use |

#### Returns

[`ChainResolver`](ChainResolver.md)

A ChainResolver

#### Overrides

[Twine](Twine.md).[constructor](Twine.md#constructor)

#### Defined in

[packages/twine-core/src/resolver/chain-resolver.ts:36](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/chain-resolver.ts#L36)

## Properties

### asBlock

• **asBlock**: [`ChainResolver`](ChainResolver.md)

#### Inherited from

[Twine](Twine.md).[asBlock](Twine.md#asblock)

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:97

___

### bytes

• **bytes**: `ByteView`\<[`ChainValue`](../modules.md#chainvalue)\>

#### Inherited from

[Twine](Twine.md).[bytes](Twine.md#bytes)

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:95

___

### chainCid

• **chainCid**: [`CID`](CID.md)\<`unknown`, `number`, `number`, `Version`\>

chain CID (either this CID or the pulse's chain CID)

#### Inherited from

[Twine](Twine.md).[chainCid](Twine.md#chaincid)

#### Defined in

[packages/twine-core/src/twine.ts:23](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L23)

___

### cid

• **cid**: [`CID`](CID.md)\<[`ChainValue`](../modules.md#chainvalue), `number`, `number`, `Version`\>

#### Inherited from

[Twine](Twine.md).[cid](Twine.md#cid)

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:94

___

### isChain

• **isChain**: `boolean`

is this a chain

#### Inherited from

[Twine](Twine.md).[isChain](Twine.md#ischain)

#### Defined in

[packages/twine-core/src/twine.ts:21](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L21)

___

### isTwineInstance

• **isTwineInstance**: `boolean` = `true`

is a twine instance (true)

#### Inherited from

[Twine](Twine.md).[isTwineInstance](Twine.md#istwineinstance)

#### Defined in

[packages/twine-core/src/twine.ts:19](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L19)

___

### value

• **value**: [`ChainValue`](../modules.md#chainvalue)

#### Inherited from

[Twine](Twine.md).[value](Twine.md#value)

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:96

## Accessors

### isPulse

• `get` **isPulse**(): `boolean`

Is this a pulse

#### Returns

`boolean`

#### Inherited from

Twine.isPulse

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

[Twine](Twine.md).[get](Twine.md#get)

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:105

___

### getContentDigest

▸ **getContentDigest**(): `Promise`\<`MultihashDigest`\<`number`\>\>

Get the twine content field hash digest

#### Returns

`Promise`\<`MultihashDigest`\<`number`\>\>

#### Inherited from

[Twine](Twine.md).[getContentDigest](Twine.md#getcontentdigest)

#### Defined in

[packages/twine-core/src/twine.ts:96](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L96)

___

### latest

▸ **latest**(): `Promise`\<``null`` \| [`Pulse`](../modules.md#pulse)\>

Latest pulse in the chain

#### Returns

`Promise`\<``null`` \| [`Pulse`](../modules.md#pulse)\>

#### Defined in

[packages/twine-core/src/resolver/chain-resolver.ts:69](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/chain-resolver.ts#L69)

___

### links

▸ **links**(): `Iterable`\<[`string`, [`CID`](CID.md)\<`any`, `number`, `number`, `Version`\>]\>

#### Returns

`Iterable`\<[`string`, [`CID`](CID.md)\<`any`, `number`, `number`, `Version`\>]\>

#### Inherited from

[Twine](Twine.md).[links](Twine.md#links)

#### Defined in

node_modules/multiformats/dist/types/src/block.d.ts:98

___

### pulse

▸ **pulse**(`ref`): `Promise`\<``null`` \| [`Pulse`](../modules.md#pulse)\>

Resolve a pulse in the chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `number` \| [`IntoCid`](../modules.md#intocid) | The pulse or pulse CID to resolve |

#### Returns

`Promise`\<``null`` \| [`Pulse`](../modules.md#pulse)\>

The resolved pulse

#### Defined in

[packages/twine-core/src/resolver/chain-resolver.ts:47](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/chain-resolver.ts#L47)

___

### pulses

▸ **pulses**(`start?`): `AsyncGenerator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| `Generator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| [`AnyIterable`](../modules.md#anyiterable)\<[`Pulse`](../modules.md#pulse)\>

Async iterator for the pulses in the chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` \| [`IntoCid`](../modules.md#intocid) | The index or CID of the pulse to start from |

#### Returns

`AsyncGenerator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| `Generator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| [`AnyIterable`](../modules.md#anyiterable)\<[`Pulse`](../modules.md#pulse)\>

#### Defined in

[packages/twine-core/src/resolver/chain-resolver.ts:62](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/chain-resolver.ts#L62)

___

### toJSON

▸ **toJSON**(): `any`

Get the twine data as a DAG-JSON object

#### Returns

`any`

#### Inherited from

[Twine](Twine.md).[toJSON](Twine.md#tojson)

#### Defined in

[packages/twine-core/src/twine.ts:84](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L84)

___

### tree

▸ **tree**(): `Iterable`\<`string`\>

#### Returns

`Iterable`\<`string`\>

#### Inherited from

[Twine](Twine.md).[tree](Twine.md#tree)

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

#### Inherited from

[Twine](Twine.md).[verifySignature](Twine.md#verifysignature)

#### Defined in

[packages/twine-core/src/twine.ts:108](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L108)

___

### create

▸ **create**(`resolver`, `chainCid`): `Promise`\<[`ChainResolver`](ChainResolver.md)\>

Create a new ChainResolver

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolver` | [`Resolver`](../interfaces/Resolver.md) | The resolver to use |
| `chainCid` | [`IntoCid`](../modules.md#intocid) | The chain or chain CID to use |

#### Returns

`Promise`\<[`ChainResolver`](ChainResolver.md)\>

A ChainResolver

#### Defined in

[packages/twine-core/src/resolver/chain-resolver.ts:20](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/chain-resolver.ts#L20)

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

#### Inherited from

[Twine](Twine.md).[isTwine](Twine.md#istwine)

#### Defined in

[packages/twine-core/src/twine.ts:26](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L26)
