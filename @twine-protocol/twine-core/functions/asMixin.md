[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / asMixin

# Function: asMixin()

> **asMixin**(`m`): [`Mixin`](../type-aliases/Mixin.md) \| `null`

Convert something mixin-like into a mixin

## Parameters

• **m**: [`IntoResolvePulseQuery`](../type-aliases/IntoResolvePulseQuery.md)

The mixin-like object

## Returns

[`Mixin`](../type-aliases/Mixin.md) \| `null`

The mixin or null if it could not be converted

## Example

```js
const mixin = asMixin({ chain: 'bafybeib3...', value: 'bafybeib3...' })
const anotherMixin = asMixin(somePulse)
```

## Defined in

[packages/twine-core/src/conversion.ts:53](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/conversion.ts#L53)
