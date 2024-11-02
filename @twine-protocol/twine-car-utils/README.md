**@twine-protocol/twine-car-utils v0.0.3** • **Docs**

***

[twine-js](../../README.md) / @twine-protocol/twine-car-utils

# @twine-protocol/twine-car-utils

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Block](interfaces/Block.md) | A block in a CARv2 file |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [Reader](type-aliases/Reader.md) | A Car Reader |

## Functions

| Function | Description |
| ------ | ------ |
| [allTwines](functions/allTwines.md) | Get all twines in a resolver |
| [blocksToTwines](functions/blocksToTwines.md) | Convert blocks to twines |
| [dumpToCar](functions/dumpToCar.md) | Dump all resolvable chains to a CARv2 file. |
| [roots](functions/roots.md) | Get CIDs of chains and their latest pulses |
| [toMemoryStore](functions/toMemoryStore.md) | Convert a CARv2 reader to a MemoryStore |
| [twinesToCar](functions/twinesToCar.md) | Convert an iterable of twines to a CARv2 formatted async iterable of byte arrays. |

## Resolver

| Class | Description |
| ------ | ------ |
| [CarResolver](classes/CarResolver.md) | A Twine Resolver that reads from a CARv2 Reader |
