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

[packages/twine-core/src/conversion.ts:32](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/conversion.ts#L32)
