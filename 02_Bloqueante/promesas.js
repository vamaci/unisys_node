function hacerAlgo(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let n = Math.random()
            if (n < 0.5){
                resolve() // los datos que quieremos, que deseamos que haga
            } else {
                reject(new Error(n)) // podemos mandar un error o un mensaje que no ha salido bien
            }
        }, 1000)
    })
}

const promesa = hacerAlgo()
console.log(promesa)
promesa
.then((resp)=>{
    console.log('ok', resp)
})
.catch( (err)=>{
    console.log('error', err.message)
});
//ES 2017 async / await

//( async () =>{})() // function autoinvocada: ejecuta el codigo automaticamente
( async () =>{
    resp = await hacerAlgo()
    console.log('ok desde await',resp)
})() 