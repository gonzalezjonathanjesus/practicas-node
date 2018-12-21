/* Elementos de la base de datos */
let empleados = [{
    id: 1,
    nombre: 'Jonathan'
}, {
    id: 2,
    nombre: 'Melisa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

/* Declaración de funciones */

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}.`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: salarioDB.id
            });
        }
    });
};

/* Ejecución de funciones */

// getEmpleado(4).then(empleado => {

//     getSalario(empleado).then(respuesta => {

//         console.log(`El salario de ${respuesta.nombre} es de $${respuesta.salario}`);

//     }, (error) => {

//         console.log(error)

//     });
// }, (error) => {

//     console.log(error)

// });

/* Versión más optimizada en ECMASCRIPT 6 */

getEmpleado(4).then(empleado => {

        return getSalario(empleado);

    })
    .then(respuesta => {
        console.log(`El salario de ${respuesta.nombre} es de $${respuesta.salario}`);
    })
    .catch(err => console.log(err));