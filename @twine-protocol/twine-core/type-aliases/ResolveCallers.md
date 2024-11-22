[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / ResolveCallers

# Type Alias: ResolveCallers

> **ResolveCallers**: `object`

An object containing methods to fetch twines

Used by the [resolveHelper](../functions/resolveHelper.md) function

These methods may return null or throw an error if the twine is not found
and the [resolveHelper](../functions/resolveHelper.md) function will handle that.

These methods do not need to check the signature of the twine or anything,
that is all handled by the [resolveHelper](../functions/resolveHelper.md) function.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `fetchChain` | (`q`, `options`) => [`Awaitable`](Awaitable.md)\<[`Chain`](Chain.md) \| `null`\> | Fetch a chain | [packages/twine-core/src/resolver/helpers.ts:99](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/helpers.ts#L99) |
| `fetchPulse` | (`q`, `options`) => [`Awaitable`](Awaitable.md)\<[`Pulse`](Pulse.md) \| `null`\> | Fetch a pulse | [packages/twine-core/src/resolver/helpers.ts:103](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/helpers.ts#L103) |
| `cache`? | [`TwineCache`](../classes/TwineCache.md) \| `false` \| `null` | A cache to use If set to `false` or `null`, no caching will be done Normally a resolver will keep a reference to its cache and simply pass it through in here. **Example** `resolveHelper({ //... cache: this.cache })` | [packages/twine-core/src/resolver/helpers.ts:120](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/helpers.ts#L120) |
| `requestCache`? | `Map`\<`string`, `Promise`\<[`Chain`](Chain.md) \| [`Pulse`](Pulse.md)\>\> | A cache to use for requests If set to `false` or `null`, no caching will be done This is a cache of pending requests, so that a lookup for the same twine is not made multiple times. It is sufficient to use a simple Map for this. **Example** `//... resolveHelper({ //... requestCache: this.requestCache // a Map() })` | [packages/twine-core/src/resolver/helpers.ts:140](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/helpers.ts#L140) |

## Defined in

[packages/twine-core/src/resolver/helpers.ts:95](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/helpers.ts#L95)
