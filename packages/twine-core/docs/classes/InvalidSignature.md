[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / InvalidSignature

# Class: InvalidSignature

Signifies that the signature is invalid

## Hierarchy

- [`TwineError`](TwineError.md)

  ↳ **`InvalidSignature`**

## Table of contents

### Constructors

- [constructor](InvalidSignature.md#constructor)

### Properties

- [cause](InvalidSignature.md#cause)
- [message](InvalidSignature.md#message)
- [name](InvalidSignature.md#name)
- [stack](InvalidSignature.md#stack)
- [prepareStackTrace](InvalidSignature.md#preparestacktrace)
- [stackTraceLimit](InvalidSignature.md#stacktracelimit)

### Methods

- [captureStackTrace](InvalidSignature.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidSignature**(`msg`, `...params`): [`InvalidSignature`](InvalidSignature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `...params` | `any`[] |

#### Returns

[`InvalidSignature`](InvalidSignature.md)

#### Overrides

[TwineError](TwineError.md).[constructor](TwineError.md#constructor)

#### Defined in

[packages/twine-core/src/errors.ts:21](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/errors.ts#L21)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[TwineError](TwineError.md).[cause](TwineError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

[TwineError](TwineError.md).[message](TwineError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

[TwineError](TwineError.md).[name](TwineError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[TwineError](TwineError.md).[stack](TwineError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[TwineError](TwineError.md).[prepareStackTrace](TwineError.md#preparestacktrace)

#### Defined in

node_modules/bun-types/types.d.ts:36314

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[TwineError](TwineError.md).[stackTraceLimit](TwineError.md#stacktracelimit)

#### Defined in

node_modules/bun-types/types.d.ts:36318

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[TwineError](TwineError.md).[captureStackTrace](TwineError.md#capturestacktrace)

#### Defined in

node_modules/bun-types/types.d.ts:36307
