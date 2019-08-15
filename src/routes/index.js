const authTokenRoute = require('./authToken');

module.exports = (app, db) => {
	authTokenRoute(app, db);
}
