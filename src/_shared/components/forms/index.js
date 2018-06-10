import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'rmwc/TextField';
import { Button } from 'rmwc/Button';

class RecipeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
        }
    }

    onChangeTitle = ({ target: { value }}) => {
        this.setState({ title: value.trim() });
    }

    onChangeDescription = ({ target: { value }}) => {
        this.setState({ description: value.trim() });
    }

    render() {
        const { isFormValid, onFormSubmit } = this.props;
        const { title, description } = this.state;

        return (
            <form className="recipe-form" onSubmit={onFormSubmit.bind(this, title, description)}>
                <TextField
                    className="add-recipe__input"
                    label="Recipe name"
                    onChange={this.onChangeTitle}
                    fullwidth
                    required
                />
                <TextField
                    className="add-recipe__input"
                    textarea
                    label="Recipe description"
                    onChange={this.onChangeDescription}
                    fullwidth
                    rows="8"
                    required
                />
                <Button
                    raised
                    disabled={!isFormValid(title, description)}
                >
                    Save
                </Button>
                {/* {ingredients.map(({ name, quantity }, i) => (
                    <IngredientField key={i} name={name} quantity={quantity} />
                ))} */}
            </form>
        )
    }
}

RecipeForm.propTypes = {
    ingredients: PropTypes.array,
};

export default RecipeForm;