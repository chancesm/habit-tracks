const express = require('express');
let app = express();
const port = 80;

let apiRoutes = require('./routes/api');

app.use(express.static('../dist'));

apiRoutes.usersRoute(app);

app.listen(port,err=>{
	console.log(`Express listening on port: ${port}`);
});
