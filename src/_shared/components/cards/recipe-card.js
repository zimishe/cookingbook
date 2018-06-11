import React from 'react';
import PropTypes from 'prop-types';
import { CardPrimaryAction } from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import { getConvertedDate } from './../../utils/get-converted-date';

export const RecipeCard = ({ title = '', description = '', dateAdded = '', dateEdited = '' }) => (
    <CardPrimaryAction>
        <Typography use="headline6">{title}</Typography>
        <Typography use="subtitle2">{getConvertedDate(dateAdded || dateEdited)}</Typography>
        <Typography use="body1">{description}</Typography>
    </CardPrimaryAction>
);

RecipeCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    dateAdded: PropTypes.string,
    dateEdited: PropTypes.string,
};