import { takeLatest, call, put } from 'redux-saga/effects';
import { CREATE_RECIPE, createRecipeSuccess, createRecipeFailure } from './add-recipe.actions';
import { fetchRecipes } from './../recipes-list/recipes-list.actions';
import * as ApiService from './../../_shared/_services/api-service';
import history from './../../_shared/utils/history';

export function* createRecipeSaga({ recipe }) {
    try {
        yield call(ApiService.createRecipe, recipe);
        yield put(createRecipeSuccess());
        yield put(fetchRecipes());
        yield history.push('/');
    } catch (error) {
        yield put(createRecipeFailure());
    }
}

export default function* () {
    yield takeLatest(CREATE_RECIPE, createRecipeSaga);
}
