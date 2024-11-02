[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / asyncThrottle

# Function: asyncThrottle()

> **asyncThrottle**\<`T`\>(`fn`, `delay`?): (...`args`) => `Promise`\<`T`\>

Throttle an async function call

Within the delay interval, the same promise is returned

## Type Parameters

• **T**

## Parameters

• **fn**

• **delay?**: `number`

## Returns

`Function`

### Parameters

• ...**args**: `any`[]

### Returns

`Promise`\<`T`\>

## Defined in

[packages/twine-core/src/resolver/helpers.ts:13](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/resolver/helpers.ts#L13)
