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

[packages/twine-core/src/types.ts:127](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L127)

***

### sign()

> **sign**(`bytes`): `Promise`\<`string`\>

Sign the given bytes

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bytes` | `Uint8Array` | Bytes to sign |

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/twine-core/src/types.ts:132](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L132)
