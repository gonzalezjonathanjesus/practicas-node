// const axios = require('axios');

const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getWeather(coords.lat, coords.lng);

        return `El clima en ${coords.direccion} es de ${temp}°C`;

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//         clima.getWeather(resp.lat, resp.lng)
//             .then(temp => {
//                 console.log(`Temperature: ${temp}°C`);
//             })
//             .catch(e => console.log(e));
//     })
//     .catch(e => console.log(e));