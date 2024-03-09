[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / IncompleteResolution

# Class: IncompleteResolution

Thrown when crawling cannot resolve a pulse

## Hierarchy

- [`TwineError`](TwineError.md)

  ↳ **`IncompleteResolution`**

## Table of contents

### Constructors

- [constructor](IncompleteResolution.md#constructor)

### Properties

- [cause](IncompleteResolution.md#cause)
- [message](IncompleteResolution.md#message)
- [name](IncompleteResolution.md#name)
- [stack](IncompleteResolution.md#stack)
- [prepareStackTrace](IncompleteResolution.md#preparestacktrace)
- [stackTraceLimit](IncompleteResolution.md#stacktracelimit)

### Methods

- [captureStackTrace](IncompleteResolution.md#capturestacktrace)

## Constructors

### constructor

• **new IncompleteResolution**(`message?`): [`IncompleteResolution`](IncompleteResolution.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`IncompleteResolution`](IncompleteResolution.md)

#### Inherited from

[TwineError](TwineError.md).[constructor](TwineError.md#constructor)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1073

• **new IncompleteResolution**(`message?`, `options?`): [`IncompleteResolution`](IncompleteResolution.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Returns

[`IncompleteResolution`](IncompleteResolution.md)

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
