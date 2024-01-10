const express = require('express')
const router = express.Router()
const CITY = require('../model/City')
const URL = require('../config').API_URL
const axios = require('axios')


router.get('/cities/:cityName', async (req, res) => {
    const cityName = req.params.cityName
    try {
        const response = await axios.get(`${URL}${cityName}`)
        const city = {
            name: response.data.location.name,
            temperature: response.data.current.temp_c,
            condition: response.data.current.condition.text,
            conditionPic: response.data.current.condition.icon,
        }
        res.send(city)
    } catch (error) {
        console.log(error)
    }
})

router.get('/cities', async (req, res) => {
    try {
        const cities = await CITY.find({})
        res.send(cities)
    } catch (error) {
        console.log(error)
    }
})

router.post('/cities', async (req, res) => {
    const city = req.body

    try {
        const newCity = await CITY.create(city)
        const cities = await CITY.find({})
        res.send(cities)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/cities/:cityName', async (req, res) => {
        const {cityName} = req.params
        try {
            const cityToDelete = await CITY.findOne({name: cityName})
            await cityToDelete.deleteOne()
            const cities = await CITY.find({})
            res.send(cities)
        } catch (error) {
            console.log(error)
        }
    }
)


module.exports = router
