const mongoose = require('mongoose')
require('dotenv').config()

// mongoose setup 
mongoose.Promise = require('bluebird')
const connString = 'mongodb://127.0.0.1/habitTracks'
mongoose.connect(connString, (error) => console.log(error))

module.exports = mongoose