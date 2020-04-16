// crear modulo http
const http = require('http')
const puerto = 3001

// crear servidor web
const server = http.createServer( (req, res) => {
    //console.log(req)
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<header><h3> Hola Mundo! </h3></header>')
})


// aranca el servidor
server.listen(puerto)
//abrir en el launcher http://localhost:3000/

console.log(`escuchado en el puerto ${puerto}` )