const {sumar} = require('../sample.js')
let n = 7

describe('Suite de pruebas', () => {
    it('probando sin parametros', () => {
        expect(sumar()).toEqual(0);
    });

    it('probando con un parametro', () => {
        expect(sumar(4)).toEqual(4);
    });

    it('probando con dos parametros', () => {
        expect(sumar(2,2)).toEqual(4);
    });
})

