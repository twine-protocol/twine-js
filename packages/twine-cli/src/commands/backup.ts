import { storeToCar } from '@twine-protocol/twine-car-utils'
import { HttpStore } from '@twine-protocol/twine-http-store'
import { Store } from '@twine-protocol/twine-core'
import { BuilderCallback } from 'yargs'
import { output } from '../output'

function getStore(source: string, options?: any): Store {
  if (source.startsWith('http')) {
    return new HttpStore(source, options)
  } else {
    throw new Error(`Unsupported source: ${source}`)
  }
}

export const command = 'backup'
export const describe = 'Backup a store to a CARv2 file'
export const builder: BuilderCallback<string, void> = (yargs) => yargs
  .options({
    'input': {
      describe: 'Input source store.',
      alias: 'i',
      required: true,
    },
    'output': {
      describe: 'Path to output file.',
      alias: 'o',
      required: true,
    },
  })

export const handler = async function generateKey(argv: any) {
  const source = argv.input
  const store = getStore(source)
  const car = storeToCar(store)
  await output(car, argv.output)
}