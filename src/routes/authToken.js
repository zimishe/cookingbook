module.exports = app => {
	app.post('/auth', ({ body = {} }, res) => {
		res.sendStatus(Boolean(body.token) ? 200 : 401)
		// check token existence, respond with 401 Unauthorized if it is not present
	})
}
