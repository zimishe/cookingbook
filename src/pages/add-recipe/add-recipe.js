import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Toolbar,
    ToolbarRow,
    ToolbarTitle,
} from 'rmwc/Toolbar';
import RecipeForm from './../../_shared/components/forms';
import * as actions from './add-recipe.actions';

class AddRecipe extends Component {
    isFormValid = (title, description) => {
        return !!title && !!description;
    }

    onFormSubmit = (title, description, event) => {
        event.preventDefault();
        
        this.props.createRecipe({ title, description });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar waterfall>
                    <ToolbarRow>
                        <ToolbarTitle>Add recipe</ToolbarTitle>
                    </ToolbarRow>
                </Toolbar>
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