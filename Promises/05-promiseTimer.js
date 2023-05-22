const tresSegundos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 3000)
    })
}
const seisSegundos = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(6)
    }, 6000)
})

const ochoSegundos = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(8)
    }, 8000)
})


const console2 = async () => {
    await Promise.resolve(setTimeout(() => console.log(2)), 0)
}

console.time()
tresSegundos()
    .then(res => {
        console.log(res)
        return seisSegundos()
    })
    .then(res => {
        console.log(res)
        return ochoSegundos()
    })
    .then(res => {
        console.log(res)
        
    })
    .then(() => console.timeEnd())