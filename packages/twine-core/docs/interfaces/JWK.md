[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / JWK

# Interface: JWK

JSON Web Key ([JWK](https://www.rfc-editor.org/rfc/rfc7517)). "RSA", "EC", "OKP", and "oct"
key types are supported.

## Indexable

▪ [propName: `string`]: `unknown`

## Table of contents

### Properties

- [alg](JWK.md#alg)
- [crv](JWK.md#crv)
- [d](JWK.md#d)
- [dp](JWK.md#dp)
- [dq](JWK.md#dq)
- [e](JWK.md#e)
- [ext](JWK.md#ext)
- [k](JWK.md#k)
- [key\_ops](JWK.md#key_ops)
- [kid](JWK.md#kid)
- [kty](JWK.md#kty)
- [n](JWK.md#n)
- [oth](JWK.md#oth)
- [p](JWK.md#p)
- [q](JWK.md#q)
- [qi](JWK.md#qi)
- [use](JWK.md#use)
- [x](JWK.md#x)
- [x5c](JWK.md#x5c)
- [x5t](JWK.md#x5t)
- [x5t#S256](JWK.md#x5t#s256)
- [x5u](JWK.md#x5u)
- [y](JWK.md#y)

## Properties

### alg

• `Optional` **alg**: `string`

JWK "alg" (Algorithm) Parameter.

#### Defined in

node_modules/jose/dist/types/types.d.ts:38

___

### crv

• `Optional` **crv**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:39

___

### d

• `Optional` **d**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:40

___

### dp

• `Optional` **dp**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:41

___

### dq

• `Optional` **dq**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:42

___

### e

• `Optional` **e**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:43

___

### ext

• `Optional` **ext**: `boolean`

JWK "ext" (Extractable) Parameter.

#### Defined in

node_modules/jose/dist/types/types.d.ts:45

___

### k

• `Optional` **k**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:46

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

JWK "key_ops" (Key Operations) Parameter.

#### Defined in

node_modules/jose/dist/types/types.d.ts:48

___

### kid

• `Optional` **kid**: `string`

JWK "kid" (Key ID) Parameter.

#### Defined in

node_modules/jose/dist/types/types.d.ts:50

___

### kty

• `Optional` **kty**: `string`

JWK "kty" (Key Type) Parameter.

#### Defined in

node_modules/jose/dist/types/types.d.ts:52

___

### n

• `Optional` **n**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:53

___

### oth

• `Optional` **oth**: \{ `d?`: `string` ; `r?`: `string` ; `t?`: `string`  }[]

#### Defined in

node_modules/jose/dist/types/types.d.ts:54

___

### p

• `Optional` **p**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:59

___

### q

• `Optional` **q**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:60

___

### qi

• `Optional` **qi**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:61

___

### use

• `Optional` **use**: `string`

JWK "use" (Public Key Use) Parameter.

#### Defined in

node_modules/jose/dist/types/types.d.ts:63

___

### x

• `Optional` **x**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:64

___

### x5c

• `Optional` **x5c**: `string`[]

JWK "x5c" (X.509 Certificate Chain) Parameter.

#### Defined in

node_modules/jose/dist/types/types.d.ts:67

___

### x5t

• `Optional` **x5t**: `string`

JWK "x5t" (X.509 Certificate SHA-1 Thumbprint) Parameter.

#### Defined in

node_modules/jose/dist/types/types.d.ts:69

___

### x5t#S256

• `Optional` **x5t#S256**: `string`

"x5t#S256" (X.509 Certificate SHA-256 Thumbprint) Parameter.

#### Defined in

node_modules/jose/dist/types/types.d.ts:71

___

### x5u

• `Optional` **x5u**: `string`

JWK "x5u" (X.509 URL) Parameter.

#### Defined in

node_modules/jose/dist/types/types.d.ts:73

___

### y

• `Optional` **y**: `string`

#### Defined in

node_modules/jose/dist/types/types.d.ts:65
