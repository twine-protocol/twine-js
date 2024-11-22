[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / Signer

# Interface: Signer

Any class implementing this interface can be used as a signer for Twine

## Methods

### getPublicJWK()

> **getPublicJWK**(): `Promise`\<[`JWK`](JWK.md)\>

Get the public key in JWK format

#### Returns

`Promise`\<[`JWK`](JWK.md)\>

#### Defined in

[packages/twine-core/src/types.ts:127](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/types.ts#L127)

***

### sign()

> **sign**(`bytes`): `Promise`\<`string`\>

Sign the given bytes

#### Parameters

• **bytes**: `Uint8Array`

Bytes to sign

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/twine-core/src/types.ts:132](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/types.ts#L132)
