[**@twine-protocol/twine-core v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-core](../index.md) / ChainContent

# Type Alias: ChainContent\<M\>

> **ChainContent**\<`M`\>: `object`

Chain metadata

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `M` *extends* [`AnyMap`](AnyMap.md) | [`AnyMap`](AnyMap.md) |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `key` | [`JWK`](../interfaces/JWK.md) | Public key in JWK format | [packages/twine-core/src/types.ts:41](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L41) |
| `links_radix` | `number` | Radix used for links list | [packages/twine-core/src/types.ts:43](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L43) |
| `meta` | `M` | General Metadata | [packages/twine-core/src/types.ts:45](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L45) |
| `mixins` | [`Mixin`](Mixin.md)[] | List of mixins | [packages/twine-core/src/types.ts:47](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L47) |
| `source` | `string` | Short identifier to denote the source producing this chain | [packages/twine-core/src/types.ts:49](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L49) |
| `specification` | `string` | Twine specification | [packages/twine-core/src/types.ts:51](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L51) |

## Defined in

[packages/twine-core/src/types.ts:39](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-core/src/types.ts#L39)
