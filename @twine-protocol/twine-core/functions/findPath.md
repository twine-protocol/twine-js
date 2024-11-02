[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / findPath

# Function: findPath()

> **findPath**(`start`, `target`, `resolver`): `Promise`\<[`Path`](../type-aliases/Path.md) \| `null`\>

Find a path between two pulses

This function is a convenience function that uses the `crawl` function to
find a path between two pulses. It will return a path if one is found, or
null if no path is found.

## Parameters

• **start**: [`IntoResolvePulseQuery`](../type-aliases/IntoResolvePulseQuery.md)

The starting pulse, or a query for the starting pulse

• **target**: [`IntoResolvePulseQuery`](../type-aliases/IntoResolvePulseQuery.md)

The target pulse, or a query for the target pulse

• **resolver**: [`Resolver`](../interfaces/Resolver.md)

The resolver to use for resolving pulses

## Returns

`Promise`\<[`Path`](../type-aliases/Path.md) \| `null`\>

- A path if one is found, or null if no path is found

## Example

```js
import { findPath } from '@twine-protocol/twine-core'
import { HttpStore } from '@twine-protocol/twine-http-store'

const resolver = new HttpStore('https://someapi.io')
const start = { chain: 'chaincid', pulse: 'startpulsecid' }
const target = { chain: 'chaincid', pulse: 'targetpulsecid' }

const path = await findPath(start, target, resolver)
if (path) {
  console.log('Path found:', path)
} else {
  console.log('No path found')
}
```

## Defined in

[packages/twine-core/src/crawl.ts:355](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/crawl.ts#L355)
