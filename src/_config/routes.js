import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RecipesListPage } from './../pages/recipes-list';
import { AddRecipePage } from './../pages/add-recipe';
import { EditRecipePage } from './../pages/edit-recipe';
import { NotFoundPage } from './../pages/not-found';

export default (
    <Switch>
        <Route exact path="/" component={RecipesListPage} />
        <Route exact path="/add-recipe" component={AddRecipePage} />
        <Route exact path="/recipe/:id/edit" component={EditRecipePage} />
        <Route component={NotFoundPage} />
    </Switch>
);
