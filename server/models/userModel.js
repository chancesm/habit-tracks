const mongoose = require('mongoose')

const Schema = mongoose.Schema;

exports.UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    habits: [],
    settings: {}
});
