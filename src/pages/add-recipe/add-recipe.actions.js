export const CREATE_RECIPE = 'CREATE_RECIPE';
export const createRecipe = recipe => ({ type: CREATE_RECIPE, recipe });

export const CREATE_RECIPE_FAILURE = 'CREATE_RECIPE_FAILURE';
export const createRecipeFailure = () => ({ type: CREATE_RECIPE_FAILURE });

export const CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS';
export const createRecipeSuccess = () => ({ type: CREATE_RECIPE_SUCCESS });
