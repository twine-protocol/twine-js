[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / TwineError

# Class: TwineError

General Twine Error class

## Extends

- `Error`

## Extended by

- [`InvalidTwineData`](InvalidTwineData.md)
- [`InvalidSignature`](InvalidSignature.md)
- [`IncompleteResolution`](IncompleteResolution.md)

## Constructors

### new TwineError()

> **new TwineError**(`message`?): [`TwineError`](TwineError.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `string` |

#### Returns

[`TwineError`](TwineError.md)

#### Inherited from

`Error.constructor`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1082

### new TwineError()

> **new TwineError**(`message`?, `options`?): [`TwineError`](TwineError.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message`? | `string` |
| `options`? | `ErrorOptions` |

#### Returns

[`TwineError`](TwineError.md)

#### Inherited from

`Error.constructor`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1082

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `prepareStackTrace?` | `static` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces **See** https://v8.dev/docs/stack-trace-api#customizing-stack-traces | `Error.prepareStackTrace` | node\_modules/@types/node/globals.d.ts:28 |
| `stackTraceLimit` | `static` | `number` | - | `Error.stackTraceLimit` | node\_modules/@types/node/globals.d.ts:30 |
| `name` | `public` | `string` | - | `Error.name` | node\_modules/typescript/lib/lib.es5.d.ts:1076 |
| `message` | `public` | `string` | - | `Error.message` | node\_modules/typescript/lib/lib.es5.d.ts:1077 |
| `stack?` | `public` | `string` | - | `Error.stack` | node\_modules/typescript/lib/lib.es5.d.ts:1078 |
| `cause?` | `public` | `unknown` | - | `Error.cause` | node\_modules/typescript/lib/lib.es2022.error.d.ts:24 |

## Methods

### captureStackTrace()

#### captureStackTrace(targetObject, constructorOpt)

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt`? | `Function` |

##### Returns

`void`

##### Inherited from

`Error.captureStackTrace`

##### Defined in

node\_modules/@types/node/globals.d.ts:21

#### captureStackTrace(targetObject, constructorOpt)

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt`? | `Function` |

##### Returns

`void`

##### Inherited from

`Error.captureStackTrace`

##### Defined in

node\_modules/bun-types/globals.d.ts:1630
