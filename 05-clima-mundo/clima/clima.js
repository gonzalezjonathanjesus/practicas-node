const axios = require('axios');

const getWeather = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8523731b43090412e311a2383949b73d`)

    return resp.data.main.temp
};

module.exports = {
    getWeather
}