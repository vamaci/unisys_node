const fs = require('fs')
const data = fs.readFileSync('Prueba.txt', {encoding: 'UTF-8'})
console.log(data)
let data1 
fs.readFile('Prueba2.txt', {encoding: 'UTF-8'}, (err, data)=>{
    if(err){
        console.log(err) 
        return
    }
    data2 = data
    console.log(data2)
})
console.log("Lectura de ficheros")