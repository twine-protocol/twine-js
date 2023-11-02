import { readFile } from 'node:fs/promises'
import { importPKCS8 } from 'jose'
import crypto from 'crypto'
import { JoseSigner, createChain } from '@twine-protocol/twine-builder'
import { ALGORITHMS } from '../algorithms'
import { output } from '../output'
import { BuilderCallback } from 'yargs'

export const command = 'init'
export const describe = 'Initialize a chain'
export const builder: BuilderCallback<string, void> = (yargs) => yargs
  .options({
    'algorithm': {
      describe: 'Algorithm to use for key generation',
      alias: 'a',
      demandOption: true,
      // JWA algorithm idendifiers that could be chosen
      choices: ALGORITHMS,
    },
    'config': {
      describe: 'Path to config file',
      alias: 'c',
      type: 'string',
      demandOption: true
    },
    'key': {
      describe: 'Path to private key in PKCS#8 format',
      alias: 'k',
      type: 'string',
      demandOption: true
    },
    'output': {
      describe: 'Path to output file. If unspecified, the key will be printed to stdout',
      alias: 'o',
    }
  })
  .coerce('config', async (arg) => {
    const content = await readFile(arg, 'utf8')
    return JSON.parse(content.toString())
  })
  .coerce('key', async (arg) => {
    const content = await readFile(arg, 'utf8')
    return await importPKCS8(content.toString(), '')
  })

export const handler = async function generateChain(argv: any) {
  const chainConfig = argv.config
  const alg = argv.algorithm
  const privateKey = argv.key
  const publicKey = crypto.createPublicKey(privateKey)
  const signer = new JoseSigner(privateKey, publicKey, alg)
  try {
    const chain = await createChain(chainConfig, signer)
    const chainJSON = JSON.stringify(chain, null, 2)
    await output(chainJSON, argv.output)
  } catch (e) {
    console.error('Problem creating chain: ', e)
  }
}