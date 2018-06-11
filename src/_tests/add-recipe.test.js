import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AddRecipe } from './../pages/add-recipe/add-recipe';
import RecipeForm from './../_shared/components/forms';

configure({ adapter: new Adapter() });

describe('<AddUserPage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AddRecipe />);
    });

    it('Should render Recipe form inside add recipe page', () => {
        expect(wrapper.find(RecipeForm).length).toBe(1);
    });
});
