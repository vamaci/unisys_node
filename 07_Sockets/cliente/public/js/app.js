//import io from './socket.io.js'

export function app(){
    console.log('Se ha cargado la aplicación')
    console.log(io)
    const socket = io('http://localhost:8080/')

    socket.on('message', (msg) => {
        console.log(msg)
        console.log('respondiendo')
        socket.emit(response, {usuario1: 'Saludos!'})
    })
}
