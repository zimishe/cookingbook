export const EDIT_RECIPE = 'EDIT_RECIPE';
export const editRecipe = (recipe, id) => ({ type: EDIT_RECIPE, recipe, id });

export const EDIT_RECIPE_FAILURE = 'EDIT_RECIPE_FAILURE';
export const editRecipeFailure = () => ({ type: EDIT_RECIPE_FAILURE });

export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const editRecipeSuccess = () => ({ type: EDIT_RECIPE_SUCCESS });
