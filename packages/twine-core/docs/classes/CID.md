[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / CID

# Class: CID\<Data, Format, Alg, Version\>

**`Implements`**

## Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `unknown` = `unknown` |
| `Format` | extends `number` = `number` |
| `Alg` | extends `number` = `number` |
| `Version` | extends `API.Version` = `API.Version` |

## Implements

- `Link`\<`Data`, `Format`, `Alg`, `Version`\>

## Table of contents

### Constructors

- [constructor](CID.md#constructor)

### Properties

- [/](CID.md#)
- [bytes](CID.md#bytes)
- [code](CID.md#code)
- [multihash](CID.md#multihash)
- [version](CID.md#version)

### Accessors

- [[toStringTag]](CID.md#[tostringtag])
- [asCID](CID.md#ascid)
- [byteLength](CID.md#bytelength)
- [byteOffset](CID.md#byteoffset)

### Methods

- [equals](CID.md#equals)
- [link](CID.md#link)
- [toJSON](CID.md#tojson)
- [toString](CID.md#tostring)
- [toV0](CID.md#tov0)
- [toV1](CID.md#tov1)
- [asCID](CID.md#ascid-1)
- [create](CID.md#create)
- [createV0](CID.md#createv0)
- [createV1](CID.md#createv1)
- [decode](CID.md#decode)
- [decodeFirst](CID.md#decodefirst)
- [equals](CID.md#equals-1)
- [inspectBytes](CID.md#inspectbytes)
- [parse](CID.md#parse)

## Constructors

### constructor

• **new CID**\<`Data`, `Format`, `Alg`, `Version`\>(`version`, `code`, `multihash`, `bytes`): [`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | extends `unknown` = `unknown` |
| `Format` | extends `number` = `number` |
| `Alg` | extends `number` = `number` |
| `Version` | extends `Version` = `Version` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version` | `Version` | Version of the CID |
| `code` | `Format` | Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv |
| `multihash` | `MultihashDigest`\<`Alg`\> | (Multi)hash of the of the content. |
| `bytes` | `Uint8Array` |  |

#### Returns

[`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:151

## Properties

### /

• `Readonly` **/**: `Uint8Array`

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:161

___

### bytes

• `Readonly` **bytes**: `Uint8Array`

#### Implementation of

API.Link.bytes

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:159

___

### code

• `Readonly` **code**: `Format`

#### Implementation of

API.Link.code

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:153

___

### multihash

• `Readonly` **multihash**: `MultihashDigest`\<`Alg`\>

#### Implementation of

API.Link.multihash

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:157

___

### version

• `Readonly` **version**: `Version`

#### Implementation of

API.Link.version

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:155

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:194

___

### asCID

• `get` **asCID**(): `this`

Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
please either use `CID.asCID(cid)` or switch to new signalling mechanism

#### Returns

`this`

**`Deprecated`**

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:168

___

### byteLength

• `get` **byteLength**(): `number`

#### Returns

`number`

#### Implementation of

API.Link.byteLength

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:170

___

### byteOffset

• `get` **byteOffset**(): `number`

#### Returns

`number`

#### Implementation of

API.Link.byteOffset

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:169

## Methods

### equals

▸ **equals**(`other`): other is CID\<Data, Format, Alg, Version\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `unknown` |

#### Returns

other is CID\<Data, Format, Alg, Version\>

#### Implementation of

API.Link.equals

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:183

___

### link

▸ **link**(): `this`

#### Returns

`this`

#### Implementation of

API.Link.link

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:193

___

### toJSON

▸ **toJSON**(): `LinkJSON`\<[`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>\>

#### Returns

`LinkJSON`\<[`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>\>

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:192

___

### toString

▸ **toString**(`base?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base?` | `MultibaseEncoder`\<`string`\> |

#### Returns

`string`

#### Implementation of

API.Link.toString

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:188

___

### toV0

▸ **toV0**(): [`CID`](CID.md)\<`Data`, ``112``, ``18``, ``0``\>

#### Returns

[`CID`](CID.md)\<`Data`, ``112``, ``18``, ``0``\>

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:174

___

### toV1

▸ **toV1**(): [`CID`](CID.md)\<`Data`, `Format`, `Alg`, ``1``\>

#### Returns

[`CID`](CID.md)\<`Data`, `Format`, `Alg`, ``1``\>

#### Implementation of

API.Link.toV1

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:178

___

### asCID

▸ **asCID**\<`Data_2`, `Format_2`, `Alg_2`, `Version_2`, `U`\>(`input`): ``null`` \| [`CID`](CID.md)\<`Data_2`, `Format_2`, `Alg_2`, `Version_2`\>

Takes any input `value` and returns a `CID` instance if it was
a `CID` otherwise returns `null`. If `value` is instanceof `CID`
it will return value back. If `value` is not instance of this CID
class, but is compatible CID it will return new instance of this
`CID` class. Otherwise returns null.

This allows two different incompatible versions of CID library to
co-exist and interop as long as binary interface is compatible.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data_2` | extends `unknown` |
| `Format_2` | extends `number` |
| `Alg_2` | extends `number` |
| `Version_2` | extends `Version` |
| `U` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `U` \| `Link`\<`Data_2`, `Format_2`, `Alg_2`, `Version_2`\> |

#### Returns

``null`` \| [`CID`](CID.md)\<`Data_2`, `Format_2`, `Alg_2`, `Version_2`\>

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:41

___

### create

▸ **create**\<`Data_3`, `Format_3`, `Alg_3`, `Version_3`\>(`version`, `code`, `digest`): [`CID`](CID.md)\<`Data_3`, `Format_3`, `Alg_3`, `Version_3`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data_3` | extends `unknown` |
| `Format_3` | extends `number` |
| `Alg_3` | extends `number` |
| `Version_3` | extends `Version` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version` | `Version_3` | Version of the CID |
| `code` | `Format_3` | Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv |
| `digest` | `MultihashDigest`\<`Alg_3`\> | (Multi)hash of the of the content. |

#### Returns

[`CID`](CID.md)\<`Data_3`, `Format_3`, `Alg_3`, `Version_3`\>

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:53

___

### createV0

▸ **createV0**\<`T`\>(`digest`): [`CID`](CID.md)\<`T`, ``112``, ``18``, ``0``\>

Simplified version of `create` for CIDv0.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `digest` | `MultihashDigest`\<``18``\> | Multihash. |

#### Returns

[`CID`](CID.md)\<`T`, ``112``, ``18``, ``0``\>

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:61

___

### createV1

▸ **createV1**\<`Data_4`, `Code`, `Alg_4`\>(`code`, `digest`): [`CID`](CID.md)\<`Data_4`, `Code`, `Alg_4`, ``1``\>

Simplified version of `create` for CIDv1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data_4` | extends `unknown` |
| `Code` | extends `number` |
| `Alg_4` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `Code` | Content encoding format code. |
| `digest` | `MultihashDigest`\<`Alg_4`\> | Miltihash of the content. |

#### Returns

[`CID`](CID.md)\<`Data_4`, `Code`, `Alg_4`, ``1``\>

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:72

___

### decode

▸ **decode**\<`Data_5`, `Code_1`, `Alg_5`, `Ver`\>(`bytes`): [`CID`](CID.md)\<`Data_5`, `Code_1`, `Alg_5`, `Ver`\>

Decoded a CID from its binary representation. The byte array must contain
only the CID with no additional bytes.

An error will be thrown if the bytes provided do not contain a valid
binary representation of a CID.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data_5` | extends `unknown` |
| `Code_1` | extends `number` |
| `Alg_5` | extends `number` |
| `Ver` | extends `Version` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `ByteView`\<`Link`\<`Data_5`, `Code_1`, `Alg_5`, `Ver`\>\> |

#### Returns

[`CID`](CID.md)\<`Data_5`, `Code_1`, `Alg_5`, `Ver`\>

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:87

___

### decodeFirst

▸ **decodeFirst**\<`T_1`, `C`, `A`, `V`\>(`bytes`): [[`CID`](CID.md)\<`T_1`, `C`, `A`, `V`\>, `Uint8Array`]

Decoded a CID from its binary representation at the beginning of a byte
array.

Returns an array with the first element containing the CID and the second
element containing the remainder of the original byte array. The remainder
will be a zero-length byte array if the provided bytes only contained a
binary CID representation.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends `unknown` |
| `C` | extends `number` |
| `A` | extends `number` |
| `V` | extends `Version` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `ByteView`\<`Link`\<`T_1`, `C`, `A`, `V`\>\> |

#### Returns

[[`CID`](CID.md)\<`T_1`, `C`, `A`, `V`\>, `Uint8Array`]

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:104

___

### equals

▸ **equals**\<`Data_1`, `Format_1`, `Alg_1`, `Version_1`\>(`self`, `other`): other is CID\<any, number, number, Version\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data_1` | extends `unknown` |
| `Format_1` | extends `number` |
| `Alg_1` | extends `number` |
| `Version_1` | extends `Version` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `Link`\<`Data_1`, `Format_1`, `Alg_1`, `Version_1`\> |
| `other` | `unknown` |

#### Returns

other is CID\<any, number, number, Version\>

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:22

___

### inspectBytes

▸ **inspectBytes**\<`T_2`, `C_1`, `A_1`, `V_1`\>(`initialBytes`): `Object`

Inspect the initial bytes of a CID to determine its properties.

Involves decoding up to 4 varints. Typically this will require only 4 to 6
bytes but for larger multicodec code values and larger multihash digest
lengths these varints can be quite large. It is recommended that at least
10 bytes be made available in the `initialBytes` argument for a complete
inspection.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T_2` | extends `unknown` |
| `C_1` | extends `number` |
| `A_1` | extends `number` |
| `V_1` | extends `Version` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialBytes` | `ByteView`\<`Link`\<`T_2`, `C_1`, `A_1`, `V_1`\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `codec` | `C_1` |
| `digestSize` | `number` |
| `multihashCode` | `A_1` |
| `multihashSize` | `number` |
| `size` | `number` |
| `version` | `V_1` |

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:121

___

### parse

▸ **parse**\<`Prefix`, `Data_6`, `Code_2`, `Alg_6`, `Ver_1`\>(`source`, `base?`): [`CID`](CID.md)\<`Data_6`, `Code_2`, `Alg_6`, `Ver_1`\>

Takes cid in a string representation and creates an instance. If `base`
decoder is not provided will use a default from the configuration. It will
throw an error if encoding of the CID is not compatible with supplied (or
a default decoder).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Prefix` | extends `string` |
| `Data_6` | extends `unknown` |
| `Code_2` | extends `number` |
| `Alg_6` | extends `number` |
| `Ver_1` | extends `Version` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `ToString`\<`Link`\<`Data_6`, `Code_2`, `Alg_6`, `Ver_1`\>, `Prefix`\> |
| `base?` | `MultibaseDecoder`\<`Prefix`\> |

#### Returns

[`CID`](CID.md)\<`Data_6`, `Code_2`, `Alg_6`, `Ver_1`\>

#### Defined in

node_modules/multiformats/dist/types/src/cid.d.ts:144
