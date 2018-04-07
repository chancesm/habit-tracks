const mongoose      = require('mongoose')
const UserSchema    = require('./models/userModel')
const HabitSchema   = require('./models/habitModel')

// mongoose setup 
const myConn        = 'mongodb://localhost:27017/habitTracks'

exports.connection = mongoose.connect(myConn, (error) => console.log(error))

exports.Habit   = mongoose.model("Habit", HabitSchema)
exports.User    = mongoose.model('User', UserSchema)
