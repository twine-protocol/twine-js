[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / PulseContent

# Type Alias: PulseContent\<P\>

> **PulseContent**\<`P`\>: `object`

Pulse content

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `P` *extends* [`AnyMap`](AnyMap.md) | [`AnyMap`](AnyMap.md) |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `chain` | [`CID`](../classes/CID.md) | Chain CID this pulse belongs to | [packages/twine-core/src/types.ts:64](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L64) |
| `index` | [`PulseIndex`](PulseIndex.md) | Index of this pulse | [packages/twine-core/src/types.ts:66](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L66) |
| `links` | [`CID`](../classes/CID.md)[] | List of links on the same chain | [packages/twine-core/src/types.ts:68](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L68) |
| `mixins` | [`Mixin`](Mixin.md)[] | List of mixins to other chains | [packages/twine-core/src/types.ts:70](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L70) |
| `payload` | `P` | User specified payload | [packages/twine-core/src/types.ts:72](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L72) |
| `source` | `string` | Short identifier to denote the source producing this pulse | [packages/twine-core/src/types.ts:74](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L74) |

## Defined in

[packages/twine-core/src/types.ts:62](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L62)
