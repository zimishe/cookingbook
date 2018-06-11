import {
    FETCH_RECIPES,
    FETCH_RECIPES_SUCCESS,
} from './recipes-list.actions';

const defaultState = {
    error: false,
    pending: false,
    recipes: [],
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case FETCH_RECIPES:
            return {
                ...state,
                pending: true,
                error: false,
            }
        case FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                pending: false,
                error: false,
                recipes: payload
            }
        default:
            return state;
    }
}