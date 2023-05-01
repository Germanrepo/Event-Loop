
const fetching = async () => {
    try {
        const url1 = `https://jsonplaceholder.typicode.com/users`
        const url2 = `https://jsonplaceholder.typicode.com/posts`

        const response = await Promise.all([fetch(url1), fetch(url2)])
        const json = await Promise.all([response[0].json(), response[1].json()])

        for (let i = 0; i < 10; i++) {
            console.log(`User: ${json[0][i].username} \n Title: ${json[1][i].title} \n Comment: ${json[1][i].body} \n`)
        }

    } catch (error) {
        console.log(error)
    }
}

fetching()