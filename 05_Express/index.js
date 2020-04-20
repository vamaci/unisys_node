const express = require('express')
const app = express()
const port = 3000

app.get('/', (error, request, response, next) => { //en Node.js este es el orden de parametros ,error primero siempre
   response.send('¡Hola Mundo!')
})
app.get('/user', (request, response, next) => { //son middleware 
    let user = request.param('name') ? request.param('name') : 'usuario'
    response.send(`Hola ${user}` )
})
app.get('*', (request, response, next) => {
    response.send('Aqui no hay nada escrito')
})
app.listen(port, () => {
    console.log('Escuchando en el puerto ', port)
})