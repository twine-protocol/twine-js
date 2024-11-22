[**@twine-protocol/twine-car-utils v0.0.3**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-car-utils](../index.md) / dumpToCar

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

[index.ts:104](https://github.com/twine-protocol/twine-js/blob/fb5041c7a2da4a796f653066248604ca1c5dccc6/packages/twine-car-utils/src/index.ts#L104)