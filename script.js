fetch("http://localhost:8088/restaurants")
    .then(response => response.json())
    .then(myParsedRestaurants => {
        myParsedRestaurants.forEach(place => {
            // console.log(place.restaurant.name)
            let restaurantName=place.restaurant.name
            document.querySelector("#resultsContainer").innerHTML += `<li>${restaurantName}</li>`
        })})
            



            //     // console.log(brewery.name)
            // });


            // parsedBreweriesArray.forEach(element => {
            //     console.log(element.name)
            //     if(element.name)