[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / CID

# Class: CID\<Data, Format, Alg, Version\>

## Type Parameters

• **Data** = `unknown`

• **Format** *extends* `number` = `number`

• **Alg** *extends* `number` = `number`

• **Version** *extends* `API.Version` = `API.Version`

## Implements

- `Link`\<`Data`, `Format`, `Alg`, `Version`\>

## Constructors

### new CID()

> **new CID**\<`Data`, `Format`, `Alg`, `Version`\>(`version`, `code`, `multihash`, `bytes`): [`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>

#### Parameters

• **version**: `Version`

Version of the CID

• **code**: `Format`

Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv

• **multihash**: `MultihashDigest`\<`Alg`\>

(Multi)hash of the of the content.

• **bytes**: `Uint8Array`

#### Returns

[`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:17

## Properties

### code

> `readonly` **code**: `Format`

#### Implementation of

`API.Link.code`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:7

***

### version

> `readonly` **version**: `Version`

#### Implementation of

`API.Link.version`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:8

***

### multihash

> `readonly` **multihash**: `MultihashDigest`\<`Alg`\>

#### Implementation of

`API.Link.multihash`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:9

***

### bytes

> `readonly` **bytes**: `Uint8Array`

#### Implementation of

`API.Link.bytes`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:10

***

### /

> `readonly` **/**: `Uint8Array`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:11

***

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `"CID"` = `"CID"`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:34

## Accessors

### asCID

#### Get Signature

> **get** **asCID**(): `this`

Signalling `cid.asCID === cid` has been replaced with `cid['/'] === cid.bytes`
please either use `CID.asCID(cid)` or switch to new signalling mechanism

##### Deprecated

##### Returns

`this`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:24

***

### byteOffset

#### Get Signature

> **get** **byteOffset**(): `number`

##### Returns

`number`

#### Implementation of

`API.Link.byteOffset`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:25

***

### byteLength

#### Get Signature

> **get** **byteLength**(): `number`

##### Returns

`number`

#### Implementation of

`API.Link.byteLength`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:26

## Methods

### equals()

> `static` **equals**\<`Data`, `Format`, `Alg`, `Version`\>(`self`, `other`): `other is CID<unknown, number, number, Version>`

#### Type Parameters

• **Data**

• **Format** *extends* `number`

• **Alg** *extends* `number`

• **Version** *extends* `Version`

#### Parameters

• **self**: `Link`\<`Data`, `Format`, `Alg`, `Version`\>

• **other**: `unknown`

#### Returns

`other is CID<unknown, number, number, Version>`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:30

***

### asCID()

> `static` **asCID**\<`Data`, `Format`, `Alg`, `Version`, `U`\>(`input`): `null` \| [`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>

Takes any input `value` and returns a `CID` instance if it was
a `CID` otherwise returns `null`. If `value` is instanceof `CID`
it will return value back. If `value` is not instance of this CID
class, but is compatible CID it will return new instance of this
`CID` class. Otherwise returns null.

This allows two different incompatible versions of CID library to
co-exist and interop as long as binary interface is compatible.

#### Type Parameters

• **Data**

• **Format** *extends* `number`

• **Alg** *extends* `number`

• **Version** *extends* `Version`

• **U**

#### Parameters

• **input**: `U` \| `Link`\<`Data`, `Format`, `Alg`, `Version`\>

#### Returns

`null` \| [`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:45

***

### create()

> `static` **create**\<`Data`, `Format`, `Alg`, `Version`\>(`version`, `code`, `digest`): [`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>

#### Type Parameters

• **Data**

• **Format** *extends* `number`

• **Alg** *extends* `number`

• **Version** *extends* `Version`

#### Parameters

• **version**: `Version`

Version of the CID

• **code**: `Format`

Code of the codec content is encoded in, see https://github.com/multiformats/multicodec/blob/master/table.csv

• **digest**: `MultihashDigest`\<`Alg`\>

(Multi)hash of the of the content.

#### Returns

[`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:51

***

### createV0()

> `static` **createV0**\<`T`\>(`digest`): [`CID`](CID.md)\<`T`, `112`, `18`, `0`\>

Simplified version of `create` for CIDv0.

#### Type Parameters

• **T** = `unknown`

#### Parameters

• **digest**: `MultihashDigest`\<`18`\>

#### Returns

[`CID`](CID.md)\<`T`, `112`, `18`, `0`\>

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:55

***

### createV1()

> `static` **createV1**\<`Data`, `Code`, `Alg`\>(`code`, `digest`): [`CID`](CID.md)\<`Data`, `Code`, `Alg`, `1`\>

Simplified version of `create` for CIDv1.

#### Type Parameters

• **Data**

• **Code** *extends* `number`

• **Alg** *extends* `number`

#### Parameters

• **code**: `Code`

Content encoding format code.

• **digest**: `MultihashDigest`\<`Alg`\>

Multihash of the content.

#### Returns

[`CID`](CID.md)\<`Data`, `Code`, `Alg`, `1`\>

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:62

***

### decode()

> `static` **decode**\<`Data`, `Code`, `Alg`, `Version`\>(`bytes`): [`CID`](CID.md)\<`Data`, `Code`, `Alg`, `Version`\>

Decoded a CID from its binary representation. The byte array must contain
only the CID with no additional bytes.

An error will be thrown if the bytes provided do not contain a valid
binary representation of a CID.

#### Type Parameters

• **Data**

• **Code** *extends* `number`

• **Alg** *extends* `number`

• **Version** *extends* `Version`

#### Parameters

• **bytes**: `ByteView`\<`Link`\<`Data`, `Code`, `Alg`, `Version`\>\>

#### Returns

[`CID`](CID.md)\<`Data`, `Code`, `Alg`, `Version`\>

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:70

***

### decodeFirst()

> `static` **decodeFirst**\<`T`, `C`, `A`, `V`\>(`bytes`): [[`CID`](CID.md)\<`T`, `C`, `A`, `V`\>, `Uint8Array`]

Decoded a CID from its binary representation at the beginning of a byte
array.

Returns an array with the first element containing the CID and the second
element containing the remainder of the original byte array. The remainder
will be a zero-length byte array if the provided bytes only contained a
binary CID representation.

#### Type Parameters

• **T**

• **C** *extends* `number`

• **A** *extends* `number`

• **V** *extends* `Version`

#### Parameters

• **bytes**: `ByteView`\<`Link`\<`T`, `C`, `A`, `V`\>\>

#### Returns

[[`CID`](CID.md)\<`T`, `C`, `A`, `V`\>, `Uint8Array`]

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:80

***

### inspectBytes()

> `static` **inspectBytes**\<`T`, `C`, `A`, `V`\>(`initialBytes`): `object`

Inspect the initial bytes of a CID to determine its properties.

Involves decoding up to 4 varints. Typically this will require only 4 to 6
bytes but for larger multicodec code values and larger multihash digest
lengths these varints can be quite large. It is recommended that at least
10 bytes be made available in the `initialBytes` argument for a complete
inspection.

#### Type Parameters

• **T**

• **C** *extends* `number`

• **A** *extends* `number`

• **V** *extends* `Version`

#### Parameters

• **initialBytes**: `ByteView`\<`Link`\<`T`, `C`, `A`, `V`\>\>

#### Returns

`object`

##### version

> **version**: `V`

##### codec

> **codec**: `C`

##### multihashCode

> **multihashCode**: `A`

##### digestSize

> **digestSize**: `number`

##### multihashSize

> **multihashSize**: `number`

##### size

> **size**: `number`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:90

***

### parse()

> `static` **parse**\<`Prefix`, `Data`, `Code`, `Alg`, `Version`\>(`source`, `base`?): [`CID`](CID.md)\<`Data`, `Code`, `Alg`, `Version`\>

Takes cid in a string representation and creates an instance. If `base`
decoder is not provided will use a default from the configuration. It will
throw an error if encoding of the CID is not compatible with supplied (or
a default decoder).

#### Type Parameters

• **Prefix** *extends* `string`

• **Data**

• **Code** *extends* `number`

• **Alg** *extends* `number`

• **Version** *extends* `Version`

#### Parameters

• **source**: `ToString`\<`Link`\<`Data`, `Code`, `Alg`, `Version`\>, `Prefix`\>

• **base?**: `MultibaseDecoder`\<`Prefix`\>

#### Returns

[`CID`](CID.md)\<`Data`, `Code`, `Alg`, `Version`\>

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:104

***

### toV0()

> **toV0**(): [`CID`](CID.md)\<`Data`, `112`, `18`, `0`\>

#### Returns

[`CID`](CID.md)\<`Data`, `112`, `18`, `0`\>

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:27

***

### toV1()

> **toV1**(): [`CID`](CID.md)\<`Data`, `Format`, `Alg`, `1`\>

#### Returns

[`CID`](CID.md)\<`Data`, `Format`, `Alg`, `1`\>

#### Implementation of

`API.Link.toV1`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:28

***

### equals()

> **equals**(`other`): `other is CID<Data, Format, Alg, Version>`

#### Parameters

• **other**: `unknown`

#### Returns

`other is CID<Data, Format, Alg, Version>`

#### Implementation of

`API.Link.equals`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:29

***

### toString()

> **toString**(`base`?): `string`

#### Parameters

• **base?**: `MultibaseEncoder`\<`string`\>

#### Returns

`string`

#### Implementation of

`API.Link.toString`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:31

***

### toJSON()

> **toJSON**(): `LinkJSON`\<[`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>\>

#### Returns

`LinkJSON`\<[`CID`](CID.md)\<`Data`, `Format`, `Alg`, `Version`\>\>

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:32

***

### link()

> **link**(): `this`

#### Returns

`this`

#### Implementation of

`API.Link.link`

#### Defined in

node\_modules/multiformats/dist/src/cid.d.ts:33
