const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);


    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDe_mRcvLteWT8tPK-A5mPFp8spZ3PM47c`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let coordinates = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coordinates.lat,
        lng: coordinates.lat
    }
};

module.exports = {
    getLugarLatLng
}