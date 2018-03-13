const mongoose = require('mongoose')
let UserSchema= require('../models/userModel').UserSchema

const User = mongoose.model('User', UserSchema);

exports.getUsers = () => {
    return User.find()
};