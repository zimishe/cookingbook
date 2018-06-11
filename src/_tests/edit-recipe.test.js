import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { EditRecipe } from './../pages/edit-recipe/edit-recipe';
import RecipeForm from './../_shared/components/forms';

configure({ adapter: new Adapter() });

const mockedProps = {
    recipes: [],
    match: { 
        params: {
            id: '1234567890',
        }
    },
    fetchRecipes: f => f,
};

describe('<EditRecipePage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<EditRecipe {...mockedProps} />);
    });

    it('Should render Recipe form inside add recipe page', () => {
        expect(wrapper.find(RecipeForm).length).toBe(1);
    });
});
