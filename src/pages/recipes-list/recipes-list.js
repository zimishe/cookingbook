import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Toolbar,
    ToolbarRow,
    ToolbarTitle,
} from 'rmwc/Toolbar';
import { Typography } from 'rmwc/Typography';
import { Link } from 'react-router-dom';
import { RecipeCard } from './../../_shared/components/cards/recipe-card';
import getRecipesListProps from './../../_shared/selectors/get-recipes';
import * as actions from './recipes-list.actions';

class RecipesList extends Component {
    componentDidMount() {
        const { recipes, fetchRecipes } = this.props;

        if (!recipes) {
            fetchRecipes();
        }
    }

    render() {
        const { recipes } = this.props;

        return (
            <React.Fragment>
                <Toolbar waterfall>
                    <ToolbarRow>
                        <ToolbarTitle>Recipes list</ToolbarTitle>
                    </ToolbarRow>
                </Toolbar>
                <div className="container">
                    <div className="recipes-list">
                        {recipes ? (
                            recipes.map((recipe, i) => (
                                <RecipeCard key={i} {...recipe} />
                            ))
                        ) : <Typography use="heading3">No recipes found. Try adding one</Typography>}
                        <Link to='/add-recipe'>Add recipe</Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(getRecipesListProps, actions)(RecipesList);