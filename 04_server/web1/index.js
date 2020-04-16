// crear modulo http
const http = require('http')
const puerto = 3000

// crear servidor web
const server = http.createServer( (req, res) => {
    res.end('Hola Mundo!')
})


// aranca el servidor
server.listen(puerto)
//abrir en el launcher http://localhost:3000/

console.log(`escuchado en el puerto ${puerto}` )