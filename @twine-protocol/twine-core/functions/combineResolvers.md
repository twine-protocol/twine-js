[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / combineResolvers

# Function: combineResolvers()

> **combineResolvers**(`resolverList`, `options`): [`CombinedResolver`](../interfaces/CombinedResolver.md)

Combine multiple resolvers into a single resolver

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `resolverList` | [`Resolver`](../interfaces/Resolver.md)[] | `[]` | The resolvers to combine |
| `options` | [`CombineResolversOptions`](../type-aliases/CombineResolversOptions.md) | `{}` | Options for the combined resolver |

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

[packages/twine-core/src/resolver/combine.ts:153](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/resolver/combine.ts#L153)