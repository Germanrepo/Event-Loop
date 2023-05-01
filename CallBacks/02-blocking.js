const click = document.getElementById('botonClick')
const block = document.getElementById('botonBlock')
const text = document.getElementById('text')
let contador = 0

click.addEventListener('click', () => {
    contador++
    text.innerText = `Numero de clicks: ${contador}`
})


// block.addEventListener('click', () => {
//     console.time()
//     for (let i = 0; i < 12000; i++) {
//         console.log(i * 2)
//     }
//     console.timeEnd()
// })

block.addEventListener('click', () => {
    console.time()
    const nums = [1.5, 2.5, 3.5, 4.5]
    for (const n of nums) {
        setTimeout(() => {
            for(let i = 0; i < 4000; i++){
                console.log(n)
            }    
        }, 0)
    }
    console.timeEnd()
})

