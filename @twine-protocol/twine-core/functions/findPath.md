[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / findPath

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

[packages/twine-core/src/crawl.ts:357](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/crawl.ts#L357)
