import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'rmwc/Typography';
import { Link } from 'react-router-dom';
import { getConvertedDate } from './../../utils/get-converted-date';

export const RecipeMainInfo = ({ id, title, dateAdded, description }) => (
    <div className='single-recipe__main-info'>
        <Typography className='single-recipe__title' use="headline4">
            {title}
        </Typography>
        <Typography className='single-recipe__date' use="caption">
            {getConvertedDate(dateAdded)}
        </Typography>
        <Typography className='single-recipe__description' use="body1">
            {description}
        </Typography>
        <Link to={`/recipe/${id}/edit`} className='mdc-button mdc-button--unelevated mdc-ripple-upgraded'>
            Edit recipe
        </Link>
    </div>
);

RecipeMainInfo.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateAdded: PropTypes.string,
    description: PropTypes.string,
};