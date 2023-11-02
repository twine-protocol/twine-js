import { generateKeyPair, exportPKCS8 } from 'jose'
import { output } from '../output'
import { ALGORITHMS } from '../algorithms'
import { BuilderCallback } from 'yargs'

export const command = 'keygen'
export const describe = 'Generate a new key private key'
export const builder: BuilderCallback<string, void> = (yargs) => yargs
  .options({
    'output': {
      describe: 'Path to output file. If unspecified, the key will be printed to stdout',
      alias: 'o',
    },
    'algorithm': {
      describe: 'Algorithm to use for key generation',
      alias: 'a',
      demandOption: true,
      // JWA algorithm idendifiers that could be chosen
      choices: ALGORITHMS,
    },
  })

export const handler = async function generateKey(argv: any) {
  const algorithm = argv.algorithm
  const pair = await generateKeyPair(algorithm)
  const privateKey = pair.privateKey
  const pkcs = await exportPKCS8(privateKey)
  await output(pkcs, argv.output)
}