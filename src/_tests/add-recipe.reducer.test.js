import reducer from './../pages/add-recipe/add-recipe.reducer';
import {
    createRecipe,
    createRecipeSuccess,
    createRecipeFailure
} from './../pages/add-recipe/add-recipe.actions';

describe('reducers/add recipe', () => {
    const mockedRecipe = {
        title: 'recipe1',
        description: 'desc1',
    };

    const expectedInitialState = {
        error: false,
        pending: false,
    };

    it('should set initial State', () => {
        
        const initialState = reducer(expectedInitialState, {});
        
        expect(initialState).toEqual(expectedInitialState);
    });


    describe('create recipe request', () => {
        const createRecipeState = reducer(expectedInitialState, createRecipe(mockedRecipe));

        it('should set pending to true', () => {
            expect(createRecipeState).toHaveProperty('pending', true);
        });
        it('should set error to false', () => {
            expect(createRecipeState).toHaveProperty('error', false);
        });
    });

    describe('create recipe success', () => {
        const createRecipeState = reducer(expectedInitialState, createRecipe(mockedRecipe));
        const createRecipeSuccessState = reducer(createRecipeState, createRecipeSuccess());

        it('should set pending to false', () => {
            expect(createRecipeSuccessState).toHaveProperty('pending', false);
        });

        it('should set error to false', () => {
            expect(createRecipeSuccessState).toHaveProperty('error', false);
        });
    });

    describe('creat recipe error handling', () => {
        const createRecipeErrorState = reducer(expectedInitialState, createRecipeFailure());

        it('should set pending to false', () => {
            expect(createRecipeErrorState).toHaveProperty('pending', false);
        });

        it('should set error to true', () => {
            expect(createRecipeErrorState).toHaveProperty('error', true);
        });
    });
});