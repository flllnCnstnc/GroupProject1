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
var city = "Denver"
var restaurantsBlock = $('restaurants-block');
var requestUrl = '';



$(document).prop('title', "Welcome to " + city);
var restaurantsTitle = $('#restaurants-title').text("Places to Eat in " + city);



const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '1b5f8f1091mshbc2582aab1d8be2p14f00fjsnce3839947530',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	},
	body: '{"geoId":33324,"partySize":2,"reservationTime":"2022-03-07T20:00","sort":"POPULARITY","sortOrder":"desc","filters":[{"id":"establishment","value":["10591"]}],"boundingBox":{"northEastCorner":{"latitude":12.248278039408776,"longitude":109.1981618106365},"southWestCorner":{"latitude":12.243407232845051,"longitude":109.1921640560031}},"updateToken":""}'
};

fetch('https://travel-advisor.p.rapidapi.com/restaurants/v2/list?currency=USD&units=km&lang=en_US', options)
.then(function (response) {
    if (response.ok) {
      console.log(response);
        response.json().then(function (data) {
            console.log(data.data.AppPresentation_queryAppListV2);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Unable to connect to GitHub');
  });
