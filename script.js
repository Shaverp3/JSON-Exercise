import apiManagerObject from "./apiManager.js"
import printAllRestaurants from "./domPrinter.js"
import restaurantSearch from "./eventListeners.js"

//Prints all restaurants in the database upon page load
apiManagerObject.getAllRestaurantsFromAPI()
    .then((myParsedRestaurants) => {
         printAllRestaurants(myParsedRestaurants)
});

//code for listening for click event on search button
document.querySelector("#searchBtn").addEventListener("click", restaurantSearch);

//code to listen for enter key press in search
document.querySelector("#searchRestaurants").addEventListener("keyup", function () {
    if (event.keyCode === 13) {
        document.querySelector("#searchBtn").click();
    }
});