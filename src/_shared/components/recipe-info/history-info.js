import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'rmwc/Typography';
import { Button } from 'rmwc/Button';
import { RecipeCard } from './../cards/recipe-card';

export const RecipeHistory = ({ onShowHistory, history = [] }) => (
    <div className='single-recipe__history'>
        <Typography className='single-recipe__description' use="headline6">
            History
        </Typography>
        {history.length ? (
            history.map((recipe, i) => (
            <RecipeCard key={i} {...recipe} />
        )).reverse()) : (
            <Typography use="subtitle2" className='single-recipe__load-history'>
                No history yet
            </Typography>
        )}
        <Button onClick={onShowHistory} outlined>Show history</Button>
    </div>
);

RecipeHistory.propTypes = {
    history: PropTypes.array,
    onShowHistory: PropTypes.func.isRequired,
};