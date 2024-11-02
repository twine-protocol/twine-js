[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / combineResolvers

# Function: combineResolvers()

> **combineResolvers**(`resolverList`, `options`): [`CombinedResolver`](../interfaces/CombinedResolver.md)

Combine multiple resolvers into a single resolver

## Parameters

• **resolverList**: [`Resolver`](../interfaces/Resolver.md)[] = `[]`

The resolvers to combine

• **options**: [`CombineResolversOptions`](../type-aliases/CombineResolversOptions.md) = `{}`

Options for the combined resolver

## Returns

[`CombinedResolver`](../interfaces/CombinedResolver.md)

The combined resolver

## Example

```js
import { MemoryStore } from '@twine-protocol/twine-core'
const store1 = new MemoryStore()
const store2 = new MemoryStore()

store2.save(someChain) // exists in store2 but not store1

const combined = combineResolvers([store1, store2])
const { chain } = await combined.resolve({ chain: someChain.cid })
console.log(chain) // someChain
```

## Defined in

[packages/twine-core/src/resolver/combine.ts:154](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/resolver/combine.ts#L154)
