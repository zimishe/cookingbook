import React from 'react';
import PropTypes from 'prop-types';
import { CardPrimaryAction } from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import { Link } from 'react-router-dom';

export const RecipeCard = ({ _id, title = '', description = '' }) => (
    <Link to={`/recipe/${_id}`} className='recipe-list__item'>
        <CardPrimaryAction>
            <Typography use="headline6">{title}</Typography>
            <Typography use="body1">{description}</Typography>
        </CardPrimaryAction>
    </Link>
);

RecipeCard.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
};