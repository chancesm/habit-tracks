var Sequelize = require('sequelize');
var myDB = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER , process.env.DB_PASSWORD);

exports.Sequelize = Sequelize;
exports.myDB = myDB;