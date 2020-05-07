import convertToDollarSign from "./transform.js"

const buildSingleCard = (eachRestaurant) => {
    let restaurantPriceRange = convertToDollarSign(eachRestaurant.restaurant.price_range)
    return `
    <div class="card text-center" style="width: 25rem;">
    <div class="card-body">
        <h5 class="card-title"><a href="${eachRestaurant.restaurant.url}" target="_blank">${eachRestaurant.restaurant.name}</a></h5>
        <p class="card-text">Rating = ${eachRestaurant.restaurant.user_rating.aggregate_rating} out of 5 &nbsp;&nbsp;&nbsp;&nbsp;Price:&nbsp;&nbsp;${restaurantPriceRange}</p>
        <a href=${eachRestaurant.restaurant.menu_url} class="btn btn-primary">Menu</a>
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