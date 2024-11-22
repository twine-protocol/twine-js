**@twine-protocol/twine-http-store v0.1.0** • **Docs**

***

[twine-js](../../index.md) / @twine-protocol/twine-http-store

# @twine-protocol/twine-http-store

This package contains [HttpStore](classes/HttpStore.md), an HTTP client that implements
the Store interface used to interact with a Twine HTTP API.

## Example

```js
const store = new HttpStore('https://example.com')
const { chain, pulse } = await store.resolveLatest("bafyreilskdjflksjdflksj...")
console.log(chain, pulse)
```

## Classes

| Class | Description |
| ------ | ------ |
| [HttpStore](classes/HttpStore.md) | An HTTP client that implements Store |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [HttpStoreOptions](type-aliases/HttpStoreOptions.md) | Options for the HTTP store |
