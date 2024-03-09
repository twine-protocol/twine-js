[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / Signer

# Interface: Signer

Any class implementing this interface can be used as a signer for Twine

## Table of contents

### Methods

- [getPublicJWK](Signer.md#getpublicjwk)
- [sign](Signer.md#sign)

## Methods

### getPublicJWK

▸ **getPublicJWK**(): `Promise`\<[`JWK`](JWK.md)\>

Get the public key in JWK format

#### Returns

`Promise`\<[`JWK`](JWK.md)\>

#### Defined in

[packages/twine-core/src/types.ts:106](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L106)

___

### sign

▸ **sign**(`bytes`): `Promise`\<`string`\>

Sign the given bytes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | Bytes to sign |

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/twine-core/src/types.ts:111](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L111)
