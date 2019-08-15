const dbName = 'heroku_14cgn322';
const dbUser = 'admin';
const dbPassword = 'heroku_db_00';

module.exports = {
	dbName,
	URL: `mongodb://${dbUser}:${dbPassword}@ds153460.mlab.com:53460/${dbName}`
}
