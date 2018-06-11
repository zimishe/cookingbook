import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Toolbar,
    ToolbarRow,
    ToolbarTitle,
} from 'rmwc/Toolbar';
import { Typography } from 'rmwc/Typography';
import { Link } from 'react-router-dom';
import { LinkHome } from './../../_shared/components/link-home';
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
                <Toolbar waterfall>
                    <ToolbarRow>
                        <LinkHome />
                        <ToolbarTitle>Recipes list</ToolbarTitle>
                    </ToolbarRow>
                </Toolbar>
                <div className="container">
                    <div className="recipes-list">
                        {recipes.length ? (
                            recipes.map(({ id, ...rest} , i) => (
                                <Link to={`/recipe/${id}`} key={i} className='recipe-list__item'>
                                    <RecipeCard {...rest} />
                                </Link>
                            ))
                        ) : <Typography use="heading3">No recipes found. Try adding one</Typography>}
                        <Link
                            to='/add-recipe'
                            className='mdc-button mdc-button--unelevated mdc-ripple-upgraded'>
                                Add recipe
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(getRecipesListProps, actions)(RecipesList);