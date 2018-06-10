import { takeLatest, call, put } from 'redux-saga/effects';
import {
    VIEW_RECIPE_HISTORY,
    viewRecipeHistorySuccess,
    viewRecipeHistoryFailure
} from './view-recipe.actions';
import * as ApiService from './../../_shared/_services/api-service';

export function* viewRecipeHistorySaga({ id }) {
    try {
        const response = yield call(ApiService.getRecipeHistory, id);
        yield put(viewRecipeHistorySuccess(response));
    } catch (error) {
        yield put(viewRecipeHistoryFailure());
    }
}

export default function* () {
    yield takeLatest(VIEW_RECIPE_HISTORY, viewRecipeHistorySaga);
}
