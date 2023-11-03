import { allTwines, roots, twinesToCar } from '@twine-protocol/twine-car-utils'
import { BuilderCallback } from 'yargs'
import { output } from '../output'
import { getResolverFromSources, totalTwines } from '../resolver'
import { tap } from 'streaming-iterables'
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
  const progress = new SingleBar({ forceRedraw: true }, Presets.shades_classic)
  process.addListener('SIGINT', () => {
    progress.stop()
  })
  const resolver = await getResolverFromSources(argv.input)
  const total = await totalTwines(resolver)
  let current = 0
  const twines = tap(twine => {
    progress.start(total, current++)
  }, allTwines(resolver))
  const car = twinesToCar(twines, roots(resolver))
  await output(car, argv.output)
  progress.stop()
}