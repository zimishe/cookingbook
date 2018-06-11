import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MainToolbar } from './../../_shared/components/toolbar/main-toolbar';
import getRecipesListProps from './../../_shared/selectors/get-recipes';
import RecipeForm from './../../_shared/components/forms';
import { fetchRecipes } from './../recipes-list/recipes-list.actions';
import * as actions from './edit-recipe.actions';

export class EditRecipe extends Component {
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
                <MainToolbar title='Edit recipe' />
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

EditRecipe.propTypes = {
    recipes: PropTypes.array,
    match: PropTypes.object,
    editRecipe: PropTypes.func
}