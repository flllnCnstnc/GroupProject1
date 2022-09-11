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


 $( document ).ready(function() {
     $(document).prop('title', "Welcome to " + city);
     var restaurantsTitle = $('#restaurants-title').text("Places to Eat in " + city);

     const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '416439bb4fmshfef4ac0068641dap1bc56fjsn3c339a781461',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
        body: '{"geoId":33388,"sort":"POPULARITY","sortOrder":"desc","filters":[{"id":"establishment","value":["10591"]}],"boundingBox":{"northEastCorner":{"latitude":12.248278039408776,"longitude":109.1981618106365},"southWestCorner":{"latitude":12.243407232845051,"longitude":109.1921640560031}},"updateToken":""}'
    };

    fetch('https://travel-advisor.p.rapidapi.com/restaurants/v2/list?currency=USD&units=km&lang=en_US', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

 });
