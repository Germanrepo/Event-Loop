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
    getUser(1)
        .then(users => {
            const user = users[0]
            console.log(user.email)
            return user.id
        })
        .then(userId => getPosts(userId))
        .then(posts => {
            const post = posts[0]
            return Promise.all([getPosts(post.userId), getComments(posts[0].id), getComments(posts[1].id), getComments(posts[2].id)])
        })
        .then(a => {
            console.log(a)
        })
        .catch(err => console.error(err))
})

const getUser = (id) => {
    return new Promise((resolve, rejected) => {
        request({ uri: `${url}/users?id=${id}` }, (err, res, body) => {
            if (err) rejected(err)
            const user = JSON.parse(body)
            resolve(user)
        })
    })
}

const getPosts = (userId) => {
    return new Promise((resolve, rejected) => {
        request({ uri: `${url}/posts?userId=${userId}&_limit=3` }, (err, res, body) => {
            if (err) rejected(err)

            const post = JSON.parse(body)
            resolve(post)
        })
    })
}

const getComments = (postId) => {
    return new Promise((resolve, rejected) => {
        request({ uri: `${url}/comments?postId=${postId}&_limit=2` }, (err, res, body) => {
            if (err) rejected(err)

            const comment = JSON.parse(body)
            resolve(comment)
        })
    })
}
