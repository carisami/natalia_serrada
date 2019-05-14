export class Eventos {
    constructor () {
        this.msj = [
            'Hola desde una clase en un fichero ES6',
            'Adiós desde una clase en un fichero ES6',
            'El raton entró',
            'El raton salió'
        ]
        this.manejarDOM()
        this.asignarListener()
    }
    manejarDOM() {
        this.nodos = {
            btnSaludar: document.querySelector('#btn-saludar'),
            btnDespedirse: document.querySelector('#btn-despedirse'),
            divRaton: document.querySelector('#div-raton')
        }
    }
    asignarListener() {    
        this.nodos.btnSaludar.addEventListener('click', this.saludar.bind(this))   
        this.nodos.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
        this.nodos.divRaton.addEventListener('mouseover', this.onMouseOver.bind(this))
        this.nodos.divRaton.addEventListener('mouseout', this.onMouseOut.bind(this))
    }
    /**
     * Metodos manejadores de eventos (Event Handler) 
     */
    saludar () {
        console.log(this.msj[0])
    }
    despedirse () {
        console.log(this.msj[1])
    }
    onMouseOver () {
        console.log(this.msj[2])
    }
    onMouseOut() {
        console.log(this.msj[3])
    }

}  
