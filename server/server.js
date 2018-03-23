require('dotenv').config()
const port = 8080;
const bodyParser        = require('body-parser');
const express           = require('express');

const usersRouter    = require('./routes/users');
const authRouter    = require('./routes/auth');

//Set up default mongoose connection
// Get Mongoose to use the global promise library
//Get the default connection

//Bind connection to error event (to get notification of connection errors)

let app = express();

//VUE FRONTEND DIRECTORY IS 'DIST'
app.use(express.static('dist'));

//USE BODYPARSER FOR JSON DATA
app.use(bodyParser.json())

// LOGIN AND API ROUTES
app.use('/auth', authRouter);
app.use('/api/users', usersRouter);

app.listen(port, err => {
	console.log(`Server listening at: http://localhost:${port}`)
});
