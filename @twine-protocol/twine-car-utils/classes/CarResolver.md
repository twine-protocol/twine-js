[**@twine-protocol/twine-car-utils v0.0.3**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-car-utils](../README.md) / CarResolver

# Class: CarResolver

A Twine Resolver that reads from a CARv2 Reader

## Example

```js
import { CarReader } from '@ipld/car'
const reader = await CarReader.fromBytes(bytes)
const resolver = new CarResolver(reader)
```

## Implements

- `Resolver`

## Constructors

### new CarResolver()

> **new CarResolver**(`reader`): [`CarResolver`](CarResolver.md)

Create a new CarResolver

#### Parameters

• **reader**: [`Reader`](../type-aliases/Reader.md)

#### Returns

[`CarResolver`](CarResolver.md)

#### Defined in

[resolver.ts:32](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/resolver.ts#L32)

## Methods

### chains()

> **chains**(): `AsyncGenerator`\<`Chain`, `void`, `unknown`\>

#### Returns

`AsyncGenerator`\<`Chain`, `void`, `unknown`\>

#### See

[Resolver.chains](https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#chains)

#### Implementation of

`Resolver.chains`

#### Defined in

[resolver.ts:59](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/resolver.ts#L59)

***

### close()

> **close**(): `void`

Close the reader

#### Returns

`void`

#### Defined in

[resolver.ts:162](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/resolver.ts#L162)

***

### has()

> **has**(`cid`): `Promise`\<`boolean`\>

#### Parameters

• **cid**: `IntoCid`

#### Returns

`Promise`\<`boolean`\>

#### See

{@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#has | Resolver.has}

#### Implementation of

`Resolver.has`

#### Defined in

[resolver.ts:135](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/resolver.ts#L135)

***

### pulses()

> **pulses**(`chain`, `start`?, `options`?): `AsyncGenerator`\<`Pulse`, `void`, `unknown`\>

#### Parameters

• **chain**: `IntoCid`

• **start?**: `number` \| `IntoCid`

• **options?**: `ResolveOptions`

#### Returns

`AsyncGenerator`\<`Pulse`, `void`, `unknown`\>

#### See

{@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#pulses | Resolver.pulses}

#### Implementation of

`Resolver.pulses`

#### Defined in

[resolver.ts:142](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/resolver.ts#L142)

***

### resolve()

#### See

{@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#resolve | Resolver.resolve}

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<`ChainResolution`\>

Resolve a chain from a query

This is the main way to get a pulse or chain from somewhere
and have it automatically verified.

If the input is already a successful resolution, it will
be returned as is.

If the input is a chain or pulse, it will be resolved as
a chain or pulse resolution.

##### Parameters

• **query**: `IntoResolveChainQuery`

The query to resolve

• **options?**: `ResolveOptions`

Options for the resolution

##### Returns

`Promise`\<`ChainResolution`\>

A chain or pulse resolution

##### See

{@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#resolve | Resolver.resolve}

##### Examples

```js
const { chain } = await resolver.resolve({ chain: 'bafybeib3...' })
if (chain) {
  console.log('chain', chain)
} else {
  console.log('no chain')
}
```

```js
const { chain, pulse } = await resolver.resolve({
  chain: 'bafybeib3...',
  pulse: 'bafybeib3...'
})

if (pulse) {
  console.log('pulse', pulse)
} else {
  console.log('no pulse')
}
```

##### Implementation of

`Resolver.resolve`

##### Defined in

[resolver.ts:87](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/resolver.ts#L87)

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<`PulseResolution`\>

Resolve a pulse (with its chain) from a query

##### Parameters

• **query**: `IntoResolvePulseQuery`

• **options?**: `ResolveOptions`

##### Returns

`Promise`\<`PulseResolution`\>

##### See

{@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#resolve | Resolver.resolve}

##### Implementation of

`Resolver.resolve`

##### Defined in

[resolver.ts:88](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/resolver.ts#L88)

***

### resolveIndex()

> **resolveIndex**(`chainCid`, `index`, `options`?): `Promise`\<`PulseResolution`\>

#### Parameters

• **chainCid**: `IntoCid`

• **index**: `number`

• **options?**: `ResolveOptions`

#### Returns

`Promise`\<`PulseResolution`\>

#### See

{@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#resolveIndex | Resolver.resolveIndex}

#### Implementation of

`Resolver.resolveIndex`

#### Defined in

[resolver.ts:113](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/resolver.ts#L113)

***

### resolveLatest()

> **resolveLatest**(`chainCid`, `options`?): `Promise`\<`PulseResolution`\>

#### Parameters

• **chainCid**: `IntoCid`

• **options?**: `ResolveOptions`

#### Returns

`Promise`\<`PulseResolution`\>

#### See

{@https://github.com/twine-protocol/twine-js/blob/master/packages/twine-core/docs/interfaces/Resolver.md#resolveLatest | Resolver.resolveLatest}

#### Implementation of

`Resolver.resolveLatest`

#### Defined in

[resolver.ts:102](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/resolver.ts#L102)
