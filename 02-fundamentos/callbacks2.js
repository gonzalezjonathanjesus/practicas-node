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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}.`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
        // Salario es un registro del array y la función devuelve dicho registro
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            console.log(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {
            callback(null, {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: salarioDB.id
            })
        }
    }
    /* Objetivo de respuesta */
    // {
    //     nombre: 'Melissa',
    //     salario: 3000
    // }

// No se encontró un salario para el usuario Melissa

/* Ejecución de funciones */

// getEmpleado(1, (err, empleado) => {

//     if (err) {
//         return console.log(err);
//     }

//     console.log(empleado);
// });

getEmpleado(1, (error, empleado) => {

    if (error) {
        return console.log(error);
    }

    getSalario(empleado, (error, respuesta) => {
        if (error) {
            return console.log(error);
        };

        console.log(`El salario de ${respuesta.nombre} es de $${respuesta.salario}`);
    });
});