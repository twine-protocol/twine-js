[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / fromJSON

# Function: fromJSON()

> **fromJSON**(`json`): `Promise`\<[`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)\>

Convert a DAG-JSON encoded twine into a twine instance

This is one of the primary ways to read twine data.

Throws an error if the data is invalid.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `json` | `string` \| `object` |

## Returns

`Promise`\<[`Chain`](../type-aliases/Chain.md) \| [`Pulse`](../type-aliases/Pulse.md)\>

## Defined in

[packages/twine-core/src/conversion.ts:175](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/conversion.ts#L175)
