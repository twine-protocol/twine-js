[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / crawl

# Function: crawl()

> **crawl**(`inputs`, `direct`?, `visited`?): `AsyncIterable`\<[`CrawlPending`](../type-aliases/CrawlPending.md)\>

Crawl the tapestry

This is the main function to use for crawling the tapestry. The idea
is to specify a starting pulse (or pulses) and a guide to direct the
crawl. There are several built-in guides that can be used, or you can
create your own.

The crawl won't load pulses until you call the `load` function on the
pending crawl result. This allows you to control the loading of pulses and
only load what you need.

The crawl will also track visited pulses so that it doesn't visit the same
pulse twice. Although loops are impossible in the tapestry, different chains can
contain links to the same pulse, so it's possible to visit the same pulse
without tracking visited pulses.

It's recommended to use an asyncIterable library (like
[streaming-iterables](https://github.com/reconbot/streaming-iterables))
to handle the async nature of the crawl. The `crawl` function returns an async
iterable that can use to iterate over the pending crawl results.

## Parameters

• **inputs**: [`MaybeIterable`](../type-aliases/MaybeIterable.md)\<[`Awaitable`](../type-aliases/Awaitable.md)\<[`IntoResolvePulseQuery`](../type-aliases/IntoResolvePulseQuery.md)\>\>

The starting pulse or pulses

• **direct?**: [`CrawlGuide`](../type-aliases/CrawlGuide.md) = `...`

The guide to use for crawling

• **visited?**: `Set`\<`string`\> = `...`

The Set object to use for tracking visited pulses

## Returns

`AsyncIterable`\<[`CrawlPending`](../type-aliases/CrawlPending.md)\>

- An async iterable of pending crawl results

## Example

```js
import { crawl, across } from '@twine-protocol/twine-core'
import { HttpResolver } from '@twine-protocol/twine-http-store'

const resolver = new HttpStore('https://someapi.io')
const start = { chain: 'chaincid', pulse: 'pulsecid' }

const limit = 100
const chains = new Map()
for await (const pending of crawl(start, across())) {
  if (path.length < limit) {
    const result = await pending.load(resolver)
    chains.set(result.chain.cid.toString(), result.chain)
  }
}
// we now have a list of chains within 100 steps
console.log(Array.from(chains.values()))
```

## Defined in

[packages/twine-core/src/crawl.ts:284](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/crawl.ts#L284)
