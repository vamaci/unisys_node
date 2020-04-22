const express =require('express')
const app = express()
const puerto = 8080


app.use(express.static(__dirname +'/public'))

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`)
})