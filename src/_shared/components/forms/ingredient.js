import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'rmwc/TextField';

class IngredientField extends Component {
    render() {
        const { name = '', quantity = '' } = this.props;

        return ( 
            <div className="recipe-form__ingredient">
                <TextField
                    className="add-recipe__input"
                    label="Ingredient name"
                    value={name}
                    required
                />
                <TextField
                    className="add-recipe__input"
                    label="Ingredient quantity"
                    value={quantity}
                    required
                />
            </div>
        )
    }
}

export default IngredientField;

IngredientField.propTypes = {
    ingredient: PropTypes.object,
};
