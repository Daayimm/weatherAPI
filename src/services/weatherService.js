
const axios = require('axios')

async function getWeather(city){
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.WEATHER_API_KEY}&unitGroup=metric&include=current`
    let response = await axios.get(url)
    const d = response.data
    return {
        city: d.resolvedAddress,
        temprature : d.currentConditions.temp,
        rain : d.currentConditions.preciptype,
        minTemp : d.days[0].tempmin,
        maxTemp: d.days[0].tempmax

    }
}
module.exports = { getWeather }



