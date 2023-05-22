const cuatroSecons = () => {
    console.time()
    setTimeout(()=>{

        console.log('4 segundos')
        setTimeout(()=>{

            console.log('6 segundos')
            setTimeout(()=>{

                console.log('8 segundos')
                console.timeEnd()
            },8000)

        },6000)

    },4000)
}

cuatroSecons()
