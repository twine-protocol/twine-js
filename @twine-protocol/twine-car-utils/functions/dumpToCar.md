[**@twine-protocol/twine-car-utils v0.0.3**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-car-utils](../index.md) / dumpToCar

# Function: dumpToCar()

> **dumpToCar**(`resolver`): `AsyncIterable`\<`Uint8Array`\>

Dump all resolvable chains to a CARv2 file.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `resolver` | `Resolver` |

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

[index.ts:104](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-car-utils/src/index.ts#L104)
