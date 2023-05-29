const click = document.getElementById('click')
const text = document.getElementById('text')
const async = document.getElementById('async')
const div = document.getElementById('container')

let contador = 0

click.onclick = () => {
    text.innerText = `Numero de clicks: ${++contador}`
}

async.addEventListener('click', () => {
  added()

})

const added = ()=>{
  for(let i = 0; i < 12000; i++){
    new Promise((resolved, rejected)=>{
        resolved(i)
    }).then(res => console.log(res))
  }
}


// const added = () => {
//     setTimeout(() => {
//         const h1 = document.createElement('h1')

//         h1.textContent = 'Titulo'

//         div.innerHTML += `<h1>Titulo</h1>`
        
//         setTimeout(() => {
//             const p = document.createElement('p')
            
//             p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda illo consectetur dolore obcaecati alias, beatae quo reprehenderit modi facilis molestias!'
            
//             div.innerHTML += `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda illo consectetur dolore obcaecati alias, beatae quo reprehenderit modi facilis molestias!</p>`
//         }, 3000)
//     },3000)
// }