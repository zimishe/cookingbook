import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'rmwc/TextField';
import { Button } from 'rmwc/Button';

class RecipeForm extends Component {
    constructor(props) {
        super(props);

        const { title, description } = props;

        this.state = {
            title: title || '',
            description: description || '',
        }
    }

    onChangeTitle = ({ target: { value }}) => {
        this.setState({ title: value });
    }

    onChangeDescription = ({ target: { value }}) => {
        this.setState({ description: value });
    }

    componentWillReceiveProps(nextProps) {
        const { title, description } = nextProps;
        
        this.setState({ title, description });
    }

    render() {
        const { isFormValid, onFormSubmit } = this.props;
        const { title, description } = this.state;

        return (
            <form className="recipe-form" onSubmit={onFormSubmit.bind(this, title, description)}>
                <TextField
                    className="add-recipe__input"
                    label="Recipe name"
                    value={title}
                    onChange={this.onChangeTitle}
                    fullwidth
                    required
                />
                <TextField
                    className="add-recipe__input"
                    textarea
                    label="Recipe description"
                    value={description}
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
            </form>
        )
    }
}

RecipeForm.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    isFormValid: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired
};

export default RecipeForm;