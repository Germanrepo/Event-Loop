const users = [{ id: 1, name: 'Lucas', p_id: 1 }, { id: 2, name: 'German', p_id: 1 }, { id: 3, name: 'Juan', p_id: 2 }
]
const profession = { 1: 'Programador', 2: 'Diseñador' }

const callUsers = (callBack) => {
    setTimeout(() => {
        callBack(null, users)
    }, 2000)
}
const callUser = (id, callBack) => {
    setTimeout(() => {
        callBack(null, users.filter(u => u.id === id)[0])
    }, 2000)
}
const callProfession = (idProfession, callBack) => {
    setTimeout(() => {
        callBack(null, profession[idProfession])
    }, 2000)
}

callUsers((err, users) => {
    const usuario = users[1].id
    console.log(usuario)

    callUser(usuario, (err, usuario) => {
        const profesionId = usuario.p_id
        console.log(profesionId)

        callProfession(profesionId, (err, profession) => {
            console.log(profession)
        })
    })
})


