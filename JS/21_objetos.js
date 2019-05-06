/**
 * Notacion literal o JSON
 */

 //user1 = new usuario
 //user2 = new usuario

 let user1 = {
     nombre: 'Pepe',
     edad: 24,
     isAlumno: true,
     direccion: {
         calle:'pez',
         numero: '3',
         poblacion: 'Madrid'
     }, 
     saludar: function() {
          console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
     },
     altura: 179
 }

// let user1 = new object ()
// user1.nombre='Pepe'


 let user2 = {
    nombre: 'Rosa',
    edad: 27,
    curso: 'Front'
}

user1.nombre = 'Jose'
user1.curso = 'Back'

user1.saludar()

