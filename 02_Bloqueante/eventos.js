const EventEmitter  = require('events')
const emisor = new EventEmitter();

const telefono = (ev = {}) => {
    if(ev.tipo === 'urgente'){
        console.log("¡Ring! ¡Ring! ¡Ring! ¡Ring!")
    }else{
        console.log("¡Ring!")
    }
 }


emisor.on('llamar', (ev = {}) => {   //recoje el evento al que quiere ejecutar = emisor.addListener('llamar', function())
    if(ev && ev.tipo === 'urgente'){
        console.log("¡Ring! ¡Ring! ¡Ring! ¡Ring!")
    }else{
        console.log("¡Ring!")
    }
})

emisor.once('llamar', (e) => { 
    console.log("¡BRR! ¡BRR!")
   
})

emisor.emit('llamar')
emisor.emit('llamar', {tipo: 'urgente'})
emisor.off('llamar', telefono)
emisor.emit('llamar')
//emisor.removeListener('llamar', function())