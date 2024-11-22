[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / CrawlGuide

# Type Alias: CrawlGuide()

> **CrawlGuide**: (`q`) => [`ResolvePulseQueryStrict`](ResolvePulseQueryStrict.md)[]

Crawl Guide

A crawl guide directs the crawl task by specifying the next
pulses to visit.

## Parameters

• **q**: [`FulfilledCrawlResult`](FulfilledCrawlResult.md)

## Returns

[`ResolvePulseQueryStrict`](ResolvePulseQueryStrict.md)[]

## Example

```js
// a guide that directs the crawl along one chain
const crawlAlong: CrawlGuide = ({ pulse, chain }) => {
 return [{ chain, pulse: pulse.value.content.links[0] }]
})
```

## Defined in

[packages/twine-core/src/crawl.ts:84](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/crawl.ts#L84)
