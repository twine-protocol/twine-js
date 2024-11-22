[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / asyncThrottle

# Function: asyncThrottle()

> **asyncThrottle**\<`T`\>(`fn`, `delay`?): (...`args`) => `Promise`\<`T`\>

Throttle an async function call

Within the delay interval, the same promise is returned

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | (...`x`) => `Promise`\<`T`\> |
| `delay`? | `number` |

## Returns

`Function`

### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

### Returns

`Promise`\<`T`\>

## Defined in

[packages/twine-core/src/resolver/helpers.ts:13](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/helpers.ts#L13)
