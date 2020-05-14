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
    },

    printEditForm: () => {
        console.log("You clicked the edit button")
        console.log(event.target.id)
        const primaryKey = event.target.id.split("-")[2];
        console.log(primaryKey)
        //Select the parent card of the edit button
        const cardToReplace = document.querySelector(`#restaurant-${primaryKey}`)
        console.log(cardToReplace)
        //then replace it's innerHTML witha form
       
        //autofill fields on form with this restaurant's information
        apiManagerObject.getOneRestaurant(primaryKey)
        .then (singleRestaurantObject => {
              console.log(singleRestaurantObject)
               //NOTE: Move this to the domPrinter.js
        cardToReplace.innerHTML = `<section id="editRestaurant">
        <form action="">
          <label for="restUrl"><input type="text" placeholder="URL" id="edit-restaurant-url" value="${singleRestaurantObject.url}"></label>
          <label for="restAddress"><input type="text" placeholder="Address" id="edit-restaurant-address" value="${singleRestaurantObject.address}"></label>
          <label for="restMenu"></label><input type="text" placeholder="menuURL" id="edit-restaurant-menuURL" value="${singleRestaurantObject.menuURL}">
          <label for="restName"><input type="text" placeholder="Restaurant Name" id="edit-restaurant-name" value="${singleRestaurantObject.name}"></label>
          <label for="avgCost"></label><input type="text" placeholder="Average Cost" id="edit-average-cost" value="${singleRestaurantObject.averageCostPerTwo}">
          <label for="rating"></label><input type="text" placeholder="User Rating" id="edit-restaurant-rating" value="${singleRestaurantObject.averageUserRating}">
        </form>
      
        <button id="save-btn-${primaryKey}">Save Changes</button>
        <div>
        </section> 
        `
        })
    },

    saveRestaurantChangesEvent: (event) => {
        //Get values of inputs
        console.log(event.target.id.split("-")[2])
        const restaurantURLValue = document.querySelector("#edit-restaurant-url").value;
        const restaurantAddressValue = document.querySelector("#edit-restaurant-address").value;
        const restaurantMenuValue = document.querySelector("#edit-restaurant-menuURL").value;
        const restaurantNameValue = document.querySelector("#edit-restaurant-name").value;
        const restaurantAvgCostValue = document.querySelector("#edit-average-cost").value;
        const restaurantRatingValue = document.querySelector("#edit-restaurant-rating").value;
        //Store those values in the object
        const restaurantObjectToEdit = {
            url: restaurantURLValue,
            menuURL: restaurantMenuValue,
            name: restaurantNameValue,
            averageCostPerTwo: restaurantAvgCostValue,
            averageUserRating: restaurantRatingValue,
            address: restaurantAddressValue,
            id: event.target.id.split("-")[2]
        }
        console.log(restaurantObjectToEdit)
        //make PUT request to the database
        apiManagerObject.updateOneRestaurant(restaurantObjectToEdit)
        //Refresh the DOM
        .then (apiManagerObject.getAllRestaurantsFromAPI)
        .then (printAllRestaurants)
        
    }
};

export default eventListenerObject;