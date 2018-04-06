'use strict';

const chalk = require('chalk')

function friendlyErrorHandle(error){
    console.error(chalk.inverse.bold.blue('🐌 - Friendly error - 🐼'));
    console.error(chalk.bold.yellow(error.message))
    console.error(chalk.bold.red(error.stack))
    process.stderr.write('\n')
}

process.on('uncaughtException', friendlyErrorHandle);
process.on('unhandledRejection', friendlyErrorHandle);