[@twine-protocol/twine-core](../README.md) / [Exports](../modules.md) / Store

# Interface: Store

A store that can fetch and save twines

## Hierarchy

- [`Resolver`](Resolver.md)

  ↳ **`Store`**

## Implemented by

- [`MemoryStore`](../classes/MemoryStore.md)

## Table of contents

### Methods

- [chains](Store.md#chains)
- [delete](Store.md#delete)
- [fetch](Store.md#fetch)
- [has](Store.md#has)
- [pulses](Store.md#pulses)
- [resolve](Store.md#resolve)
- [resolveIndex](Store.md#resolveindex)
- [resolveLatest](Store.md#resolvelatest)
- [save](Store.md#save)
- [saveMany](Store.md#savemany)

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

#### Inherited from

[Resolver](Resolver.md).[chains](Resolver.md#chains)

#### Defined in

[packages/twine-core/src/resolver/types.ts:324](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L324)

___

### delete

▸ **delete**(`cid`): [`Awaitable`](../modules.md#awaitable)\<`void`\>

Delete a twine from storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | [`IntoCid`](../modules.md#intocid) |

#### Returns

[`Awaitable`](../modules.md#awaitable)\<`void`\>

#### Defined in

[packages/twine-core/src/store/types.ts:32](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/types.ts#L32)

___

### fetch

▸ **fetch**(`cid`): [`Awaitable`](../modules.md#awaitable)\<``null`` \| [`Twine`](../classes/Twine.md)\<[`TwineValue`](../modules.md#twinevalue)\>\>

Fetch a twine from storage, returning null if it is not found

it is NOT expected that the twine signature is checked,
that is for the [Resolver](Resolver.md) to do.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | [`IntoCid`](../modules.md#intocid) |

#### Returns

[`Awaitable`](../modules.md#awaitable)\<``null`` \| [`Twine`](../classes/Twine.md)\<[`TwineValue`](../modules.md#twinevalue)\>\>

#### Defined in

[packages/twine-core/src/store/types.ts:20](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/types.ts#L20)

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

#### Inherited from

[Resolver](Resolver.md).[has](Resolver.md#has)

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

#### Inherited from

[Resolver](Resolver.md).[pulses](Resolver.md#pulses)

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

#### Inherited from

[Resolver](Resolver.md).[resolve](Resolver.md#resolve)

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

#### Inherited from

[Resolver](Resolver.md).[resolve](Resolver.md#resolve)

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

#### Inherited from

[Resolver](Resolver.md).[resolveIndex](Resolver.md#resolveindex)

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

#### Inherited from

[Resolver](Resolver.md).[resolveLatest](Resolver.md#resolvelatest)

#### Defined in

[packages/twine-core/src/resolver/types.ts:260](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L260)

___

### save

▸ **save**(`twine`): [`Awaitable`](../modules.md#awaitable)\<`void`\>

Save a twine to storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `twine` | [`Twine`](../classes/Twine.md)\<[`TwineValue`](../modules.md#twinevalue)\> |

#### Returns

[`Awaitable`](../modules.md#awaitable)\<`void`\>

#### Defined in

[packages/twine-core/src/store/types.ts:24](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/types.ts#L24)

___

### saveMany

▸ **saveMany**(`twines`): [`Awaitable`](../modules.md#awaitable)\<`void`\>

Save many twines to storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `twines` | [`AnyIterable`](../modules.md#anyiterable)\<[`Twine`](../classes/Twine.md)\<[`TwineValue`](../modules.md#twinevalue)\>\> |

#### Returns

[`Awaitable`](../modules.md#awaitable)\<`void`\>

#### Defined in

[packages/twine-core/src/store/types.ts:28](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/types.ts#L28)
