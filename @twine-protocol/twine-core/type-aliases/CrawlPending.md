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

[packages/twine-core/src/crawl.ts:51](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/crawl.ts#L51)
