import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Toolbar,
    ToolbarRow,
    ToolbarTitle,
} from 'rmwc/Toolbar';
import { LinkHome } from './../../_shared/components/link-home';
import getRecipesListProps from './../../_shared/selectors/get-recipes';
import RecipeForm from './../../_shared/components/forms';
import { fetchRecipes } from './../recipes-list/recipes-list.actions';
import * as actions from './edit-recipe.actions';

class EditRecipe extends Component {
    componentDidMount() {
        const { recipes, fetchRecipes } = this.props;

        if (!recipes.length) {
            fetchRecipes();
        }
    }

    isFormValid = (editedTitle, editedDescription) => {
        const { recipes = [], match: { params }} = this.props;
        const recipe = [...recipes].find(({ id }) => id === params.id) || {};
        const { title = '', description = '' } = recipe;

        return (title !== editedTitle) || (editedDescription !== description);
    }

    onFormSubmit = (title, description, event) => {
        event.preventDefault();

        const { editRecipe, match: { params: { id }}} = this.props;
        
        editRecipe({ title: title.trim(), description: description.trim(), id });
    }

    render() {
        const { recipes = [], match: { params } } = this.props;
        const recipe = [...recipes].find(({ id }) => id === params.id) || {};
        const { title = '', description = '' } = recipe;

        return (
            <React.Fragment>
                <Toolbar>
                    <ToolbarRow>
                        <LinkHome />
                        <ToolbarTitle>Edit recipe</ToolbarTitle>
                    </ToolbarRow>
                </Toolbar>
                <div className='container'>
                    <RecipeForm
                        title={title}
                        description={description}
                        isFormValid={this.isFormValid}
                        onFormSubmit={this.onFormSubmit}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default connect(getRecipesListProps, {...actions, fetchRecipes})(EditRecipe);