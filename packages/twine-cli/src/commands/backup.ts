import { allTwines, roots, twinesToCar } from '@twine-protocol/twine-car-utils'
import { BuilderCallback } from 'yargs'
import { output } from '../output'
import { getResolverFromSources, totalTwines } from '../resolver'
import { consume, tap } from 'streaming-iterables'
import { SingleBar, Presets } from 'cli-progress'

export const command = 'backup'
export const describe = 'Backup a store to a CARv2 file'
export const builder: BuilderCallback<string, void> = (yargs) => yargs
  .options({
    'input': {
      describe: 'Input source store.',
      alias: 'i',
      requiresArg: true,
      demandOption: true,
    },
    'output': {
      describe: 'Path to output file.',
      alias: 'o',
      requiresArg: true,
      normalize: true,
      demandOption: true,
    },
  })

export const handler = async function generateKey(argv: any) {
  const progress = new SingleBar({
    forceRedraw: true,
    gracefulExit: true,
  }, Presets.shades_classic)
  const resolver = await getResolverFromSources(argv.input)
  try {
    const total = await totalTwines(resolver)
    let current = 0
    progress.start(total, current)
    const twines = tap(twine => {
      progress.start(total, ++current, { pulse: twine.cid.toString() })
    }, allTwines(resolver))
    // await consume(twines)
    const car = twinesToCar(twines, roots(resolver))
    await output(car, argv.output)
  } catch (e: any) {
    throw e
  } finally {
    resolver.close()
    progress.stop()
  }
}