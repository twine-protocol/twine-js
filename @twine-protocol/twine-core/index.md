**@twine-protocol/twine-core v0.1.0** • **Docs**

***

[twine-js](../../index.md) / @twine-protocol/twine-core

# @twine-protocol/twine-core

This is the core javascript (typescript) package for the Twine protocol.
It will be used by all other packages.

You will likely be most interested in the [Twine](classes/Twine.md) class, [fromJSON](functions/fromJSON.md), and [fromBytes](functions/fromBytes.md).

This is a very small subset of twine utilities. It contains utilities
defining chains and pulses, storage and resolving interfaces, and signature verification.

To actually **create** twine data, you need the ["@twine-protocol/twine-builder"](../twine-builder/index.md) package.

To **retrieve** or **store** twine data you'll need one of these packages:

- ["@twine-protocol/twine-http-store"](../twine-http-store/index.md) Store/retrieve data from an http api
- ["@twine-protocol/twine-car-utils"](../twine-car-utils/index.md) Store/retrieve data in CAR files
- ["@twine-protocol/twine-blockstore-store"](../twine-blockstore-store/index.md) Store/retrieve data in BlockStores

## See

 - [Twine](classes/Twine.md) for the main class
 - [fromJSON](functions/fromJSON.md) for creating Twine objects from JSON
 - [fromBytes](functions/fromBytes.md) for creating Twine objects from bytes

## Classes

### Cache

| Class | Description |
| ------ | ------ |
| [CacheMap](classes/CacheMap.md) | A map that caches the most recently accessed items |
| [TwineCache](classes/TwineCache.md) | A store that caches twines in memory |

### Other

| Class | Description |
| ------ | ------ |
| [CID](classes/CID.md) | - |

### Resolving

| Class | Description |
| ------ | ------ |
| [ChainResolver](classes/ChainResolver.md) | A helper to restrict the resolution to a specific chain |

### Storage

| Class | Description |
| ------ | ------ |
| [MemoryStore](classes/MemoryStore.md) | A store that keeps twines in memory |

### Twine Data

| Class | Description |
| ------ | ------ |
| [Twine](classes/Twine.md) | Generic class for twine data |

## Interfaces

### Other

| Interface | Description |
| ------ | ------ |
| [JWK](interfaces/JWK.md) | JSON Web Key ([JWK](https://www.rfc-editor.org/rfc/rfc7517)). "RSA", "EC", "OKP", and "oct" key types are supported. |

### Resolving

| Interface | Description |
| ------ | ------ |
| [Resolver](interfaces/Resolver.md) | Resolves a query into a chain or pulse |
| [ResolveOptionsCombined](interfaces/ResolveOptionsCombined.md) | Options for combined resolution calls |
| [ResolveLatestOptionsCombined](interfaces/ResolveLatestOptionsCombined.md) | Options for combined resolution of latest pulse calls |
| [CombinedResolver](interfaces/CombinedResolver.md) | A resolver that combines multiple resolvers |

### Signer

| Interface | Description |
| ------ | ------ |
| [Signer](interfaces/Signer.md) | Any class implementing this interface can be used as a signer for Twine |

### Storage

| Interface | Description |
| ------ | ------ |
| [Store](interfaces/Store.md) | A store that can fetch and save twines |

## Type Aliases

### Cache

| Type alias | Description |
| ------ | ------ |
| [CacheOptions](type-aliases/CacheOptions.md) | Cache options |

### Crawling

| Type alias | Description |
| ------ | ------ |
| [MaybeIterable](type-aliases/MaybeIterable.md) | Something that could be a value or an iterator over that value type |
| [Path](type-aliases/Path.md) | A path is a list of resolved pulse resolutions |
| [CrawlPathContainer](type-aliases/CrawlPathContainer.md) | An object that contains a path |
| [LoaderOptions](type-aliases/LoaderOptions.md) | Options for the loader |
| [CrawlPending](type-aliases/CrawlPending.md) | An object containing a load function that represents a pending crawl result |
| [CrawlResult](type-aliases/CrawlResult.md) | The result of a crawl that is a pulse resolution with a path |
| [FulfilledCrawlResult](type-aliases/FulfilledCrawlResult.md) | The result of a crawl that is a fulfilled pulse resolution with a path |
| [CrawlGuide](type-aliases/CrawlGuide.md) | Crawl Guide |

### Internal

| Type alias | Description |
| ------ | ------ |
| [ChainStorageMeta](type-aliases/ChainStorageMeta.md) | Metadata used by the memory store to keep track of chains and pulses |

### Other

| Type alias | Description |
| ------ | ------ |
| [Awaitable](type-aliases/Awaitable.md) | Something that can be `await`ed |
| [AnyIterable](type-aliases/AnyIterable.md) | An async or sycn iterable |
| [Signature](type-aliases/Signature.md) | The signature type |
| [Mixin](type-aliases/Mixin.md) | Mixins store the information about links between chains |
| [AnyMap](type-aliases/AnyMap.md) | Generic map |
| [ChainContent](type-aliases/ChainContent.md) | Chain metadata |
| [PulseIndex](type-aliases/PulseIndex.md) | Pulse index (block height) |
| [PulseContent](type-aliases/PulseContent.md) | Pulse content |
| [TwineContent](type-aliases/TwineContent.md) | Chain or pulse content |
| [ChainValue](type-aliases/ChainValue.md) | Value field for chains |
| [PulseValue](type-aliases/PulseValue.md) | Value field for pulses |
| [TwineValue](type-aliases/TwineValue.md) | Value field for chain or pulse |
| [IntoCid](type-aliases/IntoCid.md) | Any type that can be coerced into a CID |
| [IntoMixin](type-aliases/IntoMixin.md) | Any type that can be coerced into a mixin |
| [Chain](type-aliases/Chain.md) | A Twine that is a Chain |
| [Pulse](type-aliases/Pulse.md) | A Twine that is a Pulse |

### Resolving

| Type alias | Description |
| ------ | ------ |
| [ResolveChainQuery](type-aliases/ResolveChainQuery.md) | A query to resolve a chain |
| [ResolvePulseQuery](type-aliases/ResolvePulseQuery.md) | A query to resolve a pulse |
| [ResolveChainQueryStrict](type-aliases/ResolveChainQueryStrict.md) | A query to resolve a chain strictly using a CID object |
| [ResolvePulseQueryStrict](type-aliases/ResolvePulseQueryStrict.md) | A query to resolve a pulse strictly using CID objects |
| [ResolveQueryStrict](type-aliases/ResolveQueryStrict.md) | A strict query to resolve a chain or pulse |
| [FulfilledChainResolution](type-aliases/FulfilledChainResolution.md) | The product of a successful chain resolution |
| [FulfilledPulseResolution](type-aliases/FulfilledPulseResolution.md) | The product of a successful pulse resolution |
| [UnfulfilledChainResolution](type-aliases/UnfulfilledChainResolution.md) | The product of a failed chain resolution |
| [UnfulfilledPulseResolution](type-aliases/UnfulfilledPulseResolution.md) | The product of a failed pulse resolution |
| [FulfilledResolution](type-aliases/FulfilledResolution.md) | A successful chain or pulse resolution |
| [UnfulfilledResolution](type-aliases/UnfulfilledResolution.md) | A failed chain or pulse resolution |
| [ChainResolution](type-aliases/ChainResolution.md) | A successful or failed chain resolution |
| [PulseResolution](type-aliases/PulseResolution.md) | A successful or failed pulse resolution |
| [Resolution](type-aliases/Resolution.md) | A resolution of any kind |
| [IntoResolveChainQuery](type-aliases/IntoResolveChainQuery.md) | Something that can be coerced into a chain resolution query |
| [IntoResolvePulseQuery](type-aliases/IntoResolvePulseQuery.md) | Something that can be coerced into a pulse resolution query |
| [ResolveOptions](type-aliases/ResolveOptions.md) | Options for all resolvers |
| [FetchChainQuery](type-aliases/FetchChainQuery.md) | CID for a chain lookup |
| [FetchPulseQuery](type-aliases/FetchPulseQuery.md) | CIDs for a pulse lookup |
| [ResolveCallers](type-aliases/ResolveCallers.md) | An object containing methods to fetch twines |
| [CombineResolversOptions](type-aliases/CombineResolversOptions.md) | Options for combining resolvers |
| [CombinedPulseResolution](type-aliases/CombinedPulseResolution.md) | A combined pulse resolution |
| [CombinedChainResolution](type-aliases/CombinedChainResolution.md) | A combined chain resolution |

## Variables

### Cache

| Variable | Description |
| ------ | ------ |
| [CACHE\_SINGLETON](variables/CACHE_SINGLETON.md) | A singleton cache store |

## Functions

### Comparison

| Function | Description |
| ------ | ------ |
| [mixinDiff](functions/mixinDiff.md) | Compare two mixin lists and return the differences |

### Conversion

| Function | Description |
| ------ | ------ |
| [collect](functions/collect.md) | Collect an async iterable into an array |
| [asMixin](functions/asMixin.md) | Convert something mixin-like into a mixin |
| [bytesToHex](functions/bytesToHex.md) | Convert bytes into a hex string |
| [hex2bytes](functions/hex2bytes.md) | Convert a hex string into bytes |
| [asQuery](functions/asQuery.md) | Convert something query-like into a query |
| [asCid](functions/asCid.md) | Convert something into a CID |
| [coerceCid](functions/coerceCid.md) | Coerce something into a CID |
| [fromJSON](functions/fromJSON.md) | Convert a DAG-JSON encoded twine into a twine instance |
| [fromBytes](functions/fromBytes.md) | Converts a bytes array (ipld block) into a twine instance |
| [linksAsQueries](functions/linksAsQueries.md) | Converts a pulse's links array into a list of queries. |
| [coerceQuery](functions/coerceQuery.md) | Coerce something into a query |

### Crawling

| Function | Description |
| ------ | ------ |
| [crawl](functions/crawl.md) | Crawl the tapestry |
| [findPath](functions/findPath.md) | Find a path between two pulses |

### Internal

| Function | Description |
| ------ | ------ |
| [asyncThrottle](functions/asyncThrottle.md) | Throttle an async function call |
| [memoized](functions/memoized.md) | memoize an async function call so that while it is pending, the same call is not made again |

### Resolving

| Function | Description |
| ------ | ------ |
| [resolveHelper](functions/resolveHelper.md) | A helper function for implementing the [Resolver.resolve](interfaces/Resolver.md#resolve) method |
| [memoized](functions/memoized.md) | memoize an async function call so that while it is pending, the same call is not made again |
| [combineResolvers](functions/combineResolvers.md) | Combine multiple resolvers into a single resolver |

### Skiplist

| Function | Description |
| ------ | ------ |
| [skipList](functions/skipList.md) | Get an iterator of indices that can be used to skip through the chain. |
| [getLayerPos](functions/getLayerPos.md) | Get the highest layer for which this (pulse) index is an anchor for. For example: in base 10, for the following indicies... |

## CrawlGuide

### Crawling

| Function | Description |
| ------ | ------ |
| [across](functions/across.md) | Create a guide that moves horizontally across chains |
| [within](functions/within.md) | Create a guide that visits all skiplist links as they are seen |
| [along](functions/along.md) | Create a guide that moves along chains |
| [spread](functions/spread.md) | Create a guide that spreads out in all directions |
| [randomWalk](functions/randomWalk.md) | Create a guide that does a random walk through the tapestry |
| [towards](functions/towards.md) | Create a guide that moves efficiently towards a target pulse |

## Errors

| Class | Description |
| ------ | ------ |
| [TwineError](classes/TwineError.md) | General Twine Error class |
| [InvalidTwineData](classes/InvalidTwineData.md) | Signifies that the twine data does not follow specs |
| [InvalidSignature](classes/InvalidSignature.md) | Signifies that the signature is invalid |
| [IncompleteResolution](classes/IncompleteResolution.md) | Thrown when crawling cannot resolve a pulse |

## Internal

| Function | Description |
| ------ | ------ |
| [getContentDigest](functions/getContentDigest.md) | Get the hash digest of twine content |
| [verifySignature](functions/verifySignature.md) | Verify the signature of a chain or pulse |

## Type Guards

| Function | Description |
| ------ | ------ |
| [isISODate](functions/isISODate.md) | Is this string a valid ISO Date |
| [isInteger](functions/isInteger.md) | Is this an integer |
| [isUnsignedInteger](functions/isUnsignedInteger.md) | Is this a positive integer |
| [isIterable](functions/isIterable.md) | Is this a sync iterable |
| [isAsyncIterable](functions/isAsyncIterable.md) | Is this an async iterable |
| [isAnyIterable](functions/isAnyIterable.md) | Is this a sync or async iterable |
| [isCid](functions/isCid.md) | Is this a CID object (not a string) |
| [isMixins](functions/isMixins.md) | Is this a mixin list |
| [isLinks](functions/isLinks.md) | Is this a links list |
| [isPulseContent](functions/isPulseContent.md) | Is this valid pulse content |
| [isChainContent](functions/isChainContent.md) | Is this valid chain content |
| [isPulseValue](functions/isPulseValue.md) | Is this a pulse value |
| [isChainValue](functions/isChainValue.md) | Is this a chain value |
| [isTwineValue](functions/isTwineValue.md) | Is this a twine value (pulse or chain) |
| [isTwine](functions/isTwine.md) | Is this a twine |
| [isChain](functions/isChain.md) | Is this a chain |
| [isPulse](functions/isPulse.md) | Is this a pulse |
| [isFulfilledPulseResolution](functions/isFulfilledPulseResolution.md) | Is this a fulfilled pulse resolution |
| [isFulfilledChainResolution](functions/isFulfilledChainResolution.md) | Is this a fulfilled chain resolution |
| [isPulseQuery](functions/isPulseQuery.md) | Is this a pulse query |
