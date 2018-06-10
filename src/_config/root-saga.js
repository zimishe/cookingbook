import { all } from 'redux-saga/effects';
import { recipesListSaga } from './../pages/recipes-list';
import { addRecipeSaga } from './../pages/add-recipe';
import { editRecipeSaga } from './../pages/edit-recipe';
import { viewRecipeSaga } from './../pages/view-recipe';

export default function* sagas() {
    yield all([
        recipesListSaga(),
        addRecipeSaga(),
        editRecipeSaga(),
        viewRecipeSaga(),
    ]);
}