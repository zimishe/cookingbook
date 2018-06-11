import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MainToolbar } from './../../_shared/components/toolbar/main-toolbar';
import { RecipeMainInfo } from './../../_shared/components/recipe-info/main-info';
import { RecipeHistory } from './../../_shared/components/recipe-info/history-info';
import * as actions from './view-recipe.actions';
import { fetchRecipes } from './../recipes-list/recipes-list.actions';

export class ViewRecipe extends Component {
    isFormValid = (title, description) => {
        return !!title && !!description;
    }

    onShowHistory = () => {
        const { viewRecipeHistory, match: { params: { id }} } = this.props;
        
        viewRecipeHistory(id);
    }

    componentDidMount() {
        const { recipes, fetchRecipes } = this.props;

        if (!recipes.length) {
            fetchRecipes();
        }
    }

    render() {
        const { recipes = [], match: { params } } = this.props;
        const recipe = [...recipes].find(({ id }) => id === params.id) || {};
        const { title = '', description = '', dateAdded='' } = recipe;
        const { history } = this.props.history.find(({ id }) => id === params.id) || {};

        return (
            <React.Fragment>
                <MainToolbar title='Recipe' />
                <div className='container'>
                    <div className='single-recipe'>
                        <RecipeMainInfo id={params.id} title={title} description={description} dateAdded={dateAdded} />
                        <RecipeHistory onShowHistory={this.onShowHistory} history={history} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({
    recipesListReducer: { recipes },
    viewRecipeReducer: { history, error, pending }
}) => ({ recipes, history, error, pending });

export default connect(mapStateToProps, {...actions, fetchRecipes})(ViewRecipe);

ViewRecipe.propTypes = {
    recipes: PropTypes.array,
    history: PropTypes.array,
    error: PropTypes.bool,
    pending: PropTypes.bool,
    fetchRecipes: PropTypes.func,
    match: PropTypes.object,
};