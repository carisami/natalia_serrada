// En ES6 se utilizan let y const para declarar variables

let nombre //declarar
nombre = 'Pepe' //inicializar

let edad = 34 //declarar e inicializar

// Tipos de datos 

/* 
En otros lenguajes hay declaracion EXPLICITA y OBLIGATORIA de tipos
int x -> variable x de tipo entero sin valor

En JS los tipos son
- debiles: no se declaran explicitamente: son dinamicos al valor
-dinamicos: pueden cambiar
*/
//A - DATOS primitivos

// undefined
let data
console.log(data)
console.log(typeof data)



// strings
data = 'Hola amigos'
console.log(data)
console.log(typeof data)

//numers
data = 35
console.log(data)
console.log(typeof data)

//booleans
data = true
data = false
console.log(data)
console.log(typeof data)

// B - DATOS referenciados

//object
data = {name: 'Pepe', age: 34}
console.log(data)
console.log(typeof data)

// object tipo array
data = [23, 45, 78]
data = ['lunes', 'martes', 23, 48, true, undefined, {}]
console.log(data)
console.log(typeof data)

function mostrar() {}

console.log(mostrar)
console.log(typeof mostrar)
