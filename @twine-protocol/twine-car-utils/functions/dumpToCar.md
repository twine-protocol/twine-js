[**@twine-protocol/twine-car-utils v0.0.3**](../README.md) • **Docs**

***

[twine-js](../../../README.md) / [@twine-protocol/twine-car-utils](../README.md) / dumpToCar

# Function: dumpToCar()

> **dumpToCar**(`resolver`): `AsyncIterable`\<`Uint8Array`\>

Dump all resolvable chains to a CARv2 file.

## Parameters

• **resolver**: `Resolver`

## Returns

`AsyncIterable`\<`Uint8Array`\>

## Example

```js
// You can output the car to a file with:
import { pipeline } from 'node:stream/promises'
import { createWriteStream } from 'node:fs'
await pipeline(
  dumpToCar(resolver),
  createWriteStream(path)
)
```

## Defined in

[index.ts:99](https://github.com/twine-protocol/twine-js/blob/bc5370ff2573a6e5e5c7a912acc672967ce4c5db/packages/twine-car-utils/src/index.ts#L99)
