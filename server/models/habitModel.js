const mongoose = require('mongoose')

var habitSchema = new mongoose.Schema({
    title: String,
    description: String,
    // startDate: String,
    // endDate: String,
    owner: String,
    calendar: Object
})

module.exports = habitSchema;
