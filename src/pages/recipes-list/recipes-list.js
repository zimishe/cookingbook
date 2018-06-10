import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Toolbar,
    ToolbarRow,
    ToolbarTitle,
  } from 'rmwc/Toolbar';
import { Link } from 'react-router-dom';
import * as actions from './recipes-list.actions';

class RecipesList extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar waterfall>
                    <ToolbarRow>
                        <ToolbarTitle>Recipes list</ToolbarTitle>
                    </ToolbarRow>
                </Toolbar>
                <main>
                    <Link to='/add-recipe'>Add recipe</Link>
                </main>
            </React.Fragment>
        )
    }
}

export default connect(null, actions)(RecipesList);