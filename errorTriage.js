// with a little help from https://chromium.googlesource.com/v8/v8/+/master/src/messages.h
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

const chalk = require('chalk');

const INVALID_READ = 'INVALID_READ';

module.exports = [
    {
        id: INVALID_READ,
        detect(e){
            return e instanceof TypeError &&
                e.message.startsWith('Cannot read property ')
        },
        display(e){
            return [
                chalk.bold.yellow(e.message),
                chalk.bold.red(e.stack)
            ]
        },
        recommandation(e){
            return [
                'Verify the type of the expression'
            ]
        },
        detailURL : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_type'
    }
]