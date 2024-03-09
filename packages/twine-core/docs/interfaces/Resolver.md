[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / Resolver

# Interface: Resolver

Resolves a query into a chain or pulse

Resolvers are the primary way to fetch twines from somewhere. This
specifies a general interface for all resolvers.

Resolvers are expected to verify the signature of the resolved twine.

**`See`**

[Store](Store.md)

**`Example`**

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

## Hierarchy

- **`Resolver`**

  ↳ [`CombinedResolver`](CombinedResolver.md)

  ↳ [`Store`](Store.md)

## Table of contents

### Methods

- [chains](Resolver.md#chains)
- [has](Resolver.md#has)
- [pulses](Resolver.md#pulses)
- [resolve](Resolver.md#resolve)
- [resolveIndex](Resolver.md#resolveindex)
- [resolveLatest](Resolver.md#resolvelatest)

## Methods

### chains

▸ **chains**(): `AsyncGenerator`\<[`Chain`](../modules.md#chain), `any`, `unknown`\> \| `Generator`\<[`Chain`](../modules.md#chain), `any`, `unknown`\> \| [`AnyIterable`](../modules.md#anyiterable)\<[`Chain`](../modules.md#chain)\>

Get the chains that are known to the resolver

#### Returns

`AsyncGenerator`\<[`Chain`](../modules.md#chain), `any`, `unknown`\> \| `Generator`\<[`Chain`](../modules.md#chain), `any`, `unknown`\> \| [`AnyIterable`](../modules.md#anyiterable)\<[`Chain`](../modules.md#chain)\>

An sync/async iterable of chains

**`Example`**

```js
const chains = await collect(resolver.chains())
```

#### Defined in

[packages/twine-core/src/resolver/types.ts:324](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L324)

___

### has

▸ **has**(`cid`): [`Awaitable`](../modules.md#awaitable)\<`boolean`\>

Check if a cid can be resolved

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cid` | [`IntoCid`](../modules.md#intocid) | The CID to check |

#### Returns

[`Awaitable`](../modules.md#awaitable)\<`boolean`\>

True if the CID can be resolved, false otherwise

**`Example`**

```js
const exists = await resolver.has('bafybeib3...')
if (exists) {
  console.log('chain exists')
} else {
  console.log('chain does not exist')
}
```

#### Defined in

[packages/twine-core/src/resolver/types.ts:295](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L295)

___

### pulses

▸ **pulses**(`chain`, `start?`, `options?`): `AsyncGenerator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| `Generator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| [`AnyIterable`](../modules.md#anyiterable)\<[`Pulse`](../modules.md#pulse)\>

Get the pulses of a chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`IntoCid`](../modules.md#intocid) | The chain CID or chain itself to get the pulses from |
| `start?` | `number` \| [`IntoCid`](../modules.md#intocid) | The index or CID of the pulse to start from |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) | Options for the resolution |

#### Returns

`AsyncGenerator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| `Generator`\<[`Pulse`](../modules.md#pulse), `any`, `unknown`\> \| [`AnyIterable`](../modules.md#anyiterable)\<[`Pulse`](../modules.md#pulse)\>

An sync/async iterable of pulses

**`Example`**

```js
// loop through pulses and print indices
for await (const pulse of resolver.pulses('bafybeib3...')) {
  console.log('pulse', pulse.value.content.index)
}
```

#### Defined in

[packages/twine-core/src/resolver/types.ts:313](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L313)

___

### resolve

▸ **resolve**(`query`, `options?`): `Promise`\<[`ChainResolution`](../modules.md#chainresolution)\>

Resolve a chain from a query

This is the main way to get a pulse or chain from somewhere
and have it automatically verified.

If the input is already a successful resolution, it will
be returned as is.

If the input is a chain or pulse, it will be resolved as
a chain or pulse resolution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`IntoResolveChainQuery`](../modules.md#intoresolvechainquery) | The query to resolve |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) | Options for the resolution |

#### Returns

`Promise`\<[`ChainResolution`](../modules.md#chainresolution)\>

A chain or pulse resolution

**`Example`**

```js
const { chain } = await resolver.resolve({ chain: 'bafybeib3...' })
if (chain) {
  console.log('chain', chain)
} else {
  console.log('no chain')
}
```

**`Example`**

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

#### Defined in

[packages/twine-core/src/resolver/types.ts:233](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L233)

▸ **resolve**(`query`, `options?`): `Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

Resolve a pulse (with its chain) from a query

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`IntoResolvePulseQuery`](../modules.md#intoresolvepulsequery) |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) |

#### Returns

`Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

#### Defined in

[packages/twine-core/src/resolver/types.ts:237](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L237)

___

### resolveIndex

▸ **resolveIndex**(`chain`, `index`, `options?`): `Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

Resolve a pulse by index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`IntoCid`](../modules.md#intocid) | The chain CID or chain itself to resolve the pulse from |
| `index` | `number` | The index of the pulse to resolve |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) | Options for the resolution |

#### Returns

`Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

A pulse resolution

**`Example`**

```js
const resolution = await resolver.resolveIndex('bafybeib3...', 42)
if (resolution.pulse) {
  console.log('pulse', resolution.pulse)
}
```

#### Defined in

[packages/twine-core/src/resolver/types.ts:278](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L278)

___

### resolveLatest

▸ **resolveLatest**(`chain`, `options?`): `Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

Resolve the latest pulse of a chain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`IntoCid`](../modules.md#intocid) | The chain CID or chain itself to resolve the latest pulse from |
| `options?` | [`ResolveOptions`](../modules.md#resolveoptions) | Options for the resolution |

#### Returns

`Promise`\<[`PulseResolution`](../modules.md#pulseresolution)\>

A pulse resolution

**`Example`**

```js
const resolution = await resolver.resolveLatest('bafybeib3...')
if (resolution.pulse) {
  console.log('pulse', resolution.pulse)
}
```

**`Example`**

```js
const { chain } = await resolver.resolve({ chain: 'bafybeib3...' })
const resolution = await resolver.resolveLatest(chain)
```

#### Defined in

[packages/twine-core/src/resolver/types.ts:260](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L260)
