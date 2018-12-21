// let getNombre = async() => {
//Para una función tradicional es 'async function () {}'
//     //throw new Error('No existe un nombre para ese usuario');

//     return 'Jonathan';
// };

/*

Poner async al principio de la función de flecha equivale a realizar esto:

let getNombre = () => {
    return new Promise((resolve, reject) => {
        resolve('Jonathan');
    });
};

*/

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Jonathan');

        }, 3000)

    });
};

// Los async pueden estar solos,
// pero los await siempre tienen que estar dentro de una función async

let saludo = async() => {

    let nombre = await getNombre(); // Await espera la respuesta de la promesa para poder continuar

    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log(`Error de ASYNC - ${e}`);
    });