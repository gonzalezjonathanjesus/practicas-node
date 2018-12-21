let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    /* Before ECMASCRIPT 6 */
    getNombre: function() {
        return `${ this.nombre} ${ this.apellido } - Poder: ${ this.poder }`;
    }

    /* On ECMASCRIPT 6
    getNombre() {
        return `${ this.nombre} ${ this.apellido } - Poder: ${ this.poder }`;
    }
    */
};

/*
let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;
*/

/* Lo mismo usando destructuración */

//let { nombre, apellido, poder } = deadpool;

/* Para declarar variables con nombre diferente al de las propiedades del objeto: */
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);