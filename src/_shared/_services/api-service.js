export default class ApiService {
    getRecipes() {
        console.log('getRecipes');
        return fetch('http://some-api/getRecipes');
    }
};
