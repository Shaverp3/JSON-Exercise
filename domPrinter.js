import convertToDollarSign from "./transform.js"

const buildSingleCard = (eachRestaurant) => {
    // let restaurantPriceRange = convertToDollarSign(eachRestaurant.restaurant.price_range)
    return `
    <div class="card text-center" style="width: 25rem;">
    <div class="card-body">
        <h5 class="card-title"><a href="${eachRestaurant.url}" target="_blank">${eachRestaurant.name}</a></h5>        <p class="card-text">${eachRestaurant.address}</p>
        <p class="card-text">Rating = ${eachRestaurant.averageUserRating} out of 5 &nbsp;&nbsp;Avg. Cost per 2:&nbsp;$${eachRestaurant.averageCostPerTwo}</p>
        <a href=${eachRestaurant.menuURL} class="btn btn-primary">Menu</a>
        <a id="delete-btn-${eachRestaurant.id}" class="btn btn-primary">Delete</a>
    </div>
    </div>
`
};

const printAllRestaurants = (restaurantArray) => {
    restaurantArray.forEach((restaurantObjectInLoop) => {
        const htmlString = buildSingleCard(restaurantObjectInLoop);
        document.querySelector("#resultsContainer").innerHTML += htmlString;
    });
};

export default printAllRestaurants;