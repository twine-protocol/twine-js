[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / IncompleteResolution

# Class: IncompleteResolution

Thrown when crawling cannot resolve a pulse

## Extends

- [`TwineError`](TwineError.md)

## Constructors

### new IncompleteResolution()

> **new IncompleteResolution**(`message`?): [`IncompleteResolution`](IncompleteResolution.md)

#### Parameters

• **message?**: `string`

#### Returns

[`IncompleteResolution`](IncompleteResolution.md)

#### Inherited from

[`TwineError`](TwineError.md).[`constructor`](TwineError.md#constructors)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1082

### new IncompleteResolution()

> **new IncompleteResolution**(`message`?, `options`?): [`IncompleteResolution`](IncompleteResolution.md)

#### Parameters

• **message?**: `string`

• **options?**: `ErrorOptions`

#### Returns

[`IncompleteResolution`](IncompleteResolution.md)

#### Inherited from

[`TwineError`](TwineError.md).[`constructor`](TwineError.md#constructors)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1082

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

[`TwineError`](TwineError.md).[`cause`](TwineError.md#cause)

#### Defined in

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

[`TwineError`](TwineError.md).[`message`](TwineError.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`TwineError`](TwineError.md).[`name`](TwineError.md#name)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`TwineError`](TwineError.md).[`stack`](TwineError.md#stack)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

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
