[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / skipList

# Function: skipList()

> **skipList**(`radix`, `fromIndex`, `toIndex`, `byLink`): `Generator`\<`number`, `void`, `unknown`\>

Get an iterator of indices that can be used to skip through the chain.

This can either provide the pulse indices themselves or a list of
array indices of the links list for each pulse along the path.

This will not include the from/to indices themselves.

A radix of 1 doesn't make sense since `1^r` is always `1`.

A radix of 0 is interpreted as no radix skipping, so the list
just has the previous pulse cid, therefore a radix 0 skiplist
is just a decreasing list of pulse indices.

## Parameters

• **radix**: `number`

The radix used for the chain

• **fromIndex**: `number`

The higher index

• **toIndex**: `number`

The lower index

• **byLink**: `boolean` = `false`

If true, will return the list of array indices for the links list

## Returns

`Generator`\<`number`, `void`, `unknown`\>

## Example

```js
const radix = 10
const fromIndex = 23
const toIndex = 5
const actual = Array.from(skipList(radix, fromIndex, toIndex))
// actual == [ 20, 10, 9, 8, 7, 6 ]
// because... 23 is in the `n * 10^1` range so it's links list should have `[22, 20]`
// same deal for 20 which has links `[19, 10]` so we can skip to 10
// then we get to the `n * 10^0` range and we can skip to 9, 8, 7, 6

// The array indices for this correspond to jumps of
// `10^1`, `10^1`, `10^0`, `10^0`, `10^0`, `10^0`
// so the array indices would be `[1, 1, 0, 0, 0, 0]`

Array.from(skipList(10, 23, 5, true)) // == [ 1, 1, 0, 0, 0, 0 ]
```

## Defined in

[packages/twine-core/src/links.ts:81](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/links.ts#L81)
