class pruebaThisEs6{
    constructor(name){
        this.name = name
        console.log(this)
        setTimeout(function(){
            console.log(this)
        }, 1000);
        setTimeout(function(){
            console.log('Usando bind', this)
        }.bind(this), 1000); //.bind hace que this tenga el valor de este momento
    }

    saludar(){
        console.log(`Hola ${this.name}`)
    }
}   
const pb1 = new pruebaThisEs6('es6')
pb1.saludar()
console.log()

   