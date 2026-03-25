
const express = require('express')
const app = express()
app.use(express.json())

const weather = require('./routes/weather')
app.use('/weather', weather)

module.exports = app



