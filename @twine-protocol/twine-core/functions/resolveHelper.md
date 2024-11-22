[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / resolveHelper

# Function: resolveHelper()

A helper function for implementing the [Resolver.resolve](../interfaces/Resolver.md#resolve) method

## Param

The fetchers to use

## Param

The query to resolve

## Param

Options for the resolution

## See

 - [MemoryStore.resolve](../classes/MemoryStore.md#resolve) for an example of how to use this
 - [ResolveCallers](../type-aliases/ResolveCallers.md)

## Example

```js
class MemoryStore {
  async resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  async resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
  async resolve(query: any, options?: ResolveOptions) {
    return resolveHelper({
      fetchChain: ({ chainCID }) => this.fetch(chainCID) as Chain | null,
      fetchPulse: ({ pulseCID }) => this.fetch(pulseCID) as Pulse | null
    }, query, options)
  }
  //...
}
```

## resolveHelper(callers, thing, options)

> **resolveHelper**(`callers`, `thing`, `options`?): `Promise`\<[`ChainResolution`](../type-aliases/ChainResolution.md)\>

A helper function for implementing the [Resolver.resolve](../interfaces/Resolver.md#resolve) method

### Parameters

• **callers**: [`ResolveCallers`](../type-aliases/ResolveCallers.md)

• **thing**: [`IntoResolveChainQuery`](../type-aliases/IntoResolveChainQuery.md)

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

### Returns

`Promise`\<[`ChainResolution`](../type-aliases/ChainResolution.md)\>

### Param

The fetchers to use

### Param

The query to resolve

### Param

Options for the resolution

### See

 - [MemoryStore.resolve](../classes/MemoryStore.md#resolve) for an example of how to use this
 - [ResolveCallers](../type-aliases/ResolveCallers.md)

### Example

```js
class MemoryStore {
  async resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  async resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
  async resolve(query: any, options?: ResolveOptions) {
    return resolveHelper({
      fetchChain: ({ chainCID }) => this.fetch(chainCID) as Chain | null,
      fetchPulse: ({ pulseCID }) => this.fetch(pulseCID) as Pulse | null
    }, query, options)
  }
  //...
}
```

### Defined in

[packages/twine-core/src/resolver/helpers.ts:183](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/helpers.ts#L183)

## resolveHelper(callers, thing, options)

> **resolveHelper**(`callers`, `thing`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

A helper function for implementing the [Resolver.resolve](../interfaces/Resolver.md#resolve) method

### Parameters

• **callers**: [`ResolveCallers`](../type-aliases/ResolveCallers.md)

• **thing**: [`IntoResolvePulseQuery`](../type-aliases/IntoResolvePulseQuery.md)

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

### Param

The fetchers to use

### Param

The query to resolve

### Param

Options for the resolution

### See

 - [MemoryStore.resolve](../classes/MemoryStore.md#resolve) for an example of how to use this
 - [ResolveCallers](../type-aliases/ResolveCallers.md)

### Example

```js
class MemoryStore {
  async resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  async resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
  async resolve(query: any, options?: ResolveOptions) {
    return resolveHelper({
      fetchChain: ({ chainCID }) => this.fetch(chainCID) as Chain | null,
      fetchPulse: ({ pulseCID }) => this.fetch(pulseCID) as Pulse | null
    }, query, options)
  }
  //...
}
```

### Defined in

[packages/twine-core/src/resolver/helpers.ts:184](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/helpers.ts#L184)
