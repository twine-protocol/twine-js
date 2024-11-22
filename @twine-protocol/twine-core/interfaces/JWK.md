[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / JWK

# Interface: JWK

JSON Web Key ([JWK](https://www.rfc-editor.org/rfc/rfc7517)). "RSA", "EC", "OKP", and "oct"
key types are supported.

## Indexable

 \[`propName`: `string`\]: `unknown`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `alg?` | `string` | JWK "alg" (Algorithm) Parameter. | node\_modules/jose/dist/types/types.d.ts:38 |
| `crv?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:39 |
| `d?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:40 |
| `dp?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:41 |
| `dq?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:42 |
| `e?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:43 |
| `ext?` | `boolean` | JWK "ext" (Extractable) Parameter. | node\_modules/jose/dist/types/types.d.ts:45 |
| `k?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:46 |
| `key_ops?` | `string`[] | JWK "key_ops" (Key Operations) Parameter. | node\_modules/jose/dist/types/types.d.ts:48 |
| `kid?` | `string` | JWK "kid" (Key ID) Parameter. | node\_modules/jose/dist/types/types.d.ts:50 |
| `kty?` | `string` | JWK "kty" (Key Type) Parameter. | node\_modules/jose/dist/types/types.d.ts:52 |
| `n?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:53 |
| `oth?` | `object`[] | - | node\_modules/jose/dist/types/types.d.ts:54 |
| `p?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:59 |
| `q?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:60 |
| `qi?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:61 |
| `use?` | `string` | JWK "use" (Public Key Use) Parameter. | node\_modules/jose/dist/types/types.d.ts:63 |
| `x?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:64 |
| `y?` | `string` | - | node\_modules/jose/dist/types/types.d.ts:65 |
| `x5c?` | `string`[] | JWK "x5c" (X.509 Certificate Chain) Parameter. | node\_modules/jose/dist/types/types.d.ts:67 |
| `x5t?` | `string` | JWK "x5t" (X.509 Certificate SHA-1 Thumbprint) Parameter. | node\_modules/jose/dist/types/types.d.ts:69 |
| `x5t#S256?` | `string` | "x5t#S256" (X.509 Certificate SHA-256 Thumbprint) Parameter. | node\_modules/jose/dist/types/types.d.ts:71 |
| `x5u?` | `string` | JWK "x5u" (X.509 URL) Parameter. | node\_modules/jose/dist/types/types.d.ts:73 |
