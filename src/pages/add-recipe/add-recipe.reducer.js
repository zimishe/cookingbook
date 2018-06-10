import {
    CREATE_RECIPE,
    CREATE_RECIPE_SUCCESS,
    CREATE_RECIPE_FAILURE,
} from './add-recipe.actions';

const defaultState = {
    error: false,
    pending: false,
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case CREATE_RECIPE:
            return {
                ...state,
                pending: true,
                error: false,
            }
        case CREATE_RECIPE_SUCCESS:
            return {
                ...state,
                pending: false,
                error: false,
            }
        case CREATE_RECIPE_FAILURE:
            return {
                ...state,
                pending: false,
                error: true,
            }
        default:
            return state;
    }
}