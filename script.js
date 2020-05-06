fetch("http://localhost:8088/restaurants")
    .then(response => response.json())
    .then(myParsedRestaurants => {
        myParsedRestaurants.forEach(place => {
            // console.log(place.restaurant.name)
            let restaurantName = place.restaurant.name
            let restaurantLocation = place.restaurant.location.address
            let restaurantRating = place.restaurant.user_rating.aggregate_rating
            let restaurantPriceRange = place.restaurant.price_range
            let restaurantURL = place.restaurant.url
            let restaurantMenu = place.restaurant.menu_url

            if (restaurantPriceRange >= 5) {
                restaurantPriceRange = "$$$$$"
            } else {
                if (restaurantPriceRange >= 4 && restaurantPriceRange < 5) {
                    restaurantPriceRange = "$$$$"
                } else {
                    if (restaurantPriceRange >= 3 && restaurantPriceRange < 4) {
                        restaurantPriceRange = "$$$"
                    } else {
                        if (restaurantPriceRange >= 2 && restaurantPriceRange < 3) {
                            restaurantPriceRange = "$$"
                        } else {
                            if (restaurantPriceRange >= 1 && restaurantPriceRange < 2) {
                                restaurantPriceRange = "$"
                            } else {
                                restaurantPriceRange = "NA"
                            }
                        }
                    }
                }
            }
            console.log(restaurantName, restaurantLocation, restaurantRating, restaurantPriceRange, restaurantURL)
            document.querySelector("#resultsContainer").innerHTML +=
                `<div class="card text-center" style="width: 25rem;">
                    <div class="card-body">
                        <h5 class="card-title"><a href=${restaurantURL}>${restaurantName}</a></h5>
                        <p class="card-text">Rating = ${restaurantRating} out of 5 &nbsp;&nbsp;&nbsp;&nbsp;Price:&nbsp;&nbsp;${restaurantPriceRange}</p>
                        <a href=${restaurantMenu} class="btn btn-primary">Menu</a>
                    </div>
                </div>

            `
            // <li><a href=${restaurantURL}>${restaurantName}</a> - ${restaurantLocation}</li><p>Rating = ${restaurantRating} out of 5 &nbsp;&nbsp;&nbsp;&nbsp;Price:&nbsp;&nbsp;${restaurantPriceRange}`

        })
    })




            //     // console.log(brewery.name)
            // });


            // parsedBreweriesArray.forEach(element => {
            //     console.log(element.name)
            //     if(element.name)