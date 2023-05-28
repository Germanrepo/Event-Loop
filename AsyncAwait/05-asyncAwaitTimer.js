
const timer = async () => {
    console.time()
    const a = await new Promise((resolve, rejected) => {
        setTimeout(() => resolve(3), 3000)
    })
    console.log(a + ' segundos')

    const b = await new Promise((resolve, rejected) => {
        setTimeout(() => resolve(5), 5000)
    })
    console.log(b + ' segundos')

    const c = await new Promise((resolve, rejected) => {
        setTimeout(() => resolve(7), 7000)
    })
    console.log(c + ' segundos')
    console.timeEnd()
}


const timerPromise = async () => {
    console.time()
    await new Promise((resolve, rejected) => {
        setTimeout(() => resolve(console.log('3 segundos')), 3000)
    })
    
    await new Promise((resolve, rejected) => {
        setTimeout(() => resolve(console.log('5 segundos')), 5000)
    })

    await new Promise((resolve, rejected) => {
        setTimeout(() => resolve(console.log('7 segundos')), 7000)
    })
    console.timeEnd()
}

// timer()
timerPromise()