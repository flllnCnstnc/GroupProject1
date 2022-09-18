/**
 * HomePage JS for Travel Widget
 * Last Updated by Arielle Sept 17 2022
**/


var API_KEY = '16784074-a09f6dbadf96547b9a326b052';


// Fetches pictures for each given city search term

var API_KEY = '16784074-a09f6dbadf96547b9a326b052';


function fetchImages(searchTerm) {
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchTerm);
    $.getJSON(URL, function (data) {
        console.log(URL);
    if (parseInt(data.totalHits) > 0)
        $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
    else
        console.log('No hits');
    });
};



$(".cityBlock").on("click", function (city) {
    var city = this.id;
    console.log(city);
    fetchImages(city);
});
