const addRecipeRoute = require('./add-recipe');

module.exports = (app, db) => {
    addRecipeRoute(app, db);
}