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

[packages/twine-core/src/resolver/helpers.ts:13](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/helpers.ts#L13)
