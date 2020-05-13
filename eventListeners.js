import apiManagerObject from "./apiManager.js"
import printAllRestaurants from "./domPrinter.js"

// This is called a "factory function". It builds and returns an object. We don't need to export it, because we only need access to it in this file.

const buildRestaurantObjectFromForm = () => {
    return {

        url: document.querySelector("#restaurant-url").value,
        address: document.querySelector("#restaurant-address").value,
        menuURL: document.querySelector("#restaurant-menuURL").value,
        name: document.querySelector("#restaurant-name").value,
        averageCostPerTwo: document.querySelector("#average-cost").value,
        averageUserRating: document.querySelector("#restaurant-rating").value
    };
};

const eventListenerObject = {

    restaurantSearch: () => {
        const searchTerm = document.querySelector("#searchRestaurants").value;
        // document.querySelector("#resultsContainer").innerHTML = ' ';
        apiManagerObject
        .searchRestaurantsFromAPI(searchTerm)
            .then((myParsedRestaurants) => {
                printAllRestaurants(myParsedRestaurants)
            });
    },
    saveRestaurantEvent: () => {
        const restaurantObject = buildRestaurantObjectFromForm();
        apiManagerObject
            .postRestaurant(restaurantObject)  // Post the restaurant to json-server
            .then(apiManagerObject.getAllRestaurantsFromAPI) //Fetch all the restaurants from JSON again
            .then(printAllRestaurants); //Once the restaurants come back, print them to the DOM
    },
    
    deleteRestaurantEvent: (event) => {
        //On click, get the id of the thing they clicked on
        const primaryKey = event.target.id.split("-")[2];

        apiManagerObject
        .deleteRestaurant(primaryKey)  //Use the id to make fetch call w/ a DELETE method to the database
        .then(apiManagerObject.getAllRestaurantsFromAPI)  //Then fetch all the restaurants again
        .then(printAllRestaurants);  //Then print them all to the DOM again
    }
};

export default eventListenerObject;