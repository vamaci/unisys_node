// crear modulo http
const http = require('http')
const fs = require('fs')
const puerto = 3003

// crear servidor web
const server = http.createServer( (req, res) => {
   let file = ''
   switch (req.url) {
       case '/':
            file = 'index.html'
            break;
        case '/about':
            file = 'about.html'
            break;
       default:
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end('<h3> Error 404 </h3>')
            return;
   }
   fs.readFile(file, 'utf-8', (error,data)=> {
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