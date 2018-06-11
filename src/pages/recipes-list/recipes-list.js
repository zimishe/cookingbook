import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MainToolbar } from './../../_shared/components/toolbar/main-toolbar';
import { Typography } from 'rmwc/Typography';
import { Link } from 'react-router-dom';
import { RecipeCard } from './../../_shared/components/cards/recipe-card';
import getRecipesListProps from './../../_shared/selectors/get-recipes';
import * as actions from './recipes-list.actions';

export class RecipesList extends Component {
    componentDidMount() {
        const { recipes, fetchRecipes } = this.props;

        if (!recipes.length) {
            fetchRecipes();
        }
    }

    render() {
        const { recipes } = this.props;

        return (
            <React.Fragment>
                <MainToolbar title='Recipes List' />
                <div className="container">
                    <div className="recipes-list">
                        {recipes.length ? (
                            recipes.map(({ id, ...rest} , i) => (
                                <Link to={`/recipe/${id}`} key={i} className='recipe-list__item'>
                                    <RecipeCard {...rest} />
                                </Link>
                            )).reverse()
                        ) : <Typography use="subtitle2">No recipes found. Try adding one</Typography>}
                    </div>
                    <Link
                        to='/add-recipe'
                        className='mdc-button mdc-button--unelevated mdc-ripple-upgraded'>
                            Add recipe
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(getRecipesListProps, actions)(RecipesList);

RecipesList.propTypes = {
    recipes: PropTypes.array,
    fetchRecipes: PropTypes.func,
}