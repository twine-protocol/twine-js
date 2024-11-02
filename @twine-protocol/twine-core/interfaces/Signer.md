[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / Signer

# Interface: Signer

Any class implementing this interface can be used as a signer for Twine

## Methods

### getPublicJWK()

> **getPublicJWK**(): `Promise`\<[`JWK`](JWK.md)\>

Get the public key in JWK format

#### Returns

`Promise`\<[`JWK`](JWK.md)\>

#### Defined in

[packages/twine-core/src/types.ts:110](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/types.ts#L110)

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

[packages/twine-core/src/types.ts:115](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/types.ts#L115)
