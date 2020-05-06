// fetch("http://localhost:8088/restaurants")
//     .then(response => response.json())
//     .then(myParsedRestaurants => {
//         myParsedRestaurants.forEach(place => {
//             // console.log(place.restaurant.name)
//             let restaurantName = place.restaurant.name
//             let restaurantLocation = place.restaurant.location.address
//             let restaurantRating = place.restaurant.user_rating.aggregate_rating
//             let restaurantPriceRange = place.restaurant.price_range
//             let restaurantURL = place.restaurant.url
//             let restaurantMenu = place.restaurant.menu_url

//             if (restaurantPriceRange >= 5) {
//                 restaurantPriceRange = "$$$$$"
//             } else {
//                 if (restaurantPriceRange >= 4 && restaurantPriceRange < 5) {
//                     restaurantPriceRange = "$$$$"
//                 } else {
//                     if (restaurantPriceRange >= 3 && restaurantPriceRange < 4) {
//                         restaurantPriceRange = "$$$"
//                     } else {
//                         if (restaurantPriceRange >= 2 && restaurantPriceRange < 3) {
//                             restaurantPriceRange = "$$"
//                         } else {
//                             if (restaurantPriceRange >= 1 && restaurantPriceRange < 2) {
//                                 restaurantPriceRange = "$"
//                             } else {
//                                 restaurantPriceRange = "NA"
//                             }
//                         }
//                     }
//                 }
//             }
//             console.log(restaurantName, restaurantLocation, restaurantRating, restaurantPriceRange, restaurantURL)
//             document.querySelector("#resultsContainer").innerHTML +=
//                 `<div class="card text-center" style="width: 25rem;">
//                     <div class="card-body">
//                         <h5 class="card-title"><a href=${restaurantURL}>${restaurantName}</a></h5>
//                         <p class="card-text">Rating = ${restaurantRating} out of 5 &nbsp;&nbsp;&nbsp;&nbsp;Price:&nbsp;&nbsp;${restaurantPriceRange}</p>
//                         <a href=${restaurantMenu} class="btn btn-primary">Menu</a>
//                     </div>
//                 </div>

//             `
//             // <li><a href=${restaurantURL}>${restaurantName}</a> - ${restaurantLocation}</li><p>Rating = ${restaurantRating} out of 5 &nbsp;&nbsp;&nbsp;&nbsp;Price:&nbsp;&nbsp;${restaurantPriceRange}`

//         })
//     })

    function restaurantSearch(searchName) {
        fetch(`http://localhost:8088/restaurants${searchName}`)
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
                restaurantPriceRange = convertToDollarSign(`${restaurantPriceRange}`)
                // if (restaurantPriceRange >= 5) {
                //     restaurantPriceRange = "$$$$$"
                // } else {
                //     if (restaurantPriceRange >= 4 && restaurantPriceRange < 5) {
                //         restaurantPriceRange = "$$$$"
                //     } else {
                //         if (restaurantPriceRange >= 3 && restaurantPriceRange < 4) {
                //             restaurantPriceRange = "$$$"
                //         } else {
                //             if (restaurantPriceRange >= 2 && restaurantPriceRange < 3) {
                //                 restaurantPriceRange = "$$"
                //             } else {
                //                 if (restaurantPriceRange >= 1 && restaurantPriceRange < 2) {
                //                     restaurantPriceRange = "$"
                //                 } else {
                //                     restaurantPriceRange = "NA"
                //                 }
                //             }
                //         }
                //     }
                // }
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
                });
            }
            )
    }

    document.querySelector("#searchBtn").addEventListener("click", function(){
        let searchValue = document.querySelector("#searchRestaurants").value
        document.querySelector("#resultsContainer").innerHTML = ` `
        
        if(searchValue != "") {
            // searchValue=includes(`${searchValue}`)
            let fetchSearch = `?q=`+ `${searchValue}`
            restaurantSearch(`${fetchSearch}`)
        }else{
            restaurantSearch(``)
        }

    })

    // Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });

    //function to convert restaurant price range from number to $$

    const convertToDollarSign = (r) =>{
        if (r >= 5) {
            return '$$$$$'
        } else {
            if (r >= 4 && r < 5) {
                return '$$$$'
            } else {
                if (r >= 3 && r < 4) {
                    return '$$$'
                } else {
                    if (r >= 2 && r < 3) {
                        return '$$'
                    } else {
                        if (r >= 1 && r < 2) {
                            return '$'
                        } else {
                            return 'NA'
                        }
                    }
                }
            }
        }
    }
