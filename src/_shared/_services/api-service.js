// const API_URL = process.env.

export function getRecipes() {
    return fetch('https://warm-beyond-66406.herokuapp.com:53600/recipes', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then(res => res.json());
}


export function getRecipeHistory(id) {
    return fetch(`http://localhost:8000/recipes/history/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    }).then(res => res.json());
}

export function createRecipe(recipe) {
    return fetch('http://localhost:8000/recipes', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(recipe),
    });
}

export function editRecipe(recipe, id) {
    return fetch(`http://localhost:8000/recipes/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(recipe),
    });
}