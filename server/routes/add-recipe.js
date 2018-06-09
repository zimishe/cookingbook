const { dbName } = require('./../_config/db');

module.exports = (app, client) => {
    app.post('/recipes', (req, res) => {
        const { title = '', description = '' } = req.body;
        const recipe = { title, description };

        const db = client.db(dbName);

        db.collection('recipes').insert(recipe, (error, result) => {
            if (error) {
                res.send({ error });
            }   else {
                res.send(result.ops[0]);
            }
        });
    })
}
