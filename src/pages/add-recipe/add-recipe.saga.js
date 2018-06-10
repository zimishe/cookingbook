import { takeLatest, call, put } from 'redux-saga/effects';
import { CREATE_RECIPE, createRecipeSuccess, createRecipeFailure } from './add-recipe.actions';
import * as ApiService from './../../_shared/_services/api-service';

export function* createRecipeSaga({ recipe }) {
    try {
        yield call(ApiService.createRecipe, recipe);
        yield put(createRecipeSuccess());
    } catch (error) {
        yield put(createRecipeFailure());
    }
}

export default function* () {
    yield takeLatest(CREATE_RECIPE, createRecipeSaga);
}
