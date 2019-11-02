const program = require('commander')
const pkg = require('../package.json')

program
  .version(pkg.version)
  .option('-C, --chdir <path>', 'change the working directory')
  .option(
    '-c, --config <path>',
    'set config path. defaults to ./stencil/config.json'
  )
  .option('-T, --no-tests', 'ignore test hook')

program
  .command('component [name]')
  .description('create a react component')
  .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action(function(name, options) {
    const mode = options.setup_mode || 'normal'
    name = name || 'all'
    console.log('setup for %s env(s) with %s mode', name, mode)
  })

program
  .command('feature [name]')
  .description('create a react feature')
  .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action(function(name, options) {
    const mode = options.setup_mode || 'normal'
    name = name || 'all'
    console.log('setup for %s env(s) with %s mode', name, mode)
  })

program
  .command('routes <cmd>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option('-e, --exec_mode <mode>', 'Which exec mode to use')
  .action(function(cmd, options) {
    console.log('exec "%s" using %s mode', cmd, options.exec_mode)
  })
  .on('--help', function() {
    console.log('')
    console.log('Examples:')
    console.log('')
    console.log('  $ deploy exec sequential')
    console.log('  $ deploy exec async')
  })

program.command('*').action(function(env) {
  console.log('deploying "%s"', env)
})

program.parse(process.argv)
