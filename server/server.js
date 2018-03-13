const port = 8080;
const bodyParser        = require('body-parser');
const usersRouter    = require('./routes/users');
const express           = require('express');

const mongoose = require('mongoose');

//Set up default mongoose connection
let mongoDB = 'mongodb://192.168.90.1/habitTracks';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


let app = express();
app.use(express.static('dist'));

app.use(bodyParser.json())
app.use('/api/users', usersRouter);

app.listen(port, err => {
	console.log(`Server listening at: http://localhost:${port}`)
});
