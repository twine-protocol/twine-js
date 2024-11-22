[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / Resolver

# Interface: Resolver

Resolves a query into a chain or pulse

Resolvers are the primary way to fetch twines from somewhere. This
specifies a general interface for all resolvers.

Resolvers are expected to verify the signature of the resolved twine.

## See

[Store](Store.md)

## Example

```js
import { collect } from '@twine-protocol/twine-core'
const resolver = new MyResolver()
const chains = await collect(resolver.chains())
// resolve the latest pulse of the first chain
const resolution = await resolver.resolveLatest({ chain: chains[0] })
if (resolution.pulse) {
  // a verified pulse that is the latest this resolver knows of
  console.log('pulse', resolution.pulse)
}
```

## Extended by

- [`CombinedResolver`](CombinedResolver.md)
- [`Store`](Store.md)

## Methods

### resolve()

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<[`ChainResolution`](../type-aliases/ChainResolution.md)\>

Resolve a chain from a query

This is the main way to get a pulse or chain from somewhere
and have it automatically verified.

If the input is already a successful resolution, it will
be returned as is.

If the input is a chain or pulse, it will be resolved as
a chain or pulse resolution.

##### Parameters

• **query**: [`IntoResolveChainQuery`](../type-aliases/IntoResolveChainQuery.md)

The query to resolve

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

Options for the resolution

##### Returns

`Promise`\<[`ChainResolution`](../type-aliases/ChainResolution.md)\>

A chain or pulse resolution

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

##### Defined in

[packages/twine-core/src/resolver/types.ts:233](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/types.ts#L233)

#### resolve(query, options)

> **resolve**(`query`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve a pulse (with its chain) from a query

##### Parameters

• **query**: [`IntoResolvePulseQuery`](../type-aliases/IntoResolvePulseQuery.md)

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

##### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

##### Defined in

[packages/twine-core/src/resolver/types.ts:237](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/types.ts#L237)

***

### resolveLatest()

> **resolveLatest**(`chain`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve the latest pulse of a chain

#### Parameters

• **chain**: [`IntoCid`](../type-aliases/IntoCid.md)

The chain CID or chain itself to resolve the latest pulse from

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

Options for the resolution

#### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

A pulse resolution

#### Examples

```js
const resolution = await resolver.resolveLatest('bafybeib3...')
if (resolution.pulse) {
  console.log('pulse', resolution.pulse)
}
```

```js
const { chain } = await resolver.resolve({ chain: 'bafybeib3...' })
const resolution = await resolver.resolveLatest(chain)
```

#### Defined in

[packages/twine-core/src/resolver/types.ts:260](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/types.ts#L260)

***

### resolveIndex()

> **resolveIndex**(`chain`, `index`, `options`?): `Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

Resolve a pulse by index

#### Parameters

• **chain**: [`IntoCid`](../type-aliases/IntoCid.md)

The chain CID or chain itself to resolve the pulse from

• **index**: `number`

The index of the pulse to resolve

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

Options for the resolution

#### Returns

`Promise`\<[`PulseResolution`](../type-aliases/PulseResolution.md)\>

A pulse resolution

#### Example

```js
const resolution = await resolver.resolveIndex('bafybeib3...', 42)
if (resolution.pulse) {
  console.log('pulse', resolution.pulse)
}
```

#### Defined in

[packages/twine-core/src/resolver/types.ts:278](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/types.ts#L278)

***

### has()

> **has**(`cid`): [`Awaitable`](../type-aliases/Awaitable.md)\<`boolean`\>

Check if a cid can be resolved

#### Parameters

• **cid**: [`IntoCid`](../type-aliases/IntoCid.md)

The CID to check

#### Returns

[`Awaitable`](../type-aliases/Awaitable.md)\<`boolean`\>

True if the CID can be resolved, false otherwise

#### Example

```js
const exists = await resolver.has('bafybeib3...')
if (exists) {
  console.log('chain exists')
} else {
  console.log('chain does not exist')
}
```

#### Defined in

[packages/twine-core/src/resolver/types.ts:295](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/types.ts#L295)

***

### pulses()

> **pulses**(`chain`, `start`?, `options`?): `AsyncGenerator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| `Generator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| [`AnyIterable`](../type-aliases/AnyIterable.md)\<[`Pulse`](../type-aliases/Pulse.md)\>

Get the pulses of a chain

#### Parameters

• **chain**: [`IntoCid`](../type-aliases/IntoCid.md)

The chain CID or chain itself to get the pulses from

• **start?**: `number` \| [`IntoCid`](../type-aliases/IntoCid.md)

The index or CID of the pulse to start from

• **options?**: [`ResolveOptions`](../type-aliases/ResolveOptions.md)

Options for the resolution

#### Returns

`AsyncGenerator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| `Generator`\<[`Pulse`](../type-aliases/Pulse.md), `any`, `any`\> \| [`AnyIterable`](../type-aliases/AnyIterable.md)\<[`Pulse`](../type-aliases/Pulse.md)\>

An sync/async iterable of pulses

#### Example

```js
// loop through pulses and print indices
for await (const pulse of resolver.pulses('bafybeib3...')) {
  console.log('pulse', pulse.value.content.index)
}
```

#### Defined in

[packages/twine-core/src/resolver/types.ts:313](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/types.ts#L313)

***

### chains()

> **chains**(): `AsyncGenerator`\<[`Chain`](../type-aliases/Chain.md), `any`, `any`\> \| `Generator`\<[`Chain`](../type-aliases/Chain.md), `any`, `any`\> \| [`AnyIterable`](../type-aliases/AnyIterable.md)\<[`Chain`](../type-aliases/Chain.md)\>

Get the chains that are known to the resolver

#### Returns

`AsyncGenerator`\<[`Chain`](../type-aliases/Chain.md), `any`, `any`\> \| `Generator`\<[`Chain`](../type-aliases/Chain.md), `any`, `any`\> \| [`AnyIterable`](../type-aliases/AnyIterable.md)\<[`Chain`](../type-aliases/Chain.md)\>

An sync/async iterable of chains

#### Example

```js
const chains = await collect(resolver.chains())
```

#### Defined in

[packages/twine-core/src/resolver/types.ts:324](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-core/src/resolver/types.ts#L324)
