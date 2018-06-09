import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_RECIPES, fetchRecipesSuccess, fetchRecipesFailure } from './recipes-list.actions';
import * as ApiService from './../../_shared/_services/api-service';

export function* getRecipesSaga() {
    try {
        yield call(ApiService.getRecipes);
        yield put(fetchRecipesSuccess());
    } catch (error) {
        yield put(fetchRecipesFailure());
    }
}

export default function* () {
    yield takeLatest(FETCH_RECIPES, getRecipesSaga);
}
