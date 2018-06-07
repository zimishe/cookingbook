import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './recipes-list.actions';

class RecipesList extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    render() {
        return (
            <div>
                Recipes list
            </div>
        )
    }
}

export default connect(null, actions)(RecipesList);