import { all } from 'redux-saga/effects';
import { recipesListSaga } from './../pages/recipes-list';

export default function* sagas() {
    yield all([
        recipesListSaga(),
    ]);
}