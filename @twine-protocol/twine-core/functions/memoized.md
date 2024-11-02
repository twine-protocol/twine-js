[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / memoized

# Function: memoized()

> **memoized**\<`T`\>(`cache`, `key`, `fn`, ...`args`): `Promise`\<`T`\>

memoize an async function call so that while it is pending, the same call is not made again

This is used by the ResolveCallers.requestCache to avoid making
multiple requests for the same twine.

## Type Parameters

• **T**

## Parameters

• **cache**: `Map`\<`string`, `Promise`\<`T`\>\>

The cache to use

• **key**: `string`

The key to use

• **fn**

The function to call

• ...**args**: `any`[]

The arguments to pass to the function

## Returns

`Promise`\<`T`\>

## Defined in

[packages/twine-core/src/resolver/helpers.ts:45](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/resolver/helpers.ts#L45)
