[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / InvalidTwineData

# Class: InvalidTwineData

Signifies that the twine data does not follow specs

## Hierarchy

- [`TwineError`](TwineError.md)

  ↳ **`InvalidTwineData`**

## Table of contents

### Constructors

- [constructor](InvalidTwineData.md#constructor)

### Properties

- [cause](InvalidTwineData.md#cause)
- [message](InvalidTwineData.md#message)
- [name](InvalidTwineData.md#name)
- [stack](InvalidTwineData.md#stack)
- [prepareStackTrace](InvalidTwineData.md#preparestacktrace)
- [stackTraceLimit](InvalidTwineData.md#stacktracelimit)

### Methods

- [captureStackTrace](InvalidTwineData.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidTwineData**(`message?`): [`InvalidTwineData`](InvalidTwineData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`InvalidTwineData`](InvalidTwineData.md)

#### Inherited from

[TwineError](TwineError.md).[constructor](TwineError.md#constructor)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1073

• **new InvalidTwineData**(`message?`, `options?`): [`InvalidTwineData`](InvalidTwineData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Returns

[`InvalidTwineData`](InvalidTwineData.md)

#### Inherited from

[TwineError](TwineError.md).[constructor](TwineError.md#constructor)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1073

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
