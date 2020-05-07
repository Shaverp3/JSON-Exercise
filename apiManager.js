// Return a fetch call that searches for a specific term
const apiManager = {
    searchRestaurantsFromAPI: (whatTheUserSearched) => {
        return fetch(
            `http://localhost:8088/restaurants?q=${whatTheUserSearched}`)
            .then((response) => response.json())
    },


    getAllRestaurantsFromAPI: () => {
        return fetch(
            "http://localhost:8088/restaurants")
            .then(response => response.json())
    }
}

export default apiManager;