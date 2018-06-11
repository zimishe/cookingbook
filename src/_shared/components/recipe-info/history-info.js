import React from 'react';
import { Typography } from 'rmwc/Typography';
import { Button } from 'rmwc/Button';
import { RecipeCard } from './../cards/recipe-card';

export const RecipeHistory = ({ onShowHistory, history = [] }) => (
    <div className='single-recipe__history'>
        <Typography className='single-recipe__description' use="headline6">
            History
        </Typography>
        {history.map((recipe, i) => (
            <RecipeCard key={i} {...recipe} />
        ))}
        <Button onClick={onShowHistory} outlined>Show history</Button>
    </div>
)