[**@twine-protocol/twine-builder v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-builder](../index.md) / getNextLinks

# Function: getNextLinks()

> **getNextLinks**(`chain`, `previous`): [`CID`](../../twine-core/classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>[]

**`Internal`**

Next pulses skip links

If the chain has a links radix of 0, the next pulse will have a single link to the previous pulse.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chain` | `Chain` | The chain |
| `previous` | `false` \| `Pulse` | The previous pulse, or false for first pulse |

## Returns

[`CID`](../../twine-core/classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>[]

## Defined in

[factory.ts:25](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/factory.ts#L25)
