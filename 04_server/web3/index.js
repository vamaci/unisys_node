// crear modulo http
const http = require('http')
const fs = require('fs')
const puerto = 3002

// crear servidor web
const server = http.createServer( (req, res) => {
    //console.log(req)
    res.writeHead(200, {'Content-Type': 'text/html'})
   fs.readFile('index.html', 'utf-8', (error,data)=> {
    if(error){
        res.writeHead(500, {'Content-Type': 'text/html'})
        res.end(error.message)
        return
    }
    res.end(data)
   })
   //res.end('') aqui no porque no se va a leer el fichero
})


// aranca el servidor
server.listen(puerto)
//abrir en el launcher http://localhost:3000/

console.log(`escuchado en el puerto ${puerto}` )