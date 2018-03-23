/*********************************************************
 * This model relates to the 'Users' table in your database
 * *********************************************************/

var	db = require('../db');
var HabitTracks = db.myDB;
var Sequelize = db.Sequelize;

var Habits = HabitTracks.define('Habits', {
    ID: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    UID: Sequelize.INTEGER,
	HabitInfo: Sequelize.JSON
})

module.exports = Habits; //this exports the model from this page to whatever page imports it