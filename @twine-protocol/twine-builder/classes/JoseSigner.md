[**@twine-protocol/twine-builder v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-builder](../index.md) / JoseSigner

# Class: JoseSigner

A signer that uses the jose library to sign twines

## Example

```js
import { JoseSigner } from '@twine-protocol/twine-builder'
const signer = await JoseSigner.fromRandomness()
```

## Implements

- `Signer`

## Constructors

### new JoseSigner()

> **new JoseSigner**(`privateKey`, `publicKey`, `alg`): [`JoseSigner`](JoseSigner.md)

Create a new JoseSigner from a JWK

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `privateKey` | `KeyLike` | The private key |
| `publicKey` | `KeyLike` | The public key |
| `alg` | `string` | The algorithm to use |

#### Returns

[`JoseSigner`](JoseSigner.md)

#### Defined in

[jose-signer.ts:46](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/jose-signer.ts#L46)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `privateKey` | `KeyLike` | Private Key | [jose-signer.ts:19](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/jose-signer.ts#L19) |
| `publicKey` | `KeyLike` | Public Key | [jose-signer.ts:21](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/jose-signer.ts#L21) |
| `algorithm` | `string` | Algorithm | [jose-signer.ts:23](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/jose-signer.ts#L23) |

## Methods

### fromRandomness()

> `static` **fromRandomness**(`alg`, `options`): `Promise`\<[`JoseSigner`](JoseSigner.md)\>

Create a new JoseSigner from a random key pair

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `alg` | `string` | `'ES256'` | The algorithm to use |
| `options` | `GenerateKeyPairOptions` | `{}` | Options for the key pair |

#### Returns

`Promise`\<[`JoseSigner`](JoseSigner.md)\>

#### See

[https://github.com/panva/jose/blob/main/src/runtime/node/generate.ts#L42](https://github.com/panva/jose/blob/main/src/runtime/node/generate.ts#L42)

#### Defined in

[jose-signer.ts:34](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/jose-signer.ts#L34)

***

### getPublicJWK()

> **getPublicJWK**(): `Promise`\<[`JWK`](../../twine-core/interfaces/JWK.md)\>

Get the public JWK

#### Returns

`Promise`\<[`JWK`](../../twine-core/interfaces/JWK.md)\>

#### See

[Signer.getPublicJWK](https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Signer.md#getpublicjwk)

#### Implementation of

`Signer.getPublicJWK`

#### Defined in

[jose-signer.ts:62](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/jose-signer.ts#L62)

***

### sign()

> **sign**(`bytes`): `Promise`\<`string`\>

Sign some bytes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`\<`string`\>

#### See

[Signer.sign](https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Signer.md#sign)

#### Implementation of

`Signer.sign`

#### Defined in

[jose-signer.ts:72](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/jose-signer.ts#L72)
