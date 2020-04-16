const circulo = require('./circulo.js')
//const cuad = require('./cuadrado.js')()
//const cuad6 = require('./cuadrado.js')(45)
const cuaddos = require('./cuadrado.js')
const cuad6 = cuaddos(6)
const r = 5

console.log('El area del circulo es ', circulo.area(r))
console.log('La circumferencia del circulo es ', circulo.circumf(r))

/*console.log('El cuadrado es ', cuad.area(r))
console.log('La perimetro del cuadrado es ', cuad.perimetro(r))*/

console.log('El cuadrado 6 es ', cuad6.area())
console.log('La perimetro del cuadrado 6 es ', cuad6.perimetro())