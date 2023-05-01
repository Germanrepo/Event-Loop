const users = [
    { id: 1, name: 'Lucas', p_id: 1 },
    { id: 2, name: 'German', p_id: 1 },
    { id: 3, name: 'Juan', p_id: 2 }
]

const profession = {
    1: 'Programador',
    2: 'Diseñador'
}

console.time()
const callUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users)
        }, 2000)
    })
}
const callUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users.filter(u => u.id === id)[0])
        }, 2000)
    })
}
const callProfession = (idProfession) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(profession[idProfession])
            console.timeEnd()
        }, 2000)
    })
}

callUsers()
    .then(users => users[2].id)
    .then(userId => callUser(userId))
    .then(p => p.p_id)
    .then(professionId => callProfession(professionId))
    .then(result => console.log(result))
    .catch(error => console.log(error))
