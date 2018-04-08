require('../main.js')

function err(){
    const o = {
        a: 1
    }

    setTimeout(() => {
        // trigger TypeError because it's not supposed to be a function
        process()
    }, 10)
}

err();