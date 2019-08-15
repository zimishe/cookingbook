module.exports = (app, client) => {
	app.post('/auth', ({ body = {} }, res) => {
		res.sendStatus(Boolean(body.token) ? 200 : 401)
	})
}
