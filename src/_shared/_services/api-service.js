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