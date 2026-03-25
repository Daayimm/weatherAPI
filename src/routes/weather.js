
const express = require('express')
const { getWeather } = require('../services/weatherService')
const router = express.Router()




router.get('/:city',async (req,res) => {
    
    try{
        const data = await getWeather(req.params.city)
        res.json(data)
    }
    catch(error) {
        res.status(500).json({error:'failed to fetch weather data'})
        
    }
})
module.exports = router

