/**
 * HomePage JS for Travel Widget
 * Last Updated by Arielle Sept 17 2022
**/

// TODO FUTURE: Hide API key in a .env file for security
var API_KEY = '16784074-a09f6dbadf96547b9a326b052';
var arrImg = {};


// Fetches pictures for each given city search term

$(document).ready(function () {
    $('.cityBlock').each(function () {
        var searchTerm = this.id;
        console.log("Search images: " + searchTerm);
        fetchImages(searchTerm);

    })
});

var fetchImages = function(searchTerm) {
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchTerm) +"&per_page=5";
    arrImg['-'+searchTerm] = [];
    $.getJSON(URL, function (data) {
        console.log(URL);
    if (parseInt(data.totalHits) > 0)
        $.each(data.hits, function (i, hit) {
            var imgURL = hit.largeImageURL;
            var imgUser = hit.user
            var pageURL = hit.pageURL
            var entry = { "imgURL": imgURL, "aria": "Photo by " + imgUser + ": " + pageURL }
            arrImg['-'+searchTerm].push(entry);
            console.log(arrImg['-' + searchTerm]);
            localStorage.setItem("arrImg-"+ searchTerm + "", JSON.stringify(arrImg['-' + searchTerm]));
        });
    else
        console.log('No hits');
    });
};

var slides1 = JSON.parse(localStorage.getItem('arrImg-chicago-illinois'));
var slides2 = JSON.parse(localStorage.getItem('arrImg-boulder-colorado'));
var slides3 = JSON.parse(localStorage.getItem('arrImg-houston-texas'));
var slides4 = JSON.parse(localStorage.getItem('arrImg-los-angeles-california'));




$(".cityBlock").on('click', function (event) {
    var city = this.id;
    console.log(city);
    localStorage.setItem("currentCity", JSON.stringify(this.id));
    event.preventDefault();
    location.href = "chosencity.html"
});
