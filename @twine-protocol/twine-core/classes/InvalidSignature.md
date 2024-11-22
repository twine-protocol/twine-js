[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / InvalidSignature

# Class: InvalidSignature

Signifies that the signature is invalid

## Extends

- [`TwineError`](TwineError.md)

## Constructors

### new InvalidSignature()

> **new InvalidSignature**(`msg`, ...`params`): [`InvalidSignature`](InvalidSignature.md)

Create a new InvalidSignature error

#### Parameters

• **msg**: `string`

The error message

• ...**params**: `any`[]

#### Returns

[`InvalidSignature`](InvalidSignature.md)

#### Overrides

[`TwineError`](TwineError.md).[`constructor`](TwineError.md#constructors)

#### Defined in

[packages/twine-core/src/errors.ts:25](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/errors.ts#L25)

## Properties

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`TwineError`](TwineError.md).[`prepareStackTrace`](TwineError.md#preparestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`TwineError`](TwineError.md).[`stackTraceLimit`](TwineError.md#stacktracelimit)

#### Defined in

node\_modules/@types/node/globals.d.ts:30

***

### name

> **name**: `string`

#### Inherited from

[`TwineError`](TwineError.md).[`name`](TwineError.md#name)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### message

> **message**: `string`

#### Inherited from

[`TwineError`](TwineError.md).[`message`](TwineError.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`TwineError`](TwineError.md).[`stack`](TwineError.md#stack)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

[`TwineError`](TwineError.md).[`cause`](TwineError.md#cause)

#### Defined in

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

## Methods

### captureStackTrace()

#### captureStackTrace(targetObject, constructorOpt)

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

##### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

##### Returns

`void`

##### Inherited from

[`TwineError`](TwineError.md).[`captureStackTrace`](TwineError.md#capturestacktrace)

##### Defined in

node\_modules/@types/node/globals.d.ts:21

#### captureStackTrace(targetObject, constructorOpt)

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

##### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

##### Returns

`void`

##### Inherited from

[`TwineError`](TwineError.md).[`captureStackTrace`](TwineError.md#capturestacktrace)

##### Defined in

node\_modules/bun-types/globals.d.ts:1630
