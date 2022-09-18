/**
 * HomePage JS for Travel Widget
 * Last Updated by Arielle Sept 17 2022
**/

// TODO FUTURE: Hide API key in a .env file for security
var API_KEY = '16784074-a09f6dbadf96547b9a326b052';


// Fetches pictures for each given city search term


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


$(".cityBlock").on('click', function (event) {
    var city = this.id;
    localStorage.setItem("currentCity", JSON.stringify(this.id));
    event.preventDefault();
    location.href = "chosencity.html"
});
