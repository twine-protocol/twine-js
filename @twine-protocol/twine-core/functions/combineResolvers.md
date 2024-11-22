[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / combineResolvers

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

[packages/twine-core/src/resolver/combine.ts:153](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/combine.ts#L153)
