/**
 * Arielle's Edits for Restaurant Edit
 * Last Updated Sept 11 2022
*/

/**
 * Inject name of city into Title in header
 */

/**
 * city variable to be taken from index.html. Defined for testing
 */

  var city = "Boulder"
  var geoId = 33324;
  var restaurantsBlock = $('restaurants-block');
  var requestUrl = 'https://travel-advisor.p.rapidapi.com/restaurants/v2/list?currency=USD&units=mi&lang=en_US';

  $(document).prop('title', "Welcome to " + city);
  var restaurantsTitle = $('#restaurants-title').text("Places to Eat in " + city);


  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '1b5f8f1091mshbc2582aab1d8be2p14f00fjsnce3839947530',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    },
    body: '{"geoId":33324,"sort":"POPULARITY","sortOrder":"desc","filters":[{"id":"establishment","value":["10591"]}],"updateToken":""}'
};

var displayRestaurants = function (entries) {
  console.log("Entries: " + entries);
}

  fetch(requestUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        displayRestaurants(data.items);
      });
    } else {
      console.log('Error: ' + response.statusText);
    }
  });



  // .filter
  // "item".cardTitle
// if(cardTitle)
// - return
// Return a new array - var = []
// Will not change the current array
//
