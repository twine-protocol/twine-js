[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / TwineError

# Class: TwineError

General Twine Error class

## Hierarchy

- `Error`

  ↳ **`TwineError`**

  ↳↳ [`InvalidTwineData`](InvalidTwineData.md)

  ↳↳ [`InvalidSignature`](InvalidSignature.md)

  ↳↳ [`IncompleteResolution`](IncompleteResolution.md)

## Table of contents

### Constructors

- [constructor](TwineError.md#constructor)

### Properties

- [cause](TwineError.md#cause)
- [message](TwineError.md#message)
- [name](TwineError.md#name)
- [stack](TwineError.md#stack)
- [prepareStackTrace](TwineError.md#preparestacktrace)
- [stackTraceLimit](TwineError.md#stacktracelimit)

### Methods

- [captureStackTrace](TwineError.md#capturestacktrace)

## Constructors

### constructor

• **new TwineError**(`message?`): [`TwineError`](TwineError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`TwineError`](TwineError.md)

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1073

• **new TwineError**(`message?`, `options?`): [`TwineError`](TwineError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Returns

[`TwineError`](TwineError.md)

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1073

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

#### Defined in

node_modules/bun-types/types.d.ts:36314

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

node_modules/bun-types/types.d.ts:36307
