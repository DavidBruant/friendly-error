'use strict';

const chalk = require('chalk');
const {parse} = require('error-stack-parser');
const terminalLink = require('terminal-link');

const errorTriage = require('./errorTriage')

// Remove 10-line default limit to stacks
Error.stackTraceLimit = Infinity;

function friendlyErrorHandle(error){

    const errorType = errorTriage.find(errT => !!errT.detect(error));
    let toDisplay;
    
    const FRIENDLY_ERROR_PREFIX = [ chalk.inverse.bold.blue('🐌 - Friendly error - 🐼') ];

    if(errorType){
        toDisplay = [
            ...FRIENDLY_ERROR_PREFIX,
            ...errorType.display(error),
            ...errorType.recommandation(error),
            terminalLink(`Read more: ${errorType.detailURL}`, errorType.detailURL)
        ]
    }
    else{
        toDisplay = [
            ...FRIENDLY_ERROR_PREFIX,
            chalk.bold.yellow(error.message),
            chalk.bold.red(error.stack)
        ]
    }
    
    toDisplay.filter(e => !!e).forEach(e => console.error(e))

    process.stderr.write('\n')
}

process.on('uncaughtException', friendlyErrorHandle);
process.on('unhandledRejection', friendlyErrorHandle);