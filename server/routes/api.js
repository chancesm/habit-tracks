exports.usersRoute= app => {
	app.route('/api/users')
		.get((req,res) => {
			res.json({msg: 'Users Endpoint'});
		})
}

