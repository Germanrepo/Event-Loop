


const fetching = async (b1, b2) => {
    try {
        const url1 = `https://jsonplaceholder.typicode.com/${b1}`
        const url2 = `https://jsonplaceholder.typicode.com/${b2}`
        const response1 = await fetch(url1)
        const response2 = await fetch(url2)

        const json1 = await response1.json()
        const json2 = await response2.json()

        const result1 = await json1
        const result2 = await json2

        result1.forEach((e,i) => {
            console.log(`User: ${e.username} \n Title: ${result2[i].title} \n Comment: ${result2[i].body} \n`)
        })
        
    } catch (error) {
        console.log(error)
    }
}

fetching('users', 'posts')