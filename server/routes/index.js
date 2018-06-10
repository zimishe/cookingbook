const addRecipeRoute = require('./add-recipe');
const editRecipeRoute = require('./edit-recipe');
const getRecipesListRoute = require('./get-recipes-list');
const getRecipeHistoryRoute = require('./get-recipe-history');

module.exports = (app, db) => {
    addRecipeRoute(app, db);
    editRecipeRoute(app, db);
    getRecipesListRoute(app, db);
    getRecipeHistoryRoute(app, db);
}