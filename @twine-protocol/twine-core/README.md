**@twine-protocol/twine-core v0.1.0** • **Docs**

***

[twine-js](../../README.md) / @twine-protocol/twine-core

# @twine-protocol/twine-core

## Internal

| Function | Description |
| ------ | ------ |
| [asyncThrottle](functions/asyncThrottle.md) | Throttle an async function call |
| [memoized](functions/memoized.md) | memoize an async function call so that while it is pending, the same call is not made again |

## Other

| Class, Interface, Type alias, Variable, Function | Description |
| ------ | ------ |
| [CID](classes/CID.md) | - |
| [IncompleteResolution](classes/IncompleteResolution.md) | Thrown when crawling cannot resolve a pulse |
| [InvalidSignature](classes/InvalidSignature.md) | Signifies that the signature is invalid |
| [InvalidTwineData](classes/InvalidTwineData.md) | Signifies that the twine data does not follow specs |
| [MemoryStore](classes/MemoryStore.md) | A store that keeps twines in memory |
| [Twine](classes/Twine.md) | Generic type for twine data |
| [TwineCache](classes/TwineCache.md) | A store that caches twines in memory |
| [TwineError](classes/TwineError.md) | General Twine Error class |
| [JWK](interfaces/JWK.md) | JSON Web Key ([JWK](https://www.rfc-editor.org/rfc/rfc7517)). "RSA", "EC", "OKP", and "oct" key types are supported. |
| [Signer](interfaces/Signer.md) | Any class implementing this interface can be used as a signer for Twine |
| [Store](interfaces/Store.md) | A store that can fetch and save twines |
| [AnyIterable](type-aliases/AnyIterable.md) | An async or sycn iterable |
| [AnyMap](type-aliases/AnyMap.md) | Generic map |
| [Awaitable](type-aliases/Awaitable.md) | Something that can be `await`ed |
| [CacheOptions](type-aliases/CacheOptions.md) | Cache options |
| [Chain](type-aliases/Chain.md) | A Twine that is a Chain |
| [ChainContent](type-aliases/ChainContent.md) | Chain metadata |
| [ChainStorageMeta](type-aliases/ChainStorageMeta.md) | Metadata used by the memory store to keep track of chains and pulses |
| [ChainValue](type-aliases/ChainValue.md) | Value field for chains |
| [CrawlGuide](type-aliases/CrawlGuide.md) | Crawl Guide |
| [CrawlPathContainer](type-aliases/CrawlPathContainer.md) | An object that contains a path |
| [CrawlPending](type-aliases/CrawlPending.md) | An object containing a load function that represents a pending crawl result |
| [CrawlResult](type-aliases/CrawlResult.md) | The result of a crawl that is a pulse resolution with a path |
| [FulfilledCrawlResult](type-aliases/FulfilledCrawlResult.md) | The result of a crawl that is a fulfilled pulse resolution with a path |
| [IntoCid](type-aliases/IntoCid.md) | Any type that can be coerced into a CID |
| [IntoMixin](type-aliases/IntoMixin.md) | Any type that can be coerced into a mixin |
| [LoaderOptions](type-aliases/LoaderOptions.md) | Options for the loader |
| [MaybeIterable](type-aliases/MaybeIterable.md) | Something that could be a value or an iterator over that value type |
| [Mixin](type-aliases/Mixin.md) | Mixins store the information about links between chains |
| [Path](type-aliases/Path.md) | A path is a list of resolved pulse resolutions |
| [Pulse](type-aliases/Pulse.md) | A Twine that is a Pulse |
| [PulseContent](type-aliases/PulseContent.md) | Pulse |
| [PulseIndex](type-aliases/PulseIndex.md) | Pulse index (block height) |
| [PulseValue](type-aliases/PulseValue.md) | Value field for pulses |
| [Signature](type-aliases/Signature.md) | The signature type |
| [TwineContent](type-aliases/TwineContent.md) | Chain or pulse content |
| [TwineValue](type-aliases/TwineValue.md) | Value field for chain or pulse |
| [CACHE\_SINGLETON](variables/CACHE_SINGLETON.md) | A singleton cache store |
| [across](functions/across.md) | Create a guide that moves horizontally across chains |
| [along](functions/along.md) | Create a guide that moves along chains |
| [asCid](functions/asCid.md) | Convert something into a CID |
| [asMixin](functions/asMixin.md) | Convert something mixin-like into a mixin |
| [asQuery](functions/asQuery.md) | Convert something query-like into a query |
| [bytesToHex](functions/bytesToHex.md) | Convert bytes into a hex string |
| [coerceCid](functions/coerceCid.md) | Coerce something into a CID |
| [coerceQuery](functions/coerceQuery.md) | Coerce something into a query |
| [collect](functions/collect.md) | Collect an async iterable into an array |
| [crawl](functions/crawl.md) | Crawl the tapestry |
| [findPath](functions/findPath.md) | Find a path between two pulses |
| [fromBytes](functions/fromBytes.md) | Converts a bytes array (ipld block) into a twine instance |
| [fromJSON](functions/fromJSON.md) | Convert a DAG-JSON encoded twine into a twine instance |
| [getContentDigest](functions/getContentDigest.md) | Get the hash digest of twine content |
| [getLayerPos](functions/getLayerPos.md) | Get the highest layer for which this (pulse) index is an anchor for. For example: in base 10, for the following indicies... |
| [hex2bytes](functions/hex2bytes.md) | Convert a hex string into bytes |
| [isAnyIterable](functions/isAnyIterable.md) | Is this a sync or async iterable |
| [isAsyncIterable](functions/isAsyncIterable.md) | Is this an async iterable |
| [isChain](functions/isChain.md) | Is this a chain |
| [isChainContent](functions/isChainContent.md) | Is this valid chain content |
| [isChainValue](functions/isChainValue.md) | Is this a chain value |
| [isCid](functions/isCid.md) | Is this a CID object (not a string) |
| [isFulfilledChainResolution](functions/isFulfilledChainResolution.md) | Is this a fulfilled chain resolution |
| [isFulfilledPulseResolution](functions/isFulfilledPulseResolution.md) | Is this a fulfilled pulse resolution |
| [isInteger](functions/isInteger.md) | Is this an integer |
| [isISODate](functions/isISODate.md) | Is this string a valid ISO Date |
| [isIterable](functions/isIterable.md) | Is this a sync iterable |
| [isLinks](functions/isLinks.md) | Is this a links list |
| [isMixins](functions/isMixins.md) | Is this a mixin list |
| [isPulse](functions/isPulse.md) | Is this a pulse |
| [isPulseContent](functions/isPulseContent.md) | Is this valid pulse content |
| [isPulseQuery](functions/isPulseQuery.md) | Is this a pulse query |
| [isPulseValue](functions/isPulseValue.md) | Is this a pulse value |
| [isTwine](functions/isTwine.md) | Is this a twine |
| [isTwineValue](functions/isTwineValue.md) | Is this a twine value (pulse or chain) |
| [isUnsignedInteger](functions/isUnsignedInteger.md) | Is this a positive integer |
| [linksAsQueries](functions/linksAsQueries.md) | Converts a pulse's links array into a list of queries. |
| [mixinDiff](functions/mixinDiff.md) | Compare two mixin lists and return the differences |
| [randomWalk](functions/randomWalk.md) | Create a guide that does a random walk through the tapestry |
| [skipList](functions/skipList.md) | Get an iterator of indices that can be used to skip through the chain. |
| [spread](functions/spread.md) | Create a guide that spreads out in all directions |
| [towards](functions/towards.md) | Create a guide that moves efficiently towards a target pulse |
| [verifySignature](functions/verifySignature.md) | Verify the signature of a chain or pulse |
| [within](functions/within.md) | Create a guide that visits all skiplist links as they are seen |

## Resolving

| Class, Interface, Type alias, Function | Description |
| ------ | ------ |
| [ChainResolver](classes/ChainResolver.md) | A helper to restrict the resolution to a specific chain |
| [CombinedResolver](interfaces/CombinedResolver.md) | A resolver that combines multiple resolvers |
| [ResolveLatestOptionsCombined](interfaces/ResolveLatestOptionsCombined.md) | Options for combined resolution of latest pulse calls |
| [ResolveOptionsCombined](interfaces/ResolveOptionsCombined.md) | Options for combined resolution calls |
| [Resolver](interfaces/Resolver.md) | Resolves a query into a chain or pulse |
| [ChainResolution](type-aliases/ChainResolution.md) | A successful or failed chain resolution |
| [CombinedChainResolution](type-aliases/CombinedChainResolution.md) | A combined chain resolution |
| [CombinedPulseResolution](type-aliases/CombinedPulseResolution.md) | A combined pulse resolution |
| [CombineResolversOptions](type-aliases/CombineResolversOptions.md) | Options for combining resolvers |
| [FetchChainQuery](type-aliases/FetchChainQuery.md) | CID for a chain lookup |
| [FetchPulseQuery](type-aliases/FetchPulseQuery.md) | CIDs for a pulse lookup |
| [FulfilledChainResolution](type-aliases/FulfilledChainResolution.md) | The product of a successful chain resolution |
| [FulfilledPulseResolution](type-aliases/FulfilledPulseResolution.md) | The product of a successful pulse resolution |
| [FulfilledResolution](type-aliases/FulfilledResolution.md) | A successful chain or pulse resolution |
| [IntoResolveChainQuery](type-aliases/IntoResolveChainQuery.md) | Something that can be coerced into a chain resolution query |
| [IntoResolvePulseQuery](type-aliases/IntoResolvePulseQuery.md) | Something that can be coerced into a pulse resolution query |
| [PulseResolution](type-aliases/PulseResolution.md) | A successful or failed pulse resolution |
| [Resolution](type-aliases/Resolution.md) | A resolution of any kind |
| [ResolveCallers](type-aliases/ResolveCallers.md) | An object containing methods to fetch twines |
| [ResolveChainQuery](type-aliases/ResolveChainQuery.md) | A query to resolve a chain |
| [ResolveChainQueryStrict](type-aliases/ResolveChainQueryStrict.md) | A query to resolve a chain strictly using a CID object |
| [ResolveOptions](type-aliases/ResolveOptions.md) | Options for all resolvers |
| [ResolvePulseQuery](type-aliases/ResolvePulseQuery.md) | A query to resolve a pulse |
| [ResolvePulseQueryStrict](type-aliases/ResolvePulseQueryStrict.md) | A query to resolve a pulse strictly using CID objects |
| [ResolveQueryStrict](type-aliases/ResolveQueryStrict.md) | A strict query to resolve a chain or pulse |
| [UnfulfilledChainResolution](type-aliases/UnfulfilledChainResolution.md) | The product of a failed chain resolution |
| [UnfulfilledPulseResolution](type-aliases/UnfulfilledPulseResolution.md) | The product of a failed pulse resolution |
| [UnfulfilledResolution](type-aliases/UnfulfilledResolution.md) | A failed chain or pulse resolution |
| [combineResolvers](functions/combineResolvers.md) | Combine multiple resolvers into a single resolver |
| [memoized](functions/memoized.md) | memoize an async function call so that while it is pending, the same call is not made again |
| [resolveHelper](functions/resolveHelper.md) | A helper function for implementing the [Resolver.resolve](interfaces/Resolver.md#resolve) method |

## Store

| Class | Description |
| ------ | ------ |
| [CacheMap](classes/CacheMap.md) | A map that caches the most recently accessed items |
