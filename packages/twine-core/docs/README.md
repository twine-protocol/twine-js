@twine-protocol/twine-core / [Exports](modules.md)

# twine-core

This is a library for the [Twine Protocol](https://docs.twine.world), to learn more about the protocol, visit <https://docs.twine.world>.

This is the core javascript (typescript) package for the Twine protocol. It will be used
by all other packages.

This is a very small subset of twine utilities. It contains utilities
defining chains and pulses, storage and resolving interfaces, and signature verification.

To actually **create** twine data, you need the [twine-builder](https://github.com/twine-protocol/twine-js/tree/master/packages/twine-builder) package.

To **retrieve** or **store** twine data you'll need one of these packages:

- [twine-http-store](https://github.com/twine-protocol/twine-js/tree/master/packages/twine-http-store) Store/retrieve data from an http api
- [twine-car-utils](https://github.com/twine-protocol/twine-js/tree/master/packages/twine-car-utils) Store/retrieve data in CAR files
- [twine-blockstore-store](https://github.com/twine-protocol/twine-js/tree/master/packages/twine-blockstore-store) Store/retrieve data in BlockStores

## Installation

```sh
npm install --save @twine-protocol/twine-core
```

## Usage

```js
import { fromJSON } from '@twine-protocol/twine-core'
import pulseJson from './my-pulse.json'

const pulse = await fromJSON(pulseJson)
```

## Documentation

API documentation for this package is found in [./docs]
