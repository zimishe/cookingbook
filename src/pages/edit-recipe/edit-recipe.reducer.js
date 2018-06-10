import {
    EDIT_RECIPE,
    EDIT_RECIPE_SUCCESS,
    EDIT_RECIPE_FAILURE,
} from './edit-recipe.actions';

const defaultState = {
    error: false,
    pending: false,
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case EDIT_RECIPE:
            return {
                ...state,
                pending: true,
                error: false,
            }
        case EDIT_RECIPE_SUCCESS:
            return {
                ...state,
                pending: false,
                error: false,
            }
        case EDIT_RECIPE_FAILURE:
            return {
                ...state,
                pending: false,
                error: true,
            }
        default:
            return state;
    }
}