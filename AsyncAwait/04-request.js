const click = document.getElementById('botonClick')
const block = document.getElementById('botonBlock')
const text = document.getElementById('text')
const container = document.getElementById('container')

let contador = 0

const url = 'https://jsonplaceholder.typicode.com'

click.addEventListener('click', () => {
    contador++
    text.innerText = `Numero de clicks: ${contador}`
})

block.addEventListener('click', () => {
    getUserInfo(1)
})

const getUserInfo = async (id) => {
    try {
        const user = await (await fetch(`${url}/users?id=${id}`)).json()
        container.innerHTML = `<h3>User Info:</h3><p>${user[0].email}</p>`

        const posts = await (await fetch(`${url}/posts?userId=${id}&_limit=3`)).json()
        container.innerHTML += posts.map(p => {
            return `<div class="post"><h4>${p.title}</h4></div>`
        }).join('')

        const promiseComments = await Promise.all(posts.map(p => {
            return fetch(`${url}/comments?postId=${p.id}&_limit=2`)
        }))
        const comments = await Promise.all(promiseComments.map(p => p.json()))
        container.querySelectorAll('.post').forEach((div, i) => {
            div.innerHTML += comments[i].map(c => {
                return `<p><span>${c.email}</span>: ${c.body}</p>`
            }).join('')
        })
    } catch (e) {
        console.error(e)
    }

}