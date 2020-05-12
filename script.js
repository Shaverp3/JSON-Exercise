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

//Gets input from user and adds new restaurant (post) to restaurants.json database

document.querySelector("#newRestaurantBtn").addEventListener("click", function () {
    let restUrl = document.querySelector("#restaurant-url").value
    let restAddress = document.querySelector("#restaurant-address").value
    let restMenu = document.querySelector("#restaurant-menuURL").value
    let restName = document.querySelector("#restaurant-name").value
    let restCost = document.querySelector("#average-cost").value
    let restRating = document.querySelector("#restaurant-rating").value
    // console.log(restName,restAddress,restUrl,restMenu,restCost,restRating)

    const restaurantObject = {
        url: restUrl,
        menuURL: restMenu,
        name: restName,
        averageUserRating: restRating,
        averageCostPerTwo: restCost,
        address: restAddress
    }

    fetch("http://localhost:8088/restaurants", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(restaurantObject)
    }).then(function () {
        document.querySelector("#resultsContainer").innerHTML = ""
        apiManagerObject.getAllRestaurantsFromAPI()
            .then((myParsedRestaurants) => {
                printAllRestaurants(myParsedRestaurants)
            })
    });

    console.log(restaurantObject)
});

document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("delete-btn")) {
        // console.log(event.target.id)
        // console.log(event.target.id.split("-")[2])
        const primaryKey = event.target.id.split("-")[2];
        fetch(`http://localhost:8088/restaurants/${primaryKey}`, {
            method: "DELETE",
        }).then(() => {
            document.querySelector("#resultsContainer").innerHTML = "";
            apiManagerObject.getAllRestaurantsFromAPI()
                .then((myParsedRestaurants) => {
                    printAllRestaurants(myParsedRestaurants);
                });
        });
    }
});