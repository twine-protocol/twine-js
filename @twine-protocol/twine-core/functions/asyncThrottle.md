[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / asyncThrottle

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

[packages/twine-core/src/resolver/helpers.ts:13](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/helpers.ts#L13)
