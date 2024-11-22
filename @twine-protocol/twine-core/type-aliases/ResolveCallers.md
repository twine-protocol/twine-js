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

### fetchChain()

> **fetchChain**: (`q`, `options`) => [`Awaitable`](Awaitable.md)\<[`Chain`](Chain.md) \| `null`\>

Fetch a chain

#### Parameters

• **q**: [`FetchChainQuery`](FetchChainQuery.md)

• **options**: `any`

#### Returns

[`Awaitable`](Awaitable.md)\<[`Chain`](Chain.md) \| `null`\>

### fetchPulse()

> **fetchPulse**: (`q`, `options`) => [`Awaitable`](Awaitable.md)\<[`Pulse`](Pulse.md) \| `null`\>

Fetch a pulse

#### Parameters

• **q**: [`FetchPulseQuery`](FetchPulseQuery.md)

• **options**: `any`

#### Returns

[`Awaitable`](Awaitable.md)\<[`Pulse`](Pulse.md) \| `null`\>

### cache?

> `optional` **cache**: [`TwineCache`](../classes/TwineCache.md) \| `false` \| `null`

A cache to use

If set to `false` or `null`, no caching will be done

Normally a resolver will keep a reference to its cache and simply pass it through
in here.

#### Example

```js
resolveHelper({
  //...
  cache: this.cache
})
```

### requestCache?

> `optional` **requestCache**: `Map`\<`string`, `Promise`\<[`Chain`](Chain.md) \| [`Pulse`](Pulse.md)\>\>

A cache to use for requests

If set to `false` or `null`, no caching will be done

This is a cache of pending requests, so that a lookup
for the same twine is not made multiple times.

It is sufficient to use a simple Map for this.

#### Example

```js
//...
resolveHelper({
  //...
  requestCache: this.requestCache // a Map()
})
```

## Defined in

[packages/twine-core/src/resolver/helpers.ts:95](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/resolver/helpers.ts#L95)
