[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / collect

# Function: collect()

> **collect**\<`T`\>(`iterable`): `Promise`\<`T`[]\>

Collect an async iterable into an array

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `iterable` | `AsyncIterable`\<`T`, `any`, `any`\> | The async iterable to collect |

## Returns

`Promise`\<`T`[]\>

## Example

```js
import { collect } from '@twine-protocol/twine-core'
const chains = await collect(resolver.chains())
```

## Defined in

[packages/twine-core/src/conversion.ts:32](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/conversion.ts#L32)
