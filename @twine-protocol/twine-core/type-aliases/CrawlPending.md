[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / CrawlPending

# Type Alias: CrawlPending

> **CrawlPending**: `object` & [`ResolvePulseQuery`](ResolvePulseQuery.md) & [`CrawlPathContainer`](CrawlPathContainer.md)

An object containing a load function that represents a pending crawl result

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `load` | (`resolver`, `options`?) => `Promise`\<[`CrawlResult`](CrawlResult.md)\> | Loads the pending result using a resolver | [packages/twine-core/src/crawl.ts:53](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/crawl.ts#L53) |

## Defined in

[packages/twine-core/src/crawl.ts:51](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/crawl.ts#L51)
