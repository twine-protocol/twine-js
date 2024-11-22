[**@twine-protocol/twine-builder v0.1.0**](../index.md) • **Docs**

***

[twine-js](../../../index.md) / [@twine-protocol/twine-builder](../index.md) / UnsanitizedChainContent

# Interface: UnsanitizedChainContent\<M\>

**`Internal`**

Chain content accepted by the builder

## Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `AnyMap` |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `source` | `string` | Short identifier to denote the source producing this chain | [sanitize.ts:14](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/sanitize.ts#L14) |
| `specification?` | `string` | Twine specification (eg: "twine/1.0.x/my-spec/1.0.0") | [sanitize.ts:18](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/sanitize.ts#L18) |
| `key?` | [`JWK`](../../twine-core/interfaces/JWK.md) | JWK to sign the chain | [sanitize.ts:22](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/sanitize.ts#L22) |
| `links_radix?` | `number` | Radix for links A value of 1 is not allowed A value of 0 is interpreted as a no-radix list. Pulses will just be linked to their previous pulse. **Default** `32` | [sanitize.ts:32](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/sanitize.ts#L32) |
| `mixins?` | `IntoResolvePulseQuery`[] | List of mixins | [sanitize.ts:36](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/sanitize.ts#L36) |
| `meta?` | `M` | General Metadata | [sanitize.ts:40](https://github.com/twine-protocol/twine-js/blob/3800995f9c83f4f5711bcf3062ea754a1e4448ce/packages/twine-builder/src/sanitize.ts#L40) |
