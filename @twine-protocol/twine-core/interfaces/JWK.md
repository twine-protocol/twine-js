[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / JWK

# Interface: JWK

JSON Web Key ([JWK](https://www.rfc-editor.org/rfc/rfc7517)). "RSA", "EC", "OKP", and "oct"
key types are supported.

## Indexable

 \[`propName`: `string`\]: `unknown`

## Properties

### alg?

> `optional` **alg**: `string`

JWK "alg" (Algorithm) Parameter.

#### Defined in

node\_modules/jose/dist/types/types.d.ts:38

***

### crv?

> `optional` **crv**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:39

***

### d?

> `optional` **d**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:40

***

### dp?

> `optional` **dp**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:41

***

### dq?

> `optional` **dq**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:42

***

### e?

> `optional` **e**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:43

***

### ext?

> `optional` **ext**: `boolean`

JWK "ext" (Extractable) Parameter.

#### Defined in

node\_modules/jose/dist/types/types.d.ts:45

***

### k?

> `optional` **k**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:46

***

### key\_ops?

> `optional` **key\_ops**: `string`[]

JWK "key_ops" (Key Operations) Parameter.

#### Defined in

node\_modules/jose/dist/types/types.d.ts:48

***

### kid?

> `optional` **kid**: `string`

JWK "kid" (Key ID) Parameter.

#### Defined in

node\_modules/jose/dist/types/types.d.ts:50

***

### kty?

> `optional` **kty**: `string`

JWK "kty" (Key Type) Parameter.

#### Defined in

node\_modules/jose/dist/types/types.d.ts:52

***

### n?

> `optional` **n**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:53

***

### oth?

> `optional` **oth**: `object`[]

#### Defined in

node\_modules/jose/dist/types/types.d.ts:54

***

### p?

> `optional` **p**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:59

***

### q?

> `optional` **q**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:60

***

### qi?

> `optional` **qi**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:61

***

### use?

> `optional` **use**: `string`

JWK "use" (Public Key Use) Parameter.

#### Defined in

node\_modules/jose/dist/types/types.d.ts:63

***

### x?

> `optional` **x**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:64

***

### y?

> `optional` **y**: `string`

#### Defined in

node\_modules/jose/dist/types/types.d.ts:65

***

### x5c?

> `optional` **x5c**: `string`[]

JWK "x5c" (X.509 Certificate Chain) Parameter.

#### Defined in

node\_modules/jose/dist/types/types.d.ts:67

***

### x5t?

> `optional` **x5t**: `string`

JWK "x5t" (X.509 Certificate SHA-1 Thumbprint) Parameter.

#### Defined in

node\_modules/jose/dist/types/types.d.ts:69

***

### x5t#S256?

> `optional` **x5t#S256**: `string`

"x5t#S256" (X.509 Certificate SHA-256 Thumbprint) Parameter.

#### Defined in

node\_modules/jose/dist/types/types.d.ts:71

***

### x5u?

> `optional` **x5u**: `string`

JWK "x5u" (X.509 URL) Parameter.

#### Defined in

node\_modules/jose/dist/types/types.d.ts:73
