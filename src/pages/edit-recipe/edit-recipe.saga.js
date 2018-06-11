import { takeLatest, call, put } from 'redux-saga/effects';
import { EDIT_RECIPE, editRecipeSuccess, editRecipeFailure } from './edit-recipe.actions';
import { fetchRecipes } from './../recipes-list/recipes-list.actions';
import * as ApiService from './../../_shared/_services/api-service';
import history from './../../_shared/utils/history';

export function* editRecipeSaga({ recipe }) {
    try {
        yield call(ApiService.editRecipe, recipe, recipe.id);
        yield put(editRecipeSuccess());
        yield put(fetchRecipes());
        yield history.push(`/recipe/${recipe.id}`);
    } catch (error) {
        yield put(editRecipeFailure());
    }
}

export default function* () {
    yield takeLatest(EDIT_RECIPE, editRecipeSaga);
}
