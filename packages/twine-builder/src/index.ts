/**
 * @packageDocumentation
 * This package is used to build Twine objects.
 *
 * In order to create Twine objects you need a Signer. The {@link JoseSigner}
 * class is the easiest way to get started.
 *
 * @example
 * ```js
 * const signer = await JoseSigner.fromRandomness('RS256', { modulusLength: 2048 })
 * const chain = await createChain({ source: 'some-service.com', links_radix: 3 }, signer)
 * await chain.verifySignature() // should not throw
 *
 * const first = await createPulse(chain, false, {
 *   foo: 'some data',
 * }, signer)
 * await first.verifySignature(chain) // should not throw
 *
 * const previous = first
 * const next = await createPulse(chain, previous, {
 *   foo: 'some more data',
 * }, signer)
 * // etc...
 */

export * from './factory'
export * from './jose-signer'
