/*
//  Función tradicional
//  function sumar(a, b) {
//     return a + b;
//  }

//  Función de flecha
let sumar = (a, b) => {
    return a + b;
}

// Si todo el cuerpo de la función se puede escribir en una sola lína se puede hacer así:

//  let sumar = (a, b) => a + b; // Esto es como si tuviéramos => return a + b

//  console.log(sumar(10, 20));

    Transformar en función de flehca
    function saludar () {
        return 'Hola Mundo';
    }
*/

//  let saludar = () => 'Hola Mundo';

//  let saludar = nombre => `Hola ${nombre}`;

//  console.log(saludar('Jonathan'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre} ${ this.apellido } - Poder: ${ this.poder }`;
    }
};

//  En las funciones de flecha, el objeto this apunta a un objeto fuera de la función,
//  así que no se puede utilizar en un método de un objeto.

console.log(deadpool.nombre);