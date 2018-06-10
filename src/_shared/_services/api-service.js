export function getRecipes() {
    console.log('getRecipes');
    return fetch('http://some-api/getRecipes');
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