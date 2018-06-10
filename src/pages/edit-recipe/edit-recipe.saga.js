import { takeLatest, call, put } from 'redux-saga/effects';
import { EDIT_RECIPE, editRecipeSuccess, editRecipeFailure } from './edit-recipe.actions';
import * as ApiService from './../../_shared/_services/api-service';

export function* editRecipeSaga({ recipe, id }) {
    try {
        yield call(ApiService.editRecipe, recipe, id);
        yield put(editRecipeSuccess());
    } catch (error) {
        yield put(editRecipeFailure());
    }
}

export default function* () {
    yield takeLatest(EDIT_RECIPE, editRecipeSaga);
}
