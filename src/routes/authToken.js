module.exports = app => {
	app.post('/auth', ({ body = {} }, res) => {
		res.sendStatus(Boolean(body.token) ? 200 : 401)
	})
}
