/**
 * HomePage JS for Travel Widget
 * Last Updated by Arielle Sept 17 2022
**/

// TODO FUTURE: Hide API key in a .env file for security
var API_KEY = '16784074-a09f6dbadf96547b9a326b052';
var a = 0;


// Fetches pictures for each given city search term



$(document).ready(function () {
    $('.cityBlock').each(function () {
        var searchTerm = this.id;
        console.log("Search images: " + searchTerm);
        fetchImages(searchTerm);
    })
});


var fetchImages = function (searchTerm) {
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchTerm) + "&per_page=5";
    var thisBlock = $('#' + searchTerm + '> ul');
    $.getJSON(URL, function (data) {
        if (parseInt(data.totalHits) > 0)
            $.each(data.hits, function (i, hit) {
                var imgURL = hit.largeImageURL;
                var imgUser = hit.user
                var pageURL = hit.pageURL
                var newImg = $('<div></div>').attr('aria-label', "Photo by: " + imgUser + " " + pageURL + "").css("background-image", "url(" + imgURL + ")");
                thisBlock.append(newImg);
                a++;
                countFunction(a);
        })
    else
        console.log('No hits');
    });
};

var countFunction = function(a) {
    console.log("Pulling slide: " + a);
    if (a === 20) {
        showSlides()
    }
}

var showSlides = function () {
    console.log("All the slides have been pulled")
}




$(".cityBlock").on('click', function (event) {
    var city = this.id;

    // Make value standardized for transport to local storage
    var choppedStr = city.split('-')[0];
    console.log(choppedStr);

    var spaceStr = choppedStr.replaceAll('_', ' ');
    console.log(spaceStr);

    var toPascalCase = str =>
    str.replace(/\w\S*/g, m => m.charAt(0).toUpperCase()
        + m.substr(1).toLowerCase());

    var finalCity = toPascalCase(spaceStr);
    console.log(finalCity);

    var currentCity = {
        "city": finalCity
    }


    localStorage.setItem("currentCity", JSON.stringify(currentCity));
    event.preventDefault();
    location.href = "chosencity.html"
});
