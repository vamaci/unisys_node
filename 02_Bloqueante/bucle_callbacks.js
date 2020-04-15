function escribeLuego(t, text, callback){
    setTimeout(()=> {
        console.log(text)
        callback()
    }, t)
}

const lineas= ['Linea 1','Linea 2','Linea 3']
let n = 0
serie = (time, textos, mainFunction, finalCallback) =>{
    if(n ===textos.length){
        finalCallback()
        return
    }
    escribeLuego(time, textos[n], ()=>{
        serie(time, textos, mainFunction, finalCallback)
    })
    n++
}
console.log('Inicio')
serie(1000, lineas, escribeLuego, ()=>{
    
} )