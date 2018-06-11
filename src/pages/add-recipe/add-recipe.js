import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MainToolbar } from './../../_shared/components/toolbar/main-toolbar';
import RecipeForm from './../../_shared/components/forms';
import * as actions from './add-recipe.actions';

export class AddRecipe extends Component {
    isFormValid = (title, description) => {
        return !!title && !!description;
    }

    onFormSubmit = (title, description, event) => {
        event.preventDefault();
        
        this.props.createRecipe({ title: title.trim(), description: description.trim() });
    }

    render() {
        return (
            <React.Fragment>
                <MainToolbar title='Add recipe' />
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

export default connect(null, actions)(AddRecipe);

AddRecipe.propTypes = {
    createRecipe: PropTypes.func.isRequired,
}