
const axios = require('axios')

const client = require('../cache/redis')

async function getWeather(city){
    const cached = await client.get(city)
    if(cached){
        return JSON.parse(cached)
    }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.WEATHER_API_KEY}&unitGroup=metric&include=current`
    let response = await axios.get(url)
    const d = response.data
    const data ={
        city: d.resolvedAddress,
        temprature : d.currentConditions.temp,
        rain : d.currentConditions.preciptype,
        minTemp : d.days[0].tempmin,
        maxTemp: d.days[0].tempmax
    }
    await client.set(city,JSON.stringify(data),{EX: 43200})
    return data
            
            
}
module.exports = { getWeather }



