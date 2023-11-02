import yargs from 'yargs'

yargs(process.argv.slice(2))
  .command(require('./commands/keygen'))
  .command(require('./commands/create-chain'))
  .command(require('./commands/backup'))
  // provide a minimum demand and a minimum demand message
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .parseAsync()