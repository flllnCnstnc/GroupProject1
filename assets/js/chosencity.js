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
 });
