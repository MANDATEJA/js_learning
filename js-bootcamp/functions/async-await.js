const getDataPromise = (num) => new Promise((resolve, reject) => { // Using shorthand syntax
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000);
})

const processData = async () => {
    let data = await getDataPromise('abc')
    data = await getDataPromise(data)
    return data
}

processData().then(data => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})