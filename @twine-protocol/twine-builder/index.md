**@twine-protocol/twine-builder v0.1.0** • **Docs**

***

[twine-js](../../index.md) / @twine-protocol/twine-builder

# @twine-protocol/twine-builder

This package is used to build Twine objects.

In order to create Twine objects you need a Signer. The [JoseSigner](classes/JoseSigner.md)
class is the easiest way to get started.

## Example

```js
const signer = await JoseSigner.fromRandomness('RS256', { modulusLength: 2048 })
const chain = await createChain({ source: 'some-service.com', links_radix: 3 }, signer)
await chain.verifySignature() // should not throw

const first = await createPulse(chain, false, {
  foo: 'some data',
}, signer)
await first.verifySignature(chain) // should not throw

const previous = first
const next = await createPulse(chain, previous, {
  foo: 'some more data',
}, signer)
// etc...
```

## Interfaces

| Interface | Description |
| ------ | ------ |
| [UnsanitizedChainContent](interfaces/UnsanitizedChainContent.md) | Chain content accepted by the builder |

## Functions

| Function | Description |
| ------ | ------ |
| [getNextLinks](functions/getNextLinks.md) | Next pulses skip links |
| [createChain](functions/createChain.md) | Create a new chain |
| [createPulse](functions/createPulse.md) | Create a new pulse |

## Signer

| Class | Description |
| ------ | ------ |
| [JoseSigner](classes/JoseSigner.md) | A signer that uses the jose library to sign twines |
