function crearUser(nombre){
    let edad = 29
    return {
        getNombre() {
            return nombre
        },
        getEdad() {
            return edad
        },
        saludar() {
            console.log(`Hola, soy ${nombre} y tengo ${edad} años.`)
        }


    }
}
const user1 = crearUser('Manu')
console.log(user1)
user1.saludar()

const user2 = crearUser('Agustin')
console.log(user2)
user2.saludar()