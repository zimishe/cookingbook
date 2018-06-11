import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { RecipesList } from './../pages/recipes-list/recipes-list';
import { RecipeCard } from './../_shared/components/cards/recipe-card';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

const mockedProps = {
    recipes: [
        { title: 'recipe1', description: 'recipe desc', id: '1' },
        { title: 'recipe2', description: 'recipe desc2', id: '2' },
    ],
    match: { 
        params: {
            id: '1234567890',
        }
    },
    fetchRecipes: f => f,
};

describe('<RecipesListPage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RecipesList {...mockedProps} />);
    });

    it('Should render recipes inside recipe list page', () => {
        expect(wrapper.find(RecipeCard).length).toBe(2);
    });

    it('Should render link to recipe edit page', () => {
        expect(wrapper.find(Link).length).toBe(3);
    });
});
