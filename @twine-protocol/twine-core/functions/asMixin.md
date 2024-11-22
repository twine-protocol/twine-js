[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / asMixin

# Function: asMixin()

> **asMixin**(`m`): [`Mixin`](../type-aliases/Mixin.md) \| `null`

Convert something mixin-like into a mixin

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `m` | [`IntoResolvePulseQuery`](../type-aliases/IntoResolvePulseQuery.md) | The mixin-like object |

## Returns

[`Mixin`](../type-aliases/Mixin.md) \| `null`

The mixin or null if it could not be converted

## Example

```js
const mixin = asMixin({ chain: 'bafybeib3...', value: 'bafybeib3...' })
const anotherMixin = asMixin(somePulse)
```

## Defined in

[packages/twine-core/src/conversion.ts:53](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/conversion.ts#L53)
