/*********************************************************
 * This model relates to the 'Users' table in your database
 * *********************************************************/

var	db = require('../db');
var HabitTracks = db.myDB;
var Sequelize = db.Sequelize;

var Users = HabitTracks.define('Users', {
    UID: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    Name: Sequelize.STRING,
	username: Sequelize.STRING,
	email: Sequelize.STRING,
    password: Sequelize.STRING,
    settings: Sequelize.JSON
})

module.exports = Users; //this exports the model from this page to whatever page imports it