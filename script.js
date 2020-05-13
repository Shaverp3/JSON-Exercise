import apiManagerObject from "./apiManager.js"
import printAllRestaurants from "./domPrinter.js"
import eventListenerObject from "./eventListeners.js"

//Prints all restaurants in the database upon page load
apiManagerObject.getAllRestaurantsFromAPI()
    .then((myParsedRestaurants) => {
        printAllRestaurants(myParsedRestaurants)
    });
    //Add a click event listener to the search button
        document
        .querySelector("#searchBtn")
        .addEventListener("click", eventListenerObject.restaurantSearch);

        //Add a keypress event to the search input to check for an enter key
        document
        .querySelector("#searchRestaurants")
        .addEventListener("keypress", function (e){
            if(e.keyCode ===13){
                eventListenerObject.restaurantSearch();
            }
    });

    // Add event listener on submit button for restaurant form document
//code for listening for click event on search button
    document
    .querySelector("#newRestaurantBtn")
    .addEventListener("click", eventListenerObject.saveRestaurantEvent);

//Add delete buttons to restaurant card
//Add event listener to delete buttons
    document
    .querySelector("body")
    .addEventListener("click", () => {
        if (event.target.id.includes("delete-btn")) {
        eventListenerObject.deleteRestaurantEvent(event);
        }
});