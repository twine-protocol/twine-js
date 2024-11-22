[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / memoized

# Function: memoized()

> **memoized**\<`T`\>(`cache`, `key`, `fn`, ...`args`): `Promise`\<`T`\>

memoize an async function call so that while it is pending, the same call is not made again

This is used by the ResolveCallers.requestCache to avoid making
multiple requests for the same twine.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cache` | `Map`\<`string`, `Promise`\<`T`\>\> | The cache to use |
| `key` | `string` | The key to use |
| `fn` | (...`args`) => [`Awaitable`](../type-aliases/Awaitable.md)\<`T`\> | The function to call |
| ...`args` | `any`[] | The arguments to pass to the function |

## Returns

`Promise`\<`T`\>

## Defined in

[packages/twine-core/src/resolver/helpers.ts:45](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/helpers.ts#L45)
