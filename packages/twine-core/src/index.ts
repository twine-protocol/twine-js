/**
 * @packageDocumentation
 * This is the core javascript (typescript) package for the Twine protocol.
 * It will be used by all other packages.
 *
 * You will likely be most interested in the {@link Twine} class, {@link fromJSON}, and {@link fromBytes}.
 *
 * This is a very small subset of twine utilities. It contains utilities
 * defining chains and pulses, storage and resolving interfaces, and signature verification.
 *
 * To actually **create** twine data, you need the {@link "@twine-protocol/twine-builder"} package.
 *
 * To **retrieve** or **store** twine data you'll need one of these packages:
 *
 * - {@link "@twine-protocol/twine-http-store"} Store/retrieve data from an http api
 * - {@link "@twine-protocol/twine-car-utils"} Store/retrieve data in CAR files
 * - {@link "@twine-protocol/twine-blockstore-store"} Store/retrieve data in BlockStores
 *
 * @see {@link Twine} for the main class
 * @see {@link fromJSON} for creating Twine objects from JSON
 * @see {@link fromBytes} for creating Twine objects from bytes
 */
export type * from './types'
export * from './errors'
export * from './checks'
export * from './conversion'
export * from './twine'
export * from './links'
export * from './compare'
export * from './resolver'
export * from './store'
export * from './verify'
export * from './crawl'

/**
 * @groupDescription Internal
 *
 * Internal utilities for twine. They are available for use, but not recommended.
 */