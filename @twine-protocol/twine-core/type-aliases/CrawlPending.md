[**@twine-protocol/twine-core v0.1.0**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-core](../README.md) / CrawlPending

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

[packages/twine-core/src/crawl.ts:51](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-core/src/crawl.ts#L51)
