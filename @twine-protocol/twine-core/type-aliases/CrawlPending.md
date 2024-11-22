[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / CrawlPending

# Type Alias: CrawlPending

> **CrawlPending**: `object` & [`ResolvePulseQuery`](ResolvePulseQuery.md) & [`CrawlPathContainer`](CrawlPathContainer.md)

An object containing a load function that represents a pending crawl result

## Type declaration

### load()

> **load**: (`resolver`, `options`?) => `Promise`\<[`CrawlResult`](CrawlResult.md)\>

Loads the pending result using a resolver

#### Parameters

• **resolver**: [`Resolver`](../interfaces/Resolver.md)

• **options?**: [`LoaderOptions`](LoaderOptions.md)

#### Returns

`Promise`\<[`CrawlResult`](CrawlResult.md)\>

## Defined in

[packages/twine-core/src/crawl.ts:51](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/crawl.ts#L51)
