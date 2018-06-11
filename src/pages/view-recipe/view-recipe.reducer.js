import {
    VIEW_RECIPE_HISTORY,
    VIEW_RECIPE_HISTORY_SUCCESS,
    VIEW_RECIPE_HISTORY_FAILURE,
} from './view-recipe.actions';

const defaultState = {
    error: false,
    pending: false,
    history: [],
};

function addToHistory(history, payload) {
    return !history.some(({ id }) => id === payload.id) ? [...history, payload] : history;
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