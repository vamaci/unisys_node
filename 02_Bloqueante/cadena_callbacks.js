function verLuego(t, text, callback){
    setTimeout(()=> {
        console.log(text)
        callback()
    }, t)
}

verLuego(1000, 'Linea 1 de ejecucion', ()=>{
    verLuego(1000,'Linea 2 de ejecucion', ()=>{
        verLuego(1000,'Linea 3 de ejecucion', ()=>{
            console.log('Fin')
        })
    })
})