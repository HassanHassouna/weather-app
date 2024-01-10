const express = require('express')
const app = express()
const weatherApi = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require("path");


mongoose.connect("mongodb://127.0.0.1:27017/weather", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/v1', weatherApi)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})


