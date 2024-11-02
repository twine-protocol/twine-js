[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / collect

# Function: collect()

> **collect**\<`T`\>(`iterable`): `Promise`\<`T`[]\>

Collect an async iterable into an array

## Type Parameters

• **T**

## Parameters

• **iterable**: `AsyncIterable`\<`T`, `any`, `any`\>

The async iterable to collect

## Returns

`Promise`\<`T`[]\>

## Example

```js
import { collect } from '@twine-protocol/twine-core'
const chains = await collect(resolver.chains())
```

## Defined in

[packages/twine-core/src/conversion.ts:32](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/conversion.ts#L32)
