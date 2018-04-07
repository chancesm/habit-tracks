const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
 
var userSchema = new mongoose.Schema({
    first: String,
    last: String,
    username: String,
    password:String,
    email: String,
    settings: Object    
    /*
        SETTINGS:
        dark: Boolean ## Sets Theme Preference

    */
  })
  //userSchema.plugin(passportLocalMongoose);

module.exports = userSchema

/* DEFAULT USER CREATE TEMPLATE
User.create({
    first: "First",
    last: "Last",
    userName: "user",
    pass: "1234pass4321",
    settings: {
        dark: false
    }
})



*/