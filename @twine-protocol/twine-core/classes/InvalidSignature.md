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

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `msg` | `string` | The error message |
| ...`params` | `any`[] | - |

#### Returns

[`InvalidSignature`](InvalidSignature.md)

#### Overrides

[`TwineError`](TwineError.md).[`constructor`](TwineError.md#constructors)

#### Defined in

[packages/twine-core/src/errors.ts:25](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/errors.ts#L25)

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `prepareStackTrace?` | `static` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces **See** https://v8.dev/docs/stack-trace-api#customizing-stack-traces | [`TwineError`](TwineError.md).`prepareStackTrace` | node\_modules/@types/node/globals.d.ts:28 |
| `stackTraceLimit` | `static` | `number` | - | [`TwineError`](TwineError.md).`stackTraceLimit` | node\_modules/@types/node/globals.d.ts:30 |
| `name` | `public` | `string` | - | [`TwineError`](TwineError.md).`name` | node\_modules/typescript/lib/lib.es5.d.ts:1076 |
| `message` | `public` | `string` | - | [`TwineError`](TwineError.md).`message` | node\_modules/typescript/lib/lib.es5.d.ts:1077 |
| `stack?` | `public` | `string` | - | [`TwineError`](TwineError.md).`stack` | node\_modules/typescript/lib/lib.es5.d.ts:1078 |
| `cause?` | `public` | `unknown` | - | [`TwineError`](TwineError.md).`cause` | node\_modules/typescript/lib/lib.es2022.error.d.ts:24 |

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

[`TwineError`](TwineError.md).[`captureStackTrace`](TwineError.md#capturestacktrace)

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

[`TwineError`](TwineError.md).[`captureStackTrace`](TwineError.md#capturestacktrace)

##### Defined in

node\_modules/bun-types/globals.d.ts:1630
