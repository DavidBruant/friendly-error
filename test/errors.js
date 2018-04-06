function sync(){
    throw new Error('Error message sync whaddup');
}

function asinc(){
    return Promise.reject(new Error('Error message asinc whadoop'))
}

asinc()
sync()
