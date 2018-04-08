// with a little help from https://chromium.googlesource.com/v8/v8/+/master/src/messages.h
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

const chalk = require('chalk');

const INVALID_READ = 'INVALID_READ';
const CALLED_NON_CALLABLE = 'CALLED_NON_CALLABLE';

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
                'Find the type of the expression'
            ]
        },
        detailURL : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_type'
    },
    {
        id: CALLED_NON_CALLABLE,
        detect(e){
            return e instanceof TypeError &&
                e.message.endsWith('is not a function')
        },
        display(e){
            return [
                chalk.bold.yellow(e.message),
                chalk.bold.red(e.stack)
            ]
        },
        recommandation(e){
            return [
                'Find why what you tried to call is not a function'
            ]
        },
        detailURL : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function'
    }
]