const mongoose = require('mongoose')

var habitSchema = new mongoose.Schema({
    title: String,
    description: String,
    // startDate: String,
    // endDate: String,
    color: String,
    owner: String,
    calendar: Object
}, {minimize:false})

module.exports = habitSchema;
