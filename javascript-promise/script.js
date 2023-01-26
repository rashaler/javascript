let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
    })

    p.then((message) => {
        console.log('In first .then block ' + message)
    }).catch((message) => {
        console.log('In first .catch block ' + message)
    })
    p.then((message) => {
        console.log('In second .then block ' + message)
    }).catch((message) => {
        console.log('In second.catch block ' + message)
    })