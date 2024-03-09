[@twine-protocol/twine-core](README.md) / Exports

# @twine-protocol/twine-core

## Table of contents

### Classes

- [CID](classes/CID.md)
- [CacheMap](classes/CacheMap.md)
- [ChainResolver](classes/ChainResolver.md)
- [Twine](classes/Twine.md)

### Interfaces

- [CombinedResolver](interfaces/CombinedResolver.md)
- [JWK](interfaces/JWK.md)
- [ResolveLatestOptionsCombined](interfaces/ResolveLatestOptionsCombined.md)
- [ResolveOptionsCombined](interfaces/ResolveOptionsCombined.md)
- [Resolver](interfaces/Resolver.md)
- [Signer](interfaces/Signer.md)

### Type Aliases

- [AnyIterable](modules.md#anyiterable)
- [AnyMap](modules.md#anymap)
- [Awaitable](modules.md#awaitable)
- [CacheOptions](modules.md#cacheoptions)
- [Chain](modules.md#chain)
- [ChainContent](modules.md#chaincontent)
- [ChainResolution](modules.md#chainresolution)
- [ChainStorageMeta](modules.md#chainstoragemeta)
- [ChainValue](modules.md#chainvalue)
- [CombineResolversOptions](modules.md#combineresolversoptions)
- [CombinedChainResolution](modules.md#combinedchainresolution)
- [CombinedPulseResolution](modules.md#combinedpulseresolution)
- [FetchChainQuery](modules.md#fetchchainquery)
- [FetchPulseQuery](modules.md#fetchpulsequery)
- [FulfilledChainResolution](modules.md#fulfilledchainresolution)
- [FulfilledPulseResolution](modules.md#fulfilledpulseresolution)
- [FulfilledResolution](modules.md#fulfilledresolution)
- [IntoCid](modules.md#intocid)
- [IntoResolveChainQuery](modules.md#intoresolvechainquery)
- [IntoResolvePulseQuery](modules.md#intoresolvepulsequery)
- [Mixin](modules.md#mixin)
- [Pulse](modules.md#pulse)
- [PulseContent](modules.md#pulsecontent)
- [PulseIndex](modules.md#pulseindex)
- [PulseResolution](modules.md#pulseresolution)
- [PulseValue](modules.md#pulsevalue)
- [Resolution](modules.md#resolution)
- [ResolveCallers](modules.md#resolvecallers)
- [ResolveChainQuery](modules.md#resolvechainquery)
- [ResolveChainQueryStrict](modules.md#resolvechainquerystrict)
- [ResolveOptions](modules.md#resolveoptions)
- [ResolvePulseQuery](modules.md#resolvepulsequery)
- [ResolvePulseQueryStrict](modules.md#resolvepulsequerystrict)
- [ResolveQueryStrict](modules.md#resolvequerystrict)
- [Signature](modules.md#signature)
- [TwineContent](modules.md#twinecontent)
- [TwineValue](modules.md#twinevalue)
- [UnfulfilledChainResolution](modules.md#unfulfilledchainresolution)
- [UnfulfilledPulseResolution](modules.md#unfulfilledpulseresolution)
- [UnfulfilledResolution](modules.md#unfulfilledresolution)

### Functions

- [asyncThrottle](modules.md#asyncthrottle)
- [combineResolvers](modules.md#combineresolvers)
- [memoized](modules.md#memoized)
- [resolveHelper](modules.md#resolvehelper)
- [towards](modules.md#towards)

### Cache

- [TwineCache](classes/TwineCache.md)
- [CACHE\_SINGLETON](modules.md#cache_singleton)

### Checks

- [isAnyIterable](modules.md#isanyiterable)
- [isAsyncIterable](modules.md#isasynciterable)
- [isChain](modules.md#ischain)
- [isChainContent](modules.md#ischaincontent)
- [isChainValue](modules.md#ischainvalue)
- [isCid](modules.md#iscid)
- [isFulfilledChainResolution](modules.md#isfulfilledchainresolution)
- [isFulfilledPulseResolution](modules.md#isfulfilledpulseresolution)
- [isISODate](modules.md#isisodate)
- [isInteger](modules.md#isinteger)
- [isIterable](modules.md#isiterable)
- [isLinks](modules.md#islinks)
- [isMixins](modules.md#ismixins)
- [isPulse](modules.md#ispulse)
- [isPulseContent](modules.md#ispulsecontent)
- [isPulseQuery](modules.md#ispulsequery)
- [isPulseValue](modules.md#ispulsevalue)
- [isTwine](modules.md#istwine)
- [isTwineValue](modules.md#istwinevalue)
- [isUnsignedInteger](modules.md#isunsignedinteger)

### Compare

- [mixinDiff](modules.md#mixindiff)

### Conversion

- [asCid](modules.md#ascid)
- [asMixin](modules.md#asmixin)
- [asQuery](modules.md#asquery)
- [bytesToHex](modules.md#bytestohex)
- [coerceCid](modules.md#coercecid)
- [coerceQuery](modules.md#coercequery)
- [collect](modules.md#collect)
- [fromBytes](modules.md#frombytes)
- [fromJSON](modules.md#fromjson)
- [hex2bytes](modules.md#hex2bytes)
- [linksAsQueries](modules.md#linksasqueries)

### CrawlGuide

- [across](modules.md#across)
- [along](modules.md#along)
- [randomWalk](modules.md#randomwalk)
- [spread](modules.md#spread)
- [within](modules.md#within)

### Crawling

- [CrawlGuide](modules.md#crawlguide)
- [CrawlPathContainer](modules.md#crawlpathcontainer)
- [CrawlPending](modules.md#crawlpending)
- [CrawlResult](modules.md#crawlresult)
- [FulfilledCrawlResult](modules.md#fulfilledcrawlresult)
- [LoaderOptions](modules.md#loaderoptions)
- [MaybeIterable](modules.md#maybeiterable)
- [Path](modules.md#path)
- [across](modules.md#across)
- [along](modules.md#along)
- [crawl](modules.md#crawl)
- [findPath](modules.md#findpath)
- [randomWalk](modules.md#randomwalk)
- [spread](modules.md#spread)
- [within](modules.md#within)

### Errors

- [IncompleteResolution](classes/IncompleteResolution.md)
- [InvalidSignature](classes/InvalidSignature.md)
- [InvalidTwineData](classes/InvalidTwineData.md)
- [TwineError](classes/TwineError.md)

### Internal

- [getContentDigest](modules.md#getcontentdigest)
- [verifySignature](modules.md#verifysignature)

### Skiplist

- [getLayerPos](modules.md#getlayerpos)
- [skipList](modules.md#skiplist)

### Storage

- [MemoryStore](classes/MemoryStore.md)
- [TwineCache](classes/TwineCache.md)
- [Store](interfaces/Store.md)
- [CACHE\_SINGLETON](modules.md#cache_singleton)

## Internal

### asyncThrottle

▸ **asyncThrottle**\<`T`\>(`fn`, `delay?`): (...`args`: `any`[]) => `Promise`\<`T`\>

Throttle an async function call

Within the delay interval, the same promise is returned

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`x`: `any`[]) => `Promise`\<`T`\> |
| `delay?` | `number` |

#### Returns

`fn`

▸ (`...args`): `Promise`\<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Promise`\<`T`\>

#### Defined in

[packages/twine-core/src/resolver/helpers.ts:13](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/helpers.ts#L13)

___

### memoized

▸ **memoized**\<`T`\>(`cache`, `key`, `fn`, `...args`): `Promise`\<`T`\>

memoize an async function call so that while it is pending, the same call is not made again

This is used by the [ResolveCallers.requestCache](modules.md#requestcache) to avoid making
multiple requests for the same twine.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cache` | `Map`\<`string`, `Promise`\<`T`\>\> | The cache to use |
| `key` | `string` | The key to use |
| `fn` | (...`args`: `any`[]) => [`Awaitable`](modules.md#awaitable)\<`T`\> | The function to call |
| `...args` | `any`[] | The arguments to pass to the function |

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/twine-core/src/resolver/helpers.ts:45](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/helpers.ts#L45)

## Other

### AnyIterable

Ƭ **AnyIterable**\<`T`\>: `Iterable`\<`T`\> \| `AsyncIterable`\<`T`\>

An async or sycn iterable

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/twine-core/src/types.ts:13](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L13)

___

### AnyMap

Ƭ **AnyMap**: `Object`

Generic map

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[packages/twine-core/src/types.ts:30](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L30)

___

### Awaitable

Ƭ **Awaitable**\<`T`\>: `T` \| `Promise`\<`T`\>

Something that can be `await`ed

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/twine-core/src/types.ts:9](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L9)

___

### CacheOptions

Ƭ **CacheOptions**: `Object`

Cache options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxSize?` | `number` | The maximum number of items to keep in the cache Defaults to 10000, set to 0 for no limit **`Default`** ```ts 10000 ``` |

#### Defined in

[packages/twine-core/src/store/cache-helpers.ts:4](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/cache-helpers.ts#L4)

___

### Chain

Ƭ **Chain**\<`M`\>: [`Twine`](classes/Twine.md)\<[`ChainValue`](modules.md#chainvalue)\<`M`\>\>

A Twine that is a Chain

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`AnyMap`](modules.md#anymap) = [`AnyMap`](modules.md#anymap) |

#### Defined in

[packages/twine-core/src/twine.ts:10](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L10)

___

### ChainContent

Ƭ **ChainContent**\<`M`\>: `Object`

Chain metadata

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`AnyMap`](modules.md#anymap) = [`AnyMap`](modules.md#anymap) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`JWK`](interfaces/JWK.md) | Public key in JWK format |
| `links_radix` | `number` | Radix used for links list |
| `meta` | `M` | General Metadata |
| `mixins` | [`Mixin`](modules.md#mixin)[] | List of mixins |
| `source` | `string` | Short identifier to denote the source producing this chain |
| `specification` | `string` | Twine specification |

#### Defined in

[packages/twine-core/src/types.ts:37](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L37)

___

### ChainStorageMeta

Ƭ **ChainStorageMeta**: `Object`

Metadata used by the memory store to keep track of chains and pulses

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainCid` | [`CID`](classes/CID.md) | The CID of the chain |
| `indexMap` | [`CacheMap`](classes/CacheMap.md)\<`number`, [`Pulse`](modules.md#pulse)\> | A map of pulse index to pulse CID |
| `latestIndex` | `number` | The latest index of the chain |

#### Defined in

[packages/twine-core/src/store/memory-store.ts:16](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L16)

___

### ChainValue

Ƭ **ChainValue**\<`M`\>: `Object`

Value field for chains

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`AnyMap`](modules.md#anymap) = [`AnyMap`](modules.md#anymap) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | [`ChainContent`](modules.md#chaincontent)\<`M`\> | Chain content |
| `signature` | [`Signature`](modules.md#signature) | Chain signature |

#### Defined in

[packages/twine-core/src/types.ts:77](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L77)

___

### CrawlGuide

Ƭ **CrawlGuide**: (`q`: [`FulfilledCrawlResult`](modules.md#fulfilledcrawlresult)) => [`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)[]

Crawl Guide

A crawl guide directs the crawl task by specifying the next
pulses to visit.

**`Example`**

```js
// a guide that directs the crawl along one chain
const crawlAlong: CrawlGuide = ({ pulse, chain }) => {
 return [{ chain, pulse: pulse.value.content.links[0] }]
})
```

#### Type declaration

▸ (`q`): [`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`FulfilledCrawlResult`](modules.md#fulfilledcrawlresult) |

##### Returns

[`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)[]

#### Defined in

[packages/twine-core/src/crawl.ts:84](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L84)

___

### CrawlPathContainer

Ƭ **CrawlPathContainer**: `Object`

An object that contains a path

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`Path`](modules.md#path) | The path taken to get to this result |

#### Defined in

[packages/twine-core/src/crawl.ts:31](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L31)

___

### CrawlPending

Ƭ **CrawlPending**: \{ `load`: (`resolver`: [`Resolver`](interfaces/Resolver.md), `options?`: [`LoaderOptions`](modules.md#loaderoptions)) => `Promise`\<[`CrawlResult`](modules.md#crawlresult)\>  } & [`ResolvePulseQuery`](modules.md#resolvepulsequery) & [`CrawlPathContainer`](modules.md#crawlpathcontainer)

An object containing a load function that represents a pending crawl result

#### Defined in

[packages/twine-core/src/crawl.ts:51](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L51)

___

### CrawlResult

Ƭ **CrawlResult**: [`PulseResolution`](modules.md#pulseresolution) & [`CrawlPathContainer`](modules.md#crawlpathcontainer)

The result of a crawl that is a pulse resolution with a path

#### Defined in

[packages/twine-core/src/crawl.ts:61](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L61)

___

### FulfilledCrawlResult

Ƭ **FulfilledCrawlResult**: [`FulfilledPulseResolution`](modules.md#fulfilledpulseresolution) & [`CrawlPathContainer`](modules.md#crawlpathcontainer)

The result of a crawl that is a fulfilled pulse resolution with a path

#### Defined in

[packages/twine-core/src/crawl.ts:67](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L67)

___

### IntoCid

Ƭ **IntoCid**: [`CID`](classes/CID.md) \| `string` \| `Uint8Array` \| [`Twine`](classes/Twine.md)\<[`TwineValue`](modules.md#twinevalue)\>

Any type that can be coerced into a CID

#### Defined in

[packages/twine-core/src/types.ts:97](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L97)

___

### LoaderOptions

Ƭ **LoaderOptions**: \{ `throwUnresolvable?`: `boolean`  } & [`ResolveOptions`](modules.md#resolveoptions)

Options for the loader

#### Defined in

[packages/twine-core/src/crawl.ts:41](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L41)

___

### MaybeIterable

Ƭ **MaybeIterable**\<`T`\>: `Iterable`\<`T`\> \| `T`

Something that could be a value or an iterator over that value type

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/twine-core/src/crawl.ts:17](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L17)

___

### Mixin

Ƭ **Mixin**: `Object`

Mixins store the information about links between chains

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`CID`](classes/CID.md) | CID of the other chain |
| `value` | [`CID`](classes/CID.md) | CID of the other chain's pulse |

#### Defined in

[packages/twine-core/src/types.ts:22](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L22)

___

### Path

Ƭ **Path**: [`FulfilledPulseResolution`](modules.md#fulfilledpulseresolution)[]

A path is a list of resolved pulse resolutions

#### Defined in

[packages/twine-core/src/crawl.ts:24](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L24)

___

### Pulse

Ƭ **Pulse**\<`P`\>: [`Twine`](classes/Twine.md)\<[`PulseValue`](modules.md#pulsevalue)\<`P`\>\>

A Twine that is a Pulse

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyMap`](modules.md#anymap) = [`AnyMap`](modules.md#anymap) |

#### Defined in

[packages/twine-core/src/twine.ts:12](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/twine.ts#L12)

___

### PulseContent

Ƭ **PulseContent**\<`P`\>: `Object`

Pulse

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyMap`](modules.md#anymap) = [`AnyMap`](modules.md#anymap) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`CID`](classes/CID.md) | Chain CID this pulse belongs to |
| `index` | [`PulseIndex`](modules.md#pulseindex) | Index of this pulse |
| `links` | [`CID`](classes/CID.md)[] | List of links on the same chain |
| `mixins` | [`Mixin`](modules.md#mixin)[] | List of mixins to other chains |
| `payload` | `P` | User specified payload |
| `source` | `string` | Short identifier to denote the source producing this pulse |

#### Defined in

[packages/twine-core/src/types.ts:58](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L58)

___

### PulseIndex

Ƭ **PulseIndex**: `number`

Pulse index (block height)

#### Defined in

[packages/twine-core/src/types.ts:53](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L53)

___

### PulseValue

Ƭ **PulseValue**\<`P`\>: `Object`

Value field for pulses

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`AnyMap`](modules.md#anymap) = [`AnyMap`](modules.md#anymap) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | [`PulseContent`](modules.md#pulsecontent)\<`P`\> | Pulse content |
| `signature` | [`Signature`](modules.md#signature) | Pulse signature |

#### Defined in

[packages/twine-core/src/types.ts:85](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L85)

___

### Signature

Ƭ **Signature**: `string`

The signature type

#### Defined in

[packages/twine-core/src/types.ts:18](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L18)

___

### TwineContent

Ƭ **TwineContent**: [`ChainContent`](modules.md#chaincontent) \| [`PulseContent`](modules.md#pulsecontent)

Chain or pulse content

#### Defined in

[packages/twine-core/src/types.ts:74](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L74)

___

### TwineValue

Ƭ **TwineValue**\<`M`, `P`\>: [`ChainValue`](modules.md#chainvalue)\<`M`\> \| [`PulseValue`](modules.md#pulsevalue)\<`P`\>

Value field for chain or pulse

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends [`AnyMap`](modules.md#anymap) = [`AnyMap`](modules.md#anymap) |
| `P` | extends [`AnyMap`](modules.md#anymap) = [`AnyMap`](modules.md#anymap) |

#### Defined in

[packages/twine-core/src/types.ts:93](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/types.ts#L93)

___

### CACHE\_SINGLETON

• `Const` **CACHE\_SINGLETON**: [`TwineCache`](classes/TwineCache.md)

A singleton cache store

#### Defined in

[packages/twine-core/src/store/memory-store.ts:316](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/store/memory-store.ts#L316)

___

### across

▸ **across**(`revisit?`): [`CrawlGuide`](modules.md#crawlguide)

Create a guide that moves horizontally across chains

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `revisit?` | `boolean` | if true, will revisit chains that have already been visited |

#### Returns

[`CrawlGuide`](modules.md#crawlguide)

#### Defined in

[packages/twine-core/src/crawl.ts:117](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L117)

___

### along

▸ **along**(`target?`): [`CrawlGuide`](modules.md#crawlguide)

Create a guide that moves along chains

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Object` |
| `target.chain` | [`Chain`](modules.md#chain) |
| `target.pulse` | `number` \| [`Pulse`](modules.md#pulse) |

#### Returns

[`CrawlGuide`](modules.md#crawlguide)

#### Defined in

[packages/twine-core/src/crawl.ts:145](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L145)

___

### asCid

▸ **asCid**(`val`): ``null`` \| [`CID`](classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>

Convert something into a CID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `any` | The value to convert |

#### Returns

``null`` \| [`CID`](classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>

The CID or null if it could not be converted

**`Example`**

```js
const cid = asCid('bafybeib3...')
const anotherCid = asCid(somePulse)
```

#### Defined in

[packages/twine-core/src/conversion.ts:93](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L93)

___

### asMixin

▸ **asMixin**(`m`): [`Mixin`](modules.md#mixin) \| ``null``

Convert something mixin-like into a mixin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `any` | The mixin-like object |

#### Returns

[`Mixin`](modules.md#mixin) \| ``null``

The mixin or null if it could not be converted

**`Example`**

```js
const mixin = asMixin({ chain: 'bafybeib3...', value: 'bafybeib3...' })
const anotherMixin = asMixin(somePulse)
```

#### Defined in

[packages/twine-core/src/conversion.ts:53](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L53)

___

### asQuery

▸ **asQuery**(`val`): [`ResolveChainQuery`](modules.md#resolvechainquery)\<[`CID`](classes/CID.md)\>

Convert something query-like into a query

This is used internally to enable the flexibility of the resolver api.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`FulfilledChainResolution`](modules.md#fulfilledchainresolution) |

#### Returns

[`ResolveChainQuery`](modules.md#resolvechainquery)\<[`CID`](classes/CID.md)\>

#### Defined in

[packages/twine-core/src/conversion.ts:249](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L249)

▸ **asQuery**(`val`): [`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)

Convert something query-like into a query

This is used internally to enable the flexibility of the resolver api.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`FulfilledPulseResolution`](modules.md#fulfilledpulseresolution) |

#### Returns

[`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)

#### Defined in

[packages/twine-core/src/conversion.ts:250](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L250)

▸ **asQuery**(`val`): [`ResolveChainQuery`](modules.md#resolvechainquery)\<[`CID`](classes/CID.md)\>

Convert something query-like into a query

This is used internally to enable the flexibility of the resolver api.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Chain`](modules.md#chain) |

#### Returns

[`ResolveChainQuery`](modules.md#resolvechainquery)\<[`CID`](classes/CID.md)\>

#### Defined in

[packages/twine-core/src/conversion.ts:251](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L251)

▸ **asQuery**(`val`): [`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)

Convert something query-like into a query

This is used internally to enable the flexibility of the resolver api.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Pulse`](modules.md#pulse) |

#### Returns

[`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)

#### Defined in

[packages/twine-core/src/conversion.ts:252](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L252)

▸ **asQuery**(`val`): [`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)

Convert something query-like into a query

This is used internally to enable the flexibility of the resolver api.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Mixin`](modules.md#mixin) |

#### Returns

[`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)

#### Defined in

[packages/twine-core/src/conversion.ts:253](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L253)

▸ **asQuery**(`val`): [`ResolveQueryStrict`](modules.md#resolvequerystrict)

Convert something query-like into a query

This is used internally to enable the flexibility of the resolver api.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`ResolveQueryStrict`](modules.md#resolvequerystrict) |

#### Returns

[`ResolveQueryStrict`](modules.md#resolvequerystrict)

#### Defined in

[packages/twine-core/src/conversion.ts:254](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L254)

▸ **asQuery**(`val`): [`ResolveQueryStrict`](modules.md#resolvequerystrict) \| ``null``

Convert something query-like into a query

This is used internally to enable the flexibility of the resolver api.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

[`ResolveQueryStrict`](modules.md#resolvequerystrict) \| ``null``

#### Defined in

[packages/twine-core/src/conversion.ts:255](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L255)

___

### bytesToHex

▸ **bytesToHex**(`bytes`): `string`

Convert bytes into a hex string

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[packages/twine-core/src/conversion.ts:131](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L131)

___

### coerceCid

▸ **coerceCid**(`val`): [`CID`](classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>

Coerce something into a CID

Throws an error if the value can not be coerced into a CID

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`IntoCid`](modules.md#intocid) |

#### Returns

[`CID`](classes/CID.md)\<`unknown`, `number`, `number`, `Version`\>

**`See`**

[asCid](modules.md#ascid)

#### Defined in

[packages/twine-core/src/conversion.ts:118](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L118)

___

### coerceQuery

▸ **coerceQuery**(`val`): [`ResolveQueryStrict`](modules.md#resolvequerystrict)

Coerce something into a query

Throws an error if the value can not be coerced into a query

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `any` |

#### Returns

[`ResolveQueryStrict`](modules.md#resolvequerystrict)

**`See`**

[asQuery](modules.md#asquery)

#### Defined in

[packages/twine-core/src/conversion.ts:305](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L305)

___

### collect

▸ **collect**\<`T`\>(`iterable`): `Promise`\<`T`[]\>

Collect an async iterable into an array

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `AsyncIterable`\<`T`\> | The async iterable to collect |

#### Returns

`Promise`\<`T`[]\>

**`Example`**

```js
import { collect } from '@twine-protocol/twine-core'
const chains = await collect(resolver.chains())
```

#### Defined in

[packages/twine-core/src/conversion.ts:32](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L32)

___

### crawl

▸ **crawl**(`inputs`, `direct?`, `visited?`): `AsyncIterable`\<[`CrawlPending`](modules.md#crawlpending)\>

Crawl the tapestry

This is the main function to use for crawling the tapestry. The idea
is to specify a starting pulse (or pulses) and a guide to direct the
crawl. There are several built-in guides that can be used, or you can
create your own.

The crawl won't load pulses until you call the `load` function on the
pending crawl result. This allows you to control the loading of pulses and
only load what you need.

The crawl will also track visited pulses so that it doesn't visit the same
pulse twice. Although loops are impossible in the tapestry, different chains can
contain links to the same pulse, so it's possible to visit the same pulse
without tracking visited pulses.

It's recommended to use an asyncIterable library (like
[streaming-iterables](https://github.com/reconbot/streaming-iterables))
to handle the async nature of the crawl. The `crawl` function returns an async
iterable that can use to iterate over the pending crawl results.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs` | [`MaybeIterable`](modules.md#maybeiterable)\<[`Awaitable`](modules.md#awaitable)\<[`IntoResolvePulseQuery`](modules.md#intoresolvepulsequery)\>\> | The starting pulse or pulses |
| `direct?` | [`CrawlGuide`](modules.md#crawlguide) | The guide to use for crawling |
| `visited?` | `Set`\<`string`\> | The Set object to use for tracking visited pulses |

#### Returns

`AsyncIterable`\<[`CrawlPending`](modules.md#crawlpending)\>

- An async iterable of pending crawl results

**`Example`**

```js
import { crawl, across } from '@twine-protocol/twine-core'
import { HttpResolver } from '@twine-protocol/twine-http-store'

const resolver = new HttpStore('https://someapi.io')
const start = { chain: 'chaincid', pulse: 'pulsecid' }

const limit = 100
const chains = new Map()
for await (const pending of crawl(start, across())) {
  if (path.length < limit) {
    const result = await pending.load(resolver)
    chains.set(result.chain.cid.toString(), result.chain)
  }
}
// we now have a list of chains within 100 steps
console.log(Array.from(chains.values()))
```

#### Defined in

[packages/twine-core/src/crawl.ts:282](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L282)

___

### findPath

▸ **findPath**(`start`, `target`, `resolver`): `Promise`\<[`Path`](modules.md#path) \| ``null``\>

Find a path between two pulses

This function is a convenience function that uses the `crawl` function to
find a path between two pulses. It will return a path if one is found, or
null if no path is found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | [`IntoResolvePulseQuery`](modules.md#intoresolvepulsequery) | The starting pulse, or a query for the starting pulse |
| `target` | [`IntoResolvePulseQuery`](modules.md#intoresolvepulsequery) | The target pulse, or a query for the target pulse |
| `resolver` | [`Resolver`](interfaces/Resolver.md) | The resolver to use for resolving pulses |

#### Returns

`Promise`\<[`Path`](modules.md#path) \| ``null``\>

- A path if one is found, or null if no path is found

**`Example`**

```js
import { findPath } from '@twine-protocol/twine-core'
import { HttpStore } from '@twine-protocol/twine-http-store'

const resolver = new HttpStore('https://someapi.io')
const start = { chain: 'chaincid', pulse: 'startpulsecid' }
const target = { chain: 'chaincid', pulse: 'targetpulsecid' }

const path = await findPath(start, target, resolver)
if (path) {
  console.log('Path found:', path)
} else {
  console.log('No path found')
}
```

#### Defined in

[packages/twine-core/src/crawl.ts:355](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L355)

___

### fromBytes

▸ **fromBytes**(`«destructured»`): `Promise`\<[`Chain`](modules.md#chain) \| [`Pulse`](modules.md#pulse)\>

Converts a bytes array (ipld block) into a twine instance

The CID must be provided, as it is not encoded in the bytes.
It will be used to verify the bytes.

Throws an error if the data is invalid.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `bytes` | `Uint8Array` | `undefined` |
| › `cid` | [`CID`](classes/CID.md)\<`unknown`, `number`, `number`, `Version`\> | `undefined` |
| › `hasher?` | `MultihashHasher`\<`number`\> | `sha3512` |

#### Returns

`Promise`\<[`Chain`](modules.md#chain) \| [`Pulse`](modules.md#pulse)\>

#### Defined in

[packages/twine-core/src/conversion.ts:208](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L208)

___

### fromJSON

▸ **fromJSON**(`json`): `Promise`\<[`Chain`](modules.md#chain) \| [`Pulse`](modules.md#pulse)\>

Convert a DAG-JSON encoded twine into a twine instance

This is one of the primary ways to read twine data.

Throws an error if the data is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` \| `object` |

#### Returns

`Promise`\<[`Chain`](modules.md#chain) \| [`Pulse`](modules.md#pulse)\>

#### Defined in

[packages/twine-core/src/conversion.ts:172](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L172)

___

### getContentDigest

▸ **getContentDigest**(`content`): `Promise`\<`MultihashDigest`\>

Get the hash digest of twine content

Used when verifying signatures

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`TwineContent`](modules.md#twinecontent) |

#### Returns

`Promise`\<`MultihashDigest`\>

#### Defined in

[packages/twine-core/src/verify.ts:18](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/verify.ts#L18)

___

### getLayerPos

▸ **getLayerPos**(`radix`, `index`): `number`

Get the highest layer for which this (pulse) index
is an anchor for.
For example: in base 10, for the following indicies...

#### Parameters

| Name | Type |
| :------ | :------ |
| `radix` | `number` |
| `index` | `number` |

#### Returns

`number`

**`Example`**

```js
getLayerPos(10, 1560) == 1 // (multiple of 10)
getLayerPos(10, 1264) == 0 // (NOT a multiple of 10)
getLayerPos(10, 3000) == 3 // (multiple of 1000)
getLayerPos(10, 3700) == 2 // (multiple 100)
```

#### Defined in

[packages/twine-core/src/links.ts:16](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/links.ts#L16)

___

### hex2bytes

▸ **hex2bytes**(`input`): `Uint8Array`

Convert a hex string into bytes

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/twine-core/src/conversion.ts:143](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L143)

___

### isAnyIterable

▸ **isAnyIterable**(`obj`): obj is AsyncIterable\<any\> \| Iterable\<any\>

Is this a sync or async iterable

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is AsyncIterable\<any\> \| Iterable\<any\>

#### Defined in

[packages/twine-core/src/checks.ts:65](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L65)

___

### isAsyncIterable

▸ **isAsyncIterable**(`obj`): obj is AsyncIterable\<any\>

Is this an async iterable

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is AsyncIterable\<any\>

#### Defined in

[packages/twine-core/src/checks.ts:56](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L56)

___

### isChain

▸ **isChain**(`twine`): twine is Chain

Is this a chain

#### Parameters

| Name | Type |
| :------ | :------ |
| `twine` | `any` |

#### Returns

twine is Chain

#### Defined in

[packages/twine-core/src/checks.ts:182](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L182)

___

### isChainContent

▸ **isChainContent**(`content`): content is ChainContent

Is this valid chain content

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |

#### Returns

content is ChainContent

#### Defined in

[packages/twine-core/src/checks.ts:124](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L124)

___

### isChainValue

▸ **isChainValue**(`value`): value is ChainValue

Is this a chain value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ChainValue

#### Defined in

[packages/twine-core/src/checks.ts:152](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L152)

___

### isCid

▸ **isCid**(`cid`): cid is CID\<unknown, number, number, Version\>

Is this a CID object (not a string)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | `any` |

#### Returns

cid is CID\<unknown, number, number, Version\>

#### Defined in

[packages/twine-core/src/checks.ts:74](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L74)

___

### isFulfilledChainResolution

▸ **isFulfilledChainResolution**(`resolution`): resolution is FulfilledPulseResolution

Is this a fulfilled chain resolution

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `any` |

#### Returns

resolution is FulfilledPulseResolution

#### Defined in

[packages/twine-core/src/checks.ts:209](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L209)

___

### isFulfilledPulseResolution

▸ **isFulfilledPulseResolution**(`resolution`): resolution is FulfilledPulseResolution

Is this a fulfilled pulse resolution

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `any` |

#### Returns

resolution is FulfilledPulseResolution

#### Defined in

[packages/twine-core/src/checks.ts:200](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L200)

___

### isISODate

▸ **isISODate**(`str`): `boolean`

Is this string a valid ISO Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/twine-core/src/checks.ts:20](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L20)

___

### isInteger

▸ **isInteger**(`n`): `boolean`

Is this an integer

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/twine-core/src/checks.ts:29](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L29)

___

### isIterable

▸ **isIterable**(`obj`): obj is Iterable\<any\>

Is this a sync iterable

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is Iterable\<any\>

#### Defined in

[packages/twine-core/src/checks.ts:47](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L47)

___

### isLinks

▸ **isLinks**(`links`): links is CID\<unknown, number, number, Version\>[]

Is this a links list

#### Parameters

| Name | Type |
| :------ | :------ |
| `links` | `any` |

#### Returns

links is CID\<unknown, number, number, Version\>[]

#### Defined in

[packages/twine-core/src/checks.ts:96](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L96)

___

### isMixins

▸ **isMixins**(`mixins`): mixins is Mixin[]

Is this a mixin list

#### Parameters

| Name | Type |
| :------ | :------ |
| `mixins` | `any` |

#### Returns

mixins is Mixin[]

#### Defined in

[packages/twine-core/src/checks.ts:84](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L84)

___

### isPulse

▸ **isPulse**(`twine`): twine is Pulse

Is this a pulse

#### Parameters

| Name | Type |
| :------ | :------ |
| `twine` | `any` |

#### Returns

twine is Pulse

#### Defined in

[packages/twine-core/src/checks.ts:191](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L191)

___

### isPulseContent

▸ **isPulseContent**(`content`): content is PulseContent

Is this valid pulse content

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |

#### Returns

content is PulseContent

#### Defined in

[packages/twine-core/src/checks.ts:108](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L108)

___

### isPulseQuery

▸ **isPulseQuery**(`query`): query is ResolvePulseQueryStrict

Is this a pulse query

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |

#### Returns

query is ResolvePulseQueryStrict

#### Defined in

[packages/twine-core/src/checks.ts:218](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L218)

___

### isPulseValue

▸ **isPulseValue**(`value`): value is PulseValue

Is this a pulse value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is PulseValue

#### Defined in

[packages/twine-core/src/checks.ts:140](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L140)

___

### isTwine

▸ **isTwine**(`twine`): twine is Chain \| Pulse

Is this a twine

#### Parameters

| Name | Type |
| :------ | :------ |
| `twine` | `any` |

#### Returns

twine is Chain \| Pulse

#### Defined in

[packages/twine-core/src/checks.ts:173](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L173)

___

### isTwineValue

▸ **isTwineValue**(`value`): value is TwineValue

Is this a twine value (pulse or chain)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is TwineValue

#### Defined in

[packages/twine-core/src/checks.ts:164](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L164)

___

### isUnsignedInteger

▸ **isUnsignedInteger**(`n`): `boolean`

Is this a positive integer

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/twine-core/src/checks.ts:38](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/checks.ts#L38)

___

### linksAsQueries

▸ **linksAsQueries**(`pulse`): [`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)[]

Converts a pulse's links array into a list of queries.

This is useful for resolving a pulse's links.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pulse` | [`Pulse`](modules.md#pulse) |

#### Returns

[`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)[]

**`Example`**

```js
const pulse = await resolve(pulseQuery)
const links = linksAsQueries(pulse)
const resolvedLinks = await Promise.all(links.map(q => resolve(q)))
```

#### Defined in

[packages/twine-core/src/conversion.ts:242](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/conversion.ts#L242)

___

### mixinDiff

▸ **mixinDiff**(`reference`, `toCheck`): [`Mixin`](modules.md#mixin)[]

Compare two mixin lists and return the differences

Useful for checking if mixins have changed from one pulse to another.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reference` | [`Mixin`](modules.md#mixin)[] |
| `toCheck` | [`Mixin`](modules.md#mixin)[] |

#### Returns

[`Mixin`](modules.md#mixin)[]

#### Defined in

[packages/twine-core/src/compare.ts:11](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/compare.ts#L11)

___

### randomWalk

▸ **randomWalk**(): [`CrawlGuide`](modules.md#crawlguide)

Create a guide that does a random walk through the tapestry

#### Returns

[`CrawlGuide`](modules.md#crawlguide)

#### Defined in

[packages/twine-core/src/crawl.ts:198](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L198)

___

### skipList

▸ **skipList**(`radix`, `fromIndex`, `toIndex`, `byLink?`): `Generator`\<`number`, `void`, `unknown`\>

Get an iterator of indices that can be used to skip through the chain.

This can either provide the pulse indices themselves or a list of
array indices of the links list for each pulse along the path.

This will not include the from/to indices themselves.

A radix of 1 doesn't make sense since `1^r` is always `1`.

A radix of 0 is interpreted as no radix skipping, so the list
just has the previous pulse cid, therefore a radix 0 skiplist
is just a decreasing list of pulse indices.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `radix` | `number` | `undefined` | The radix used for the chain |
| `fromIndex` | `number` | `undefined` | The higher index |
| `toIndex` | `number` | `undefined` | The lower index |
| `byLink` | `boolean` | `false` | If true, will return the list of array indices for the links list |

#### Returns

`Generator`\<`number`, `void`, `unknown`\>

**`Example`**

```js
const radix = 10
const fromIndex = 23
const toIndex = 5
const actual = Array.from(skipList(radix, fromIndex, toIndex))
// actual == [ 20, 10, 9, 8, 7, 6 ]
// because... 23 is in the `n * 10^1` range so it's links list should have `[22, 20]`
// same deal for 20 which has links `[19, 10]` so we can skip to 10
// then we get to the `n * 10^0` range and we can skip to 9, 8, 7, 6

// The array indices for this correspond to jumps of
// `10^1`, `10^1`, `10^0`, `10^0`, `10^0`, `10^0`
// so the array indices would be `[1, 1, 0, 0, 0, 0]`

Array.from(skipList(10, 23, 5, true)) // == [ 1, 1, 0, 0, 0, 0 ]
```

#### Defined in

[packages/twine-core/src/links.ts:81](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/links.ts#L81)

___

### spread

▸ **spread**(`depthFirst?`): [`CrawlGuide`](modules.md#crawlguide)

Create a guide that spreads out in all directions

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `depthFirst?` | `boolean` | `true` | crawl along chains first |

#### Returns

[`CrawlGuide`](modules.md#crawlguide)

#### Defined in

[packages/twine-core/src/crawl.ts:182](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L182)

___

### towards

▸ **towards**(`target`): [`CrawlGuide`](modules.md#crawlguide)

Create a guide that moves efficiently towards a target pulse

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`FulfilledPulseResolution`](modules.md#fulfilledpulseresolution) |

#### Returns

[`CrawlGuide`](modules.md#crawlguide)

#### Defined in

[packages/twine-core/src/crawl.ts:214](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L214)

___

### verifySignature

▸ **verifySignature**(`chain`, `twine`): `Promise`\<`boolean`\>

Verify the signature of a chain or pulse

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](modules.md#chain) |
| `twine` | [`Chain`](modules.md#chain) \| [`Pulse`](modules.md#pulse) |

#### Returns

`Promise`\<`boolean`\>

**`Throws`**

If the chain or pulse is invalid

**`Throws`**

If the signature is invalid

**`Throws`**

If inputs don't make sense (likely programmer error)

#### Defined in

[packages/twine-core/src/verify.ts:31](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/verify.ts#L31)

___

### within

▸ **within**(): [`CrawlGuide`](modules.md#crawlguide)

Create a guide that visits all skiplist links as they are seen

#### Returns

[`CrawlGuide`](modules.md#crawlguide)

#### Defined in

[packages/twine-core/src/crawl.ts:136](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/crawl.ts#L136)

## Resolving

### ChainResolution

Ƭ **ChainResolution**: [`FulfilledChainResolution`](modules.md#fulfilledchainresolution) \| [`UnfulfilledChainResolution`](modules.md#unfulfilledchainresolution)

A successful or failed chain resolution

#### Defined in

[packages/twine-core/src/resolver/types.ts:120](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L120)

___

### CombineResolversOptions

Ƭ **CombineResolversOptions**: `Object`

Options for combining resolvers

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheSize?` | `number` | The maximum number of items to cache |

#### Defined in

[packages/twine-core/src/resolver/combine.ts:11](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/combine.ts#L11)

___

### CombinedChainResolution

Ƭ **CombinedChainResolution**: [`ChainResolution`](modules.md#chainresolution) & \{ `errors?`: `Error`[] ; `resolver?`: [`Resolver`](interfaces/Resolver.md)  }

A combined chain resolution

#### Defined in

[packages/twine-core/src/resolver/combine.ts:92](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/combine.ts#L92)

___

### CombinedPulseResolution

Ƭ **CombinedPulseResolution**: [`PulseResolution`](modules.md#pulseresolution) & \{ `errors?`: `Error`[] ; `resolver?`: [`Resolver`](interfaces/Resolver.md)  }

A combined pulse resolution

#### Defined in

[packages/twine-core/src/resolver/combine.ts:76](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/combine.ts#L76)

___

### FetchChainQuery

Ƭ **FetchChainQuery**: `Object`

CID for a chain lookup

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainCID` | [`CID`](classes/CID.md) | Chain CID |

#### Defined in

[packages/twine-core/src/resolver/helpers.ts:65](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/helpers.ts#L65)

___

### FetchPulseQuery

Ƭ **FetchPulseQuery**: `Object`

CIDs for a pulse lookup

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainCID?` | [`CID`](classes/CID.md) | Chain CID (maybe) |
| `pulseCID` | [`CID`](classes/CID.md) | Pulse CID |

#### Defined in

[packages/twine-core/src/resolver/helpers.ts:75](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/helpers.ts#L75)

___

### FulfilledChainResolution

Ƭ **FulfilledChainResolution**: `Object`

The product of a successful chain resolution

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](modules.md#chain) | The resolved chain |

#### Defined in

[packages/twine-core/src/resolver/types.ts:62](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L62)

___

### FulfilledPulseResolution

Ƭ **FulfilledPulseResolution**: `Object`

The product of a successful pulse resolution

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](modules.md#chain) | The resolved chain |
| `pulse` | [`Pulse`](modules.md#pulse) | The resolved pulse |

#### Defined in

[packages/twine-core/src/resolver/types.ts:72](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L72)

___

### FulfilledResolution

Ƭ **FulfilledResolution**: [`FulfilledChainResolution`](modules.md#fulfilledchainresolution) \| [`FulfilledPulseResolution`](modules.md#fulfilledpulseresolution)

A successful chain or pulse resolution

#### Defined in

[packages/twine-core/src/resolver/types.ts:106](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L106)

___

### IntoResolveChainQuery

Ƭ **IntoResolveChainQuery**: [`FulfilledChainResolution`](modules.md#fulfilledchainresolution) \| [`ResolveChainQuery`](modules.md#resolvechainquery) \| [`Chain`](modules.md#chain)

Something that can be coerced into a chain resolution query

#### Defined in

[packages/twine-core/src/resolver/types.ts:141](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L141)

___

### IntoResolvePulseQuery

Ƭ **IntoResolvePulseQuery**: [`FulfilledPulseResolution`](modules.md#fulfilledpulseresolution) \| [`ResolvePulseQuery`](modules.md#resolvepulsequery) \| [`Pulse`](modules.md#pulse) \| [`Mixin`](modules.md#mixin)

Something that can be coerced into a pulse resolution query

#### Defined in

[packages/twine-core/src/resolver/types.ts:148](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L148)

___

### PulseResolution

Ƭ **PulseResolution**: [`FulfilledPulseResolution`](modules.md#fulfilledpulseresolution) \| [`UnfulfilledPulseResolution`](modules.md#unfulfilledpulseresolution)

A successful or failed pulse resolution

#### Defined in

[packages/twine-core/src/resolver/types.ts:127](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L127)

___

### Resolution

Ƭ **Resolution**: [`FulfilledResolution`](modules.md#fulfilledresolution) \| [`UnfulfilledResolution`](modules.md#unfulfilledresolution)

A resolution of any kind

#### Defined in

[packages/twine-core/src/resolver/types.ts:134](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L134)

___

### ResolveCallers

Ƭ **ResolveCallers**: `Object`

An object containing methods to fetch twines

Used by the [resolveHelper](modules.md#resolvehelper) function

These methods may return null or throw an error if the twine is not found
and the [resolveHelper](modules.md#resolvehelper) function will handle that.

These methods do not need to check the signature of the twine or anything,
that is all handled by the [resolveHelper](modules.md#resolvehelper) function.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cache?` | [`TwineCache`](classes/TwineCache.md) \| ``false`` \| ``null`` | A cache to use If set to `false` or `null`, no caching will be done Normally a resolver will keep a reference to its cache and simply pass it through in here. **`Example`** ```js resolveHelper({ //... cache: this.cache }) ``` |
| `fetchChain` | (`q`: [`FetchChainQuery`](modules.md#fetchchainquery), `options`: `any`) => [`Awaitable`](modules.md#awaitable)\<[`Chain`](modules.md#chain) \| ``null``\> | - |
| `fetchPulse` | (`q`: [`FetchPulseQuery`](modules.md#fetchpulsequery), `options`: `any`) => [`Awaitable`](modules.md#awaitable)\<[`Pulse`](modules.md#pulse) \| ``null``\> | - |
| `requestCache?` | `Map`\<`string`, `Promise`\<[`Chain`](modules.md#chain) \| [`Pulse`](modules.md#pulse)\>\> | A cache to use for requests If set to `false` or `null`, no caching will be done This is a cache of pending requests, so that a lookup for the same twine is not made multiple times. It is sufficient to use a simple Map for this. **`Example`** ```js //... resolveHelper({ //... requestCache: this.requestCache // a Map() }) ``` |

#### Defined in

[packages/twine-core/src/resolver/helpers.ts:95](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/helpers.ts#L95)

___

### ResolveChainQuery

Ƭ **ResolveChainQuery**\<`T`\>: `Object`

A query to resolve a chain

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`CID`](classes/CID.md) \| [`IntoCid`](modules.md#intocid) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | `T` | The CID-like reference to the chain |

#### Defined in

[packages/twine-core/src/resolver/types.ts:9](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L9)

___

### ResolveChainQueryStrict

Ƭ **ResolveChainQueryStrict**: `Object`

A query to resolve a chain strictly using a CID object

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`CID`](classes/CID.md) | The CID of the chain |

#### Defined in

[packages/twine-core/src/resolver/types.ts:31](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L31)

___

### ResolveOptions

Ƭ **ResolveOptions**: `Object`

Options for all resolvers

They may or may not be applicable depending on the implementation

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `noCache?` | `boolean` | If true, the resolver will bypass the cache |
| `noVerify?` | `boolean` | If true, the resolver will not verify the signature of the resolved twine |

#### Defined in

[packages/twine-core/src/resolver/types.ts:157](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L157)

___

### ResolvePulseQuery

Ƭ **ResolvePulseQuery**\<`T`\>: `Object`

A query to resolve a pulse

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`CID`](classes/CID.md) \| [`IntoCid`](modules.md#intocid) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain?` | `T` | The CID-like reference to the chain |
| `pulse` | `T` | The CID-like reference to the pulse |

#### Defined in

[packages/twine-core/src/resolver/types.ts:19](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L19)

___

### ResolvePulseQueryStrict

Ƭ **ResolvePulseQueryStrict**: `Object`

A query to resolve a pulse strictly using CID objects

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`CID`](classes/CID.md) | The CID of the chain |
| `pulse` | [`CID`](classes/CID.md) | The CID of the pulse |

#### Defined in

[packages/twine-core/src/resolver/types.ts:41](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L41)

___

### ResolveQueryStrict

Ƭ **ResolveQueryStrict**: [`ResolveChainQueryStrict`](modules.md#resolvechainquerystrict) \| [`ResolvePulseQueryStrict`](modules.md#resolvepulsequerystrict)

A strict query to resolve a chain or pulse

**`See`**

 - [ResolveChainQueryStrict](modules.md#resolvechainquerystrict)
 - [ResolvePulseQueryStrict](modules.md#resolvepulsequerystrict)

#### Defined in

[packages/twine-core/src/resolver/types.ts:55](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L55)

___

### UnfulfilledChainResolution

Ƭ **UnfulfilledChainResolution**: `Object`

The product of a failed chain resolution

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | ``null`` | no chain |

#### Defined in

[packages/twine-core/src/resolver/types.ts:84](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L84)

___

### UnfulfilledPulseResolution

Ƭ **UnfulfilledPulseResolution**: `Object`

The product of a failed pulse resolution

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | ``null`` | no chain |
| `pulse` | ``null`` | no pulse |

#### Defined in

[packages/twine-core/src/resolver/types.ts:94](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L94)

___

### UnfulfilledResolution

Ƭ **UnfulfilledResolution**: [`UnfulfilledChainResolution`](modules.md#unfulfilledchainresolution) \| [`UnfulfilledPulseResolution`](modules.md#unfulfilledpulseresolution)

A failed chain or pulse resolution

#### Defined in

[packages/twine-core/src/resolver/types.ts:113](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/types.ts#L113)

___

### combineResolvers

▸ **combineResolvers**(`resolverList?`, `options?`): [`CombinedResolver`](interfaces/CombinedResolver.md)

Combine multiple resolvers into a single resolver

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `resolverList` | [`Resolver`](interfaces/Resolver.md)[] | `[]` | The resolvers to combine |
| `options` | [`CombineResolversOptions`](modules.md#combineresolversoptions) | `{}` | Options for the combined resolver |

#### Returns

[`CombinedResolver`](interfaces/CombinedResolver.md)

The combined resolver

**`Example`**

```js
import { MemoryStore } from '@twine-protocol/twine-core'
const store1 = new MemoryStore()
const store2 = new MemoryStore()

store2.save(someChain) // exists in store2 but not store1

const combined = combineResolvers([store1, store2])
const { chain } = await combined.resolve({ chain: someChain.cid })
console.log(chain) // someChain
```

#### Defined in

[packages/twine-core/src/resolver/combine.ts:154](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/combine.ts#L154)

___

### memoized

▸ **memoized**\<`T`\>(`cache`, `key`, `fn`, `...args`): `Promise`\<`T`\>

memoize an async function call so that while it is pending, the same call is not made again

This is used by the [ResolveCallers.requestCache](modules.md#requestcache) to avoid making
multiple requests for the same twine.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cache` | `Map`\<`string`, `Promise`\<`T`\>\> | The cache to use |
| `key` | `string` | The key to use |
| `fn` | (...`args`: `any`[]) => [`Awaitable`](modules.md#awaitable)\<`T`\> | The function to call |
| `...args` | `any`[] | The arguments to pass to the function |

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/twine-core/src/resolver/helpers.ts:45](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/helpers.ts#L45)

___

### resolveHelper

▸ **resolveHelper**(`callers`, `thing`, `options?`): `Promise`\<[`ChainResolution`](modules.md#chainresolution)\>

A helper function for implementing the [Resolver.resolve](interfaces/Resolver.md#resolve) method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callers` | [`ResolveCallers`](modules.md#resolvecallers) | The fetchers to use |
| `thing` | [`IntoResolveChainQuery`](modules.md#intoresolvechainquery) | The query to resolve |
| `options?` | [`ResolveOptions`](modules.md#resolveoptions) | Options for the resolution |

#### Returns

`Promise`\<[`ChainResolution`](modules.md#chainresolution)\>

**`See`**

 - [MemoryStore.resolve](classes/MemoryStore.md#resolve) for an example of how to use this
 - [ResolveCallers](modules.md#resolvecallers)

**`Example`**

```js
class MemoryStore {
  async resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  async resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
  async resolve(query: any, options?: ResolveOptions) {
    return resolveHelper({
      fetchChain: ({ chainCID }) => this.fetch(chainCID) as Chain | null,
      fetchPulse: ({ pulseCID }) => this.fetch(pulseCID) as Pulse | null
    }, query, options)
  }
  //...
}
```

#### Defined in

[packages/twine-core/src/resolver/helpers.ts:183](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/helpers.ts#L183)

▸ **resolveHelper**(`callers`, `thing`, `options?`): `Promise`\<[`PulseResolution`](modules.md#pulseresolution)\>

A helper function for implementing the [Resolver.resolve](interfaces/Resolver.md#resolve) method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callers` | [`ResolveCallers`](modules.md#resolvecallers) | The fetchers to use |
| `thing` | [`IntoResolvePulseQuery`](modules.md#intoresolvepulsequery) | The query to resolve |
| `options?` | [`ResolveOptions`](modules.md#resolveoptions) | Options for the resolution |

#### Returns

`Promise`\<[`PulseResolution`](modules.md#pulseresolution)\>

**`See`**

 - [MemoryStore.resolve](classes/MemoryStore.md#resolve) for an example of how to use this
 - [ResolveCallers](modules.md#resolvecallers)

**`Example`**

```js
class MemoryStore {
  async resolve(query: IntoResolveChainQuery, options?: ResolveOptions): Promise<ChainResolution>
  async resolve(query: IntoResolvePulseQuery, options?: ResolveOptions): Promise<PulseResolution>
  async resolve(query: any, options?: ResolveOptions) {
    return resolveHelper({
      fetchChain: ({ chainCID }) => this.fetch(chainCID) as Chain | null,
      fetchPulse: ({ pulseCID }) => this.fetch(pulseCID) as Pulse | null
    }, query, options)
  }
  //...
}
```

#### Defined in

[packages/twine-core/src/resolver/helpers.ts:184](https://github.com/twine-protocol/twine-js/blob/1ea91a0/packages/twine-core/src/resolver/helpers.ts#L184)
