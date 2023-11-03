import { CarResolver, roots } from '@twine-protocol/twine-car-utils'
import { FsBlockstore } from 'blockstore-fs'
import { FsDatastore } from 'datastore-fs'
import { LevelBlockstore } from 'blockstore-level'
import { LevelDatastore } from 'datastore-level'
import { CarIndexedReader } from '@ipld/car'
import { HttpStore } from '@twine-protocol/twine-http-store'
import { BlockstoreStore } from '@twine-protocol/twine-blockstore-store'
import { CombinedResolver, Resolver, combineResolvers, isPulse } from '@twine-protocol/twine-core'
import { stat } from 'fs/promises'
import path from 'path'

function fsType(path: string) {
  return stat(path).then(stats => stats.isDirectory() ? 'dir' : 'file').catch(() => null)
}

async function isLevelDbDir(path: string) {
  return (await fsType(path + '/CURRENT')) === 'file'
}

async function getResolver(source: string, options?: any): Promise<Resolver> {
  if (source.startsWith('http')) {
    return new HttpStore(source, options)
  }

  source = path.normalize(source)
  const pathKind = await fsType(source)

  if (pathKind === 'file' && source.endsWith('.car')) {
    return new CarResolver(await CarIndexedReader.fromFile(source))
  }

  if (pathKind === 'dir') {
    // check for meta and blocks subdirs
    const metaPath = path.join(source, '/meta')
    const blocksPath = path.join(source, '/blocks')
    if (!await fsType(metaPath) || !await fsType(blocksPath)) {
      throw new Error(`Invalid directory source: ${source}`)
    }
    // check for level or fs
    if (await isLevelDbDir(metaPath) && await isLevelDbDir(blocksPath)) {
      return new BlockstoreStore(
        new LevelDatastore(metaPath),
        new LevelBlockstore(blocksPath)
      )
    } else {
      return new BlockstoreStore(
        new FsDatastore(metaPath),
        new FsBlockstore(blocksPath)
      )
    }
  }

  throw new Error(`Unsupported source: ${source}`)
}

export async function getResolverFromSources(source: string[] | string): Promise<CombinedResolver> {
  const sources = Array.isArray(source) ? source : [source]
  const resolvers = await Promise.all(sources.map(source => getResolver(source)))
  const resolver = combineResolvers(resolvers)
  return resolver
}

export async function totalTwines(resolver: Resolver) {
  // for each chain it can look at the latest pulse and
  // get the index to add up to get the total
  let total = 0
  for await (const chain of resolver.chains()) {
    total += 1
    const latest = await resolver.resolveLatest(chain)
    if (latest.pulse) {
      total += latest.pulse.value.content.index + 1
    }
  }
  return total
}