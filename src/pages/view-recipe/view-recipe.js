import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Toolbar,
    ToolbarRow,
    ToolbarTitle,
} from 'rmwc/Toolbar';
import RecipeForm from './../../_shared/components/forms';
import getRecipesListProps from './../../_shared/selectors/get-recipes';
import * as actions from './view-recipe.actions';
import { fetchRecipes } from './../recipes-list/recipes-list.actions';

class ViewRecipe extends Component {
    isFormValid = (title, description) => {
        return !!title && !!description;
    }

    onFormSubmit = (title, description, event) => {
        event.preventDefault();

        const { editRecipe, match: { params: { id }}} = this.props;
        
        editRecipe({ title, description }, id);
    }

    componentDidMount() {
        const { recipes, fetchRecipes } = this.props;

        if (!recipes) {
            fetchRecipes();
        }
    }

    render() {
        console.log('props', this.props);
        const { recipes, match: { params: { id }} } = this.props;
        const recipe = recipes && [...recipes].find(({ _id }) => _id === id);

        console.log('recipe', recipe);

        return (
            <React.Fragment>
                <Toolbar waterfall>
                    <ToolbarRow>
                        <ToolbarTitle>Recipe</ToolbarTitle>
                    </ToolbarRow>
                </Toolbar>
                <div className='container'>
                    <RecipeForm
                        isFormValid={this.isFormValid}
                        onFormSubmit={this.onFormSubmit}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default connect(getRecipesListProps, {...actions, fetchRecipes})(ViewRecipe);