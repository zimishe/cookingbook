import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RecipesListPage } from './../pages/recipes-list';
import { NotFoundPage } from './../pages/not-found';

export default (
    <Switch>
        <Route path="/" component={RecipesListPage} />
        <Route component={NotFoundPage} />
    </Switch>
);
