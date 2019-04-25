/**
 * Presentar los numeros del 1 al N
 */

 /**
  * function isPrimo ()
  * @param num: number
  * @returns: boolean
  */

  function isPrimo(num) {
      let r = true
      //if (num == 0) {
        if (!num) {
          return false
      } 
     for (let i = 2; i < num; i++) {
        // if(num % i == 0) {
            if (!(num % i) % i) {
            // no primo 
            return false
        }
     }
      return r 
  }

  let number = 0
  number = 1
  number = 2
  number = 3
  number = 4
  number = 9
  console.log(isPrimo(number))



  /**
   * Function listaPrimos
   * @param limite: number
   * @returns: array[number]
   */

   function listaPrimos(limite) {
       let primos = []
       for (let i = 0; i <= limite; i++) {
           if (isPrimo(i)) {
               //primos[primos.length] = i
               primos.push(i)
           }
       }
       return primos 
   }

   console.log('Los primos son ', listaPrimos(100).join(', ')) 