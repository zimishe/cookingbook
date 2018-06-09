export function getRecipes() {
    console.log('getRecipes');
    return fetch('http://some-api/getRecipes');
}