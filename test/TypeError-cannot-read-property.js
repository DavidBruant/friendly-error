require('../main.js')

function err(){
    const o = {
        a: 1
    }

    setTimeout(() => {
        // trigger TypeError
        return o.b.yo;
    }, 10)
}

err();