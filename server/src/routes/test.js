const express = require ('express')
const router = express.Router()

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/quickPrac1');
// const database = mongoose.connection

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })





router.get("/", (req, res, next) => {
    res.send("I am in route")
})


module.exports = router