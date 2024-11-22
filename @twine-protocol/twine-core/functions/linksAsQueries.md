[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / linksAsQueries

# Function: linksAsQueries()

> **linksAsQueries**(`pulse`): [`ResolvePulseQueryStrict`](../type-aliases/ResolvePulseQueryStrict.md)[]

Converts a pulse's links array into a list of queries.

This is useful for resolving a pulse's links.

## Parameters

• **pulse**: [`Pulse`](../type-aliases/Pulse.md)

## Returns

[`ResolvePulseQueryStrict`](../type-aliases/ResolvePulseQueryStrict.md)[]

## Example

```js
const pulse = await resolve(pulseQuery)
const links = linksAsQueries(pulse)
const resolvedLinks = await Promise.all(links.map(q => resolve(q)))
```

## Defined in

[packages/twine-core/src/conversion.ts:245](https://github.com/twine-protocol/twine-js/blob/afcd6a4191783e38a824b15e0910dbcaa4196a95/packages/twine-core/src/conversion.ts#L245)
