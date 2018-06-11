import { combineReducers } from 'redux';
import { recipesListReducer } from './../pages/recipes-list';
import { viewRecipeReducer } from './../pages/view-recipe';

export default combineReducers({
    recipesListReducer,
    viewRecipeReducer,
});
