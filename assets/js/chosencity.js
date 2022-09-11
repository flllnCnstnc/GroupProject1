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


     function getGeoID() {
         const options = {
             method: 'GET',
             headers: {
                 'X-RapidAPI-Key': '416439bb4fmshfef4ac0068641dap1bc56fjsn3c339a781461',
                 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
             }
         };

         fetch('https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=' + city + '%2C%20co&lang=en_US&units=km', options)
            .then((response) => response.json())
             .then((data) => {
                 console.log(data);
         })
         .catch(console.error);

     };


     function getrestList() {
         const options = {
             method: 'POST',
             headers: {
                 'content-type': 'application/json',
                 'X-RapidAPI-Key': '416439bb4fmshfef4ac0068641dap1bc56fjsn3c339a781461',
                 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
             },
             body: '{"geoId":33388,"partySize":2,"reservationTime":"2022-03-07T20:00","sort":"POPULARITY","sortOrder":"desc","filters":[{"id":"establishment","value":["10591"]}],"updateToken":""}'
         };

         fetch('https://travel-advisor.p.rapidapi.com/restaurants/v2/list?currency=USD&units=km&lang=en_US', options)
             .then((response) => response.json())
             .then((data) => {
                 console.log(data);
             })
             .catch(console.error);
     };

     getGeoID();
     getrestList();

 });
