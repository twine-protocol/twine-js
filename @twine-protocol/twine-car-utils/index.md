**@twine-protocol/twine-car-utils v0.0.3** • **Docs**

***

[twine-js](../../index.md) / @twine-protocol/twine-car-utils

# @twine-protocol/twine-car-utils

This package provides utilities for converting twine data to and from CAR files.

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
| [twinesToCar](functions/twinesToCar.md) | Convert an iterable of twines to a CARv2 formatted async iterable of byte arrays. |
| [allTwines](functions/allTwines.md) | Get all twines in a resolver |
| [roots](functions/roots.md) | Get CIDs of chains and their latest pulses |
| [dumpToCar](functions/dumpToCar.md) | Dump all resolvable chains to a CARv2 file. |
| [blocksToTwines](functions/blocksToTwines.md) | Convert blocks to twines |
| [toMemoryStore](functions/toMemoryStore.md) | Convert a CARv2 reader to a MemoryStore |

## Resolver

| Class | Description |
| ------ | ------ |
| [CarResolver](classes/CarResolver.md) | A Twine Resolver that reads from a CARv2 Reader |
