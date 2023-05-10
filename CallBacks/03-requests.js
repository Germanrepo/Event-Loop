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

const getUserInfo = (id) => {
    request({ uri: `${url}/users?id=${id}` }, (err, res, body) => {
        if (err) console.error(err)

        const user = JSON.parse(body)[0]
        console.log(user)
        container.innerHTML += `
            <h2>User Info: </h2>
            <p>${user.email}</p>
        `
        request({ uri: `${url}/posts?userId=${id}&_limit=3` }, (err, res, body) => {
            if (err) console.error(err)

            const post = JSON.parse(body)
            console.log(post)
            for (let p of post) {
                request({ uri: `${url}/comments?postId=${p.id}&_limit=2` }, (err, res, body) => {
                    if (err) console.error(err)

                    const comment = JSON.parse(body)
                    console.log(comment)
                    const commentUsers = comment.map(c => {
                        return `<p><span>${c.email}</span>: ${c.body}</p>`
                    }).join('')
                    container.innerHTML += `
                    <div class="post">
                        <h3>${p.title}</h3>
                        ${commentUsers}
                    </div>
                    `

                })
            }

        })
    })
}