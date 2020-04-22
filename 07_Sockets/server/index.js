
/*
const server = require('http').Server(app);
const io = require('socket.io')(server);
server.listen(8080, function() {
    console.log('Servidor corriendo en http://localhost:8080');
});
*/

// Cargamos el módulo http
const http = require('http')
const port = 3000

//Creamos el servidor Web

const server = http.createServer( (req, res) => {
    res.end('Servidor Socket.IO')
})

const io = require('socket.io')(server);
//var socket = require('socket.io-client')('http://localhost');

//io.on('DOMContentLoaded') // espera hasta que la pagina carga

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
   // socket.emit('messages', messages);
   
    socket.emit('messages',{ author: "Carlos",
                             text: "Hola! que tal?"})
    socket.on('response', (data) => {
        console.log(data)
    })
});

// Arancamos el servidor
server.listen(port)
console.log('Escuchando en el puerto', port)