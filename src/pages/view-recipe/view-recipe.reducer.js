import {
    VIEW_RECIPE_HISTORY,
    VIEW_RECIPE_HISTORY_SUCCESS,
    VIEW_RECIPE_HISTORY_FAILURE,
} from './view-recipe.actions';

const defaultState = {
    error: false,
    pending: false,
    history: [],
    historyLoaded: false,
};

function addToHistory(history, payload) {
    const recipeHistory = history.find(({ id }) => id === payload.id);

    return recipeHistory ? [...recipeHistory, { ...payload }] : [...history, payload];
} 

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case VIEW_RECIPE_HISTORY:
            return {
                ...state,
                pending: true,
                error: false,
            }
        case VIEW_RECIPE_HISTORY_SUCCESS:
            return {
                ...state,
                pending: false,
                error: false,
                history: addToHistory(state.history, payload),
                historyLoaded: true,
            }
        case VIEW_RECIPE_HISTORY_FAILURE:
            return {
                ...state,
                pending: false,
                error: true,
            }
        default:
            return state;
    }
}