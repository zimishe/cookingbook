import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Toolbar,
    ToolbarRow,
    ToolbarTitle,
} from 'rmwc/Toolbar';
import { LinkHome } from './../../_shared/components/link-home';
import { RecipeMainInfo } from './../../_shared/components/recipe-info/main-info';
import { RecipeHistory } from './../../_shared/components/recipe-info/history-info';
import * as actions from './view-recipe.actions';
import { fetchRecipes } from './../recipes-list/recipes-list.actions';

class ViewRecipe extends Component {
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
        const { recipes = [], history, match: { params } } = this.props;
        const recipe = [...recipes].find(({ id }) => id === params.id) || {};
        const { title = '', description = '', dateAdded='' } = recipe;

        return (
            <React.Fragment>
                <Toolbar waterfall>
                    <ToolbarRow>
                        <LinkHome />
                        <ToolbarTitle>Recipe</ToolbarTitle>
                    </ToolbarRow>
                </Toolbar>
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