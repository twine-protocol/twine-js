[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / collect

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

[packages/twine-core/src/conversion.ts:32](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/conversion.ts#L32)
