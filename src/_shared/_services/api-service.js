const API_URL = 'https://warm-beyond-66406.herokuapp.com';

export function getRecipes() {
    return fetch(`${API_URL}/recipes`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then(res => res.json());
}


export function getRecipeHistory(id) {
    return fetch(`${API_URL}/recipes/history/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then(res => res.json());
}

export function createRecipe(recipe) {
    return fetch(`${API_URL}/recipes`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(recipe),
    });
}

export function editRecipe(recipe, id) {
    return fetch(`${API_URL}/recipes/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(recipe),
    });
}