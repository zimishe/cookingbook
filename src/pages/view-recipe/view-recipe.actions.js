export const VIEW_RECIPE_HISTORY = 'VIEW_RECIPE_HISTORY';
export const viewRecipeHistory = id => ({ type: VIEW_RECIPE_HISTORY, id });

export const VIEW_RECIPE_HISTORY_FAILURE = 'VIEW_RECIPE_HISTORY_FAILURE';
export const viewRecipeHistoryFailure = () => ({ type: VIEW_RECIPE_HISTORY_FAILURE });

export const VIEW_RECIPE_HISTORY_SUCCESS = 'VIEW_RECIPE_HISTORY_SUCCESS';
export const viewRecipeHistorySuccess = payload => ({ type: VIEW_RECIPE_HISTORY_SUCCESS, payload });
