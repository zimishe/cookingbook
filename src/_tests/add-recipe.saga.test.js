import { call, put } from 'redux-saga/effects';
import { createRecipeSaga } from './../pages/add-recipe/add-recipe.saga';
import * as ApiService from './../_shared/_services/api-service';
import {
    CREATE_RECIPE_SUCCESS,
    CREATE_RECIPE_FAILURE
} from './../pages/add-recipe/add-recipe.actions';
import { FETCH_RECIPES } from './../pages/recipes-list/recipes-list.actions';

describe('sagas/add recipe', () => {
    const payload = {
        recipe: {
            title: 'recipe1',
            description: 'desc1',
        }
    };

    const saga = createRecipeSaga(payload);

    it('should call API with createRecipe()', () => {
        expect(saga.next().value).toEqual(call(ApiService.createRecipe, payload.recipe));
    });

    it('should call createRecipeSuccess', () => {
        const createRecipeSuccessCall = saga.next().value;
        expect(createRecipeSuccessCall.PUT.action.type).toBe(CREATE_RECIPE_SUCCESS);
    });

    it('should call fetchRecipes', () => {
        const createRecipeSuccessCall = saga.next().value;
        expect(createRecipeSuccessCall.PUT.action.type).toBe(FETCH_RECIPES);
    });

    it('should redirect to the home page', () => {
        expect(saga.next()).toEqual({ value: undefined, done: false });
    });

    it('should then be done', () => {
        expect(saga.next()).toEqual({ value: undefined, done: true });
    });

    describe('handle errors', () => {
        const errorSaga = createRecipeSaga(payload);

        it('should call API with createRecipe()', () => {
            expect(errorSaga.next().value).toEqual(call(ApiService.createRecipe, payload.recipe));
        });

        it('should catch an error, if something went wrong', () => {
            expect(errorSaga.throw().value).toEqual(put({ type: CREATE_RECIPE_FAILURE }));
        });
        
        it('should then be done', () => {
            expect(errorSaga.next()).toEqual({ done: true, value: undefined });
        });
    });
});