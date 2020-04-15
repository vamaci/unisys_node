//'use strict'

const obj = {
    nombre : 'Pepe',
    algo (){ // = algo: function (){
        console.log(this)
    }
}
obj.algo()
const fuera = obj.algo
fuera()

function pruebaThis(name){
    this.name = name
    console.log(this)
    setTimeout(function(){
        console.log(this)
    }, 1000);
    setTimeout(function(){
        console.log('Usando bind', this)
    }.bind(this), 1000); //.bind hace que this tenga el valor de este momento
   /* 
    setTimeout(() => {
        console.log('arrow function', this)
    }, 1000);
    */
   this.saludar = function() {
       console.log(`Hola ${this.name}`)// comillas francesas respetan ${}``
   }
}

pruebaThis.prototype.saludar = function(){
    console.log(`Hola ${this.name}`)
}
const pb1 = new pruebaThis('testear')
pb1.saludar()

