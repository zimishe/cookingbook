import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ViewRecipe } from './../pages/view-recipe/view-recipe';
import { RecipeMainInfo } from './../_shared/components/recipe-info/main-info';
import { RecipeHistory } from './../_shared/components/recipe-info/history-info';

configure({ adapter: new Adapter() });

const mockedProps = {
    recipes: [
        { title: 'recipe1', description: 'recipe desc', id: '1' },
        { title: 'recipe2', description: 'recipe desc2', id: '2' },
    ],
    history: [
        [
            { id: '1', history: { title: 'recipe1', description: 'recipe desc', id: '1' }}
        ],
        [
            { id: '2', history: { title: 'recipe2', description: 'recipe desc2', id: '2' }}
        ],
    ],
    match: { 
        params: {
            id: '1234567890',
        }
    },
    fetchRecipes: f => f,
    viewRecipeHistory: f => f,
};

describe('<RecipesListPage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ViewRecipe {...mockedProps} />);
    });

    it('Should render recipe main info', () => {
        expect(wrapper.find(RecipeMainInfo).length).toBe(1);
    });

    it('Should render recipe history', () => {
        expect(wrapper.find(RecipeHistory).length).toBe(1);
    });
});
