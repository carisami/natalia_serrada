// En ES6 se utilizan let y const para declarar variables

let nombre //declarar
nombre = 'Pepe' //inicializar

let edad = 34 //declarar e inicializar


// Tipos de datos 

// undefined
let data
mostrar(data)

// strings
data = 'Hola amigos'
mostrar(data)

//numers
data = 35
mostrar(data)
//booleans
data = true
data = false
mostrar(data)

//object
data = {name: 'Pepe', age: 34}
mostrar(data)

// object tipo array
data = [23, 45, 78]
data = ['lunes', 'martes', 23, 48, true, undefined, {}]
mostrar(data)

function mostrar(input) {
    console.log('El dato recibido es', input)
    console.log('El tipo del dato es', typeof input)
    console.log('----------')
} 

/* 
let mostrar = function mostrar(input) {
    console.log('El dato recibido es', input)
    console.log('El tipo del dato es', typeof input)
    console.log('----------')
} */

mostrar(mostrar)