import apiManagerObject from "./apiManager.js"
import printAllRestaurants from "./domPrinter.js"

const restaurantSearch = () => {
    const searchTerm = document.querySelector("#searchRestaurants").value;
    document.querySelector("#resultsContainer").innerHTML = ' ';
    apiManagerObject.searchRestaurantsFromAPI(searchTerm)
        .then((parsedRestaurants) => {
            printAllRestaurants(parsedRestaurants)
        });

};

export default restaurantSearch;