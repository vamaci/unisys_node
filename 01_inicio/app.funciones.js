let x
const ob = {}
ob.name = 'Pepe'

function suma(a = 1, b = 1){
    return a+b
}
console.log(suma(3,8))

const resta = function(a = 0, b = 0){
    return a-b
}
console.log(resta(3,8))

//ES 6 - funciones landa
//const prod = (a = 1, b = 1) => {return a*b}
const prod = (a = 1, b = 1) => a * b
console.log(prod(4,6))
const cuad = a => a*a
console.log(cuad(3))
cuad.valor = 'Calcula el cuadrado'
console.log(cuad.valor)

//window.setTimeout()
setTimeout(()=>{
    console.log(suma(12,2))
}, 1000) // calcula la function pasado el tiempo
