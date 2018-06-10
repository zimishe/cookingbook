import { all } from 'redux-saga/effects';
import { recipesListSaga } from './../pages/recipes-list';
import { addRecipeSaga } from './../pages/add-recipe';

export default function* sagas() {
    yield all([
        recipesListSaga(),
        addRecipeSaga(),
    ]);
}