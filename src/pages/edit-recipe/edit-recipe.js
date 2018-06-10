import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Toolbar,
    ToolbarRow,
    ToolbarTitle,
} from 'rmwc/Toolbar';
import RecipeForm from './../../_shared/components/forms';
import * as actions from './edit-recipe.actions';

class EditRecipe extends Component {
    isFormValid = (title, description) => {
        return !!title && !!description;
    }

    onFormSubmit = (title, description, event) => {
        event.preventDefault();

        const { editRecipe, match: { params: { id }}} = this.props;
        
        editRecipe({ title, description }, id);
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar waterfall>
                    <ToolbarRow>
                        <ToolbarTitle>Edit recipe</ToolbarTitle>
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

export default connect(null, actions)(EditRecipe);