/**
 * HomePage JS for Travel Widget
 * Last Updated by Arielle Sept 17 2022
**/

// TODO FUTURE: Hide API key in a .env file for security
var API_KEY = '16784074-a09f6dbadf96547b9a326b052';
var a = 0;

var boulder = [];
var houston = [];
var chicago = [];
var losAngeles = [];


// Fetches pictures for each given city search term



$(document).ready(function () {
    $('.slideShow').each(function () {
        var searchTerm = this.id;
        console.log("Search images: " + searchTerm);
        fetchImages(searchTerm);
    })
});




var fetchImages = function (searchTerm) {
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchTerm) + "&per_page=5";
    var thisBlock = $('#' + searchTerm);
    $.getJSON(URL, function (data) {
        if (parseInt(data.totalHits) > 0)
            $.each(data.hits, function (i, hit) {
                var imgURL = hit.largeImageURL;
                var imgUser = hit.user
                var pageURL = hit.pageURL

                // Beautify the search Term for displaying as text in the div
                var blockTitle = searchTerm.replace('_', ' ').replace('-',', ')
                console.log(blockTitle);
                var toPascalCase = str =>
                str.replace(/\w\S*/g, m => m.charAt(0).toUpperCase()
                    + m.substr(1).toLowerCase());
                var prettyTitle = toPascalCase(blockTitle);
                console.log(prettyTitle);


                var newImg = $('<div class="slideDiv slide"><section class="cityTitle"><h2>'+ prettyTitle +'</h2></section></div>').attr('aria-label', "Photo by: " + imgUser + " " + pageURL + "").css("background-image", "url(" + imgURL + ")");
                if (i === (1 || 6 || 11 || 16)) {
                    newImg.addClass('visible');
                };
                thisBlock.append(newImg);
                a++;
                countFunction(a);
        })
    else
        console.log('No hits');
    });
};

// Ongoing counter checks to see if all slides have been pulled
// Only when they've been pulled can we start the showSlides function for the carousel
var countFunction = function(a) {
    console.log("Pulling slide: " + a);
    if (a === 20) {
        console.log("All the slides have been pulled")
        var slideShows = document.getElementsByClassName("slideShow");

        var slideShow1 = document.getElementById("boulder-colorado");
        var slideShow1Timer = slideShow1.getAttribute("data-slide-time")

        var slideShow2 = document.getElementById("houston-texas");
        var slideShow2Timer = slideShow2.getAttribute("data-slide-time")

        var slideShow3 = document.getElementById("chicago-illinois");
        var slideShow3Timer = slideShow3.getAttribute("data-slide-time")

        var slideShow4 = document.getElementById("los_angeles-california");
        var slideShow4Timer = slideShow4.getAttribute("data-slide-time")


        var timer1 = setInterval(function () {
            nextSlide("boulder-colorado")
        }, slideShow1Timer);

        var timer2 = setInterval(function() {
            nextSlide("houston-texas")
        }, slideShow2Timer);

        var timer3 = setInterval(function() {
            nextSlide("chicago-illinois")
        }, slideShow3Timer);

        var timer4 = setInterval(function() {
            nextSlide("los_angeles-california")
        }, slideShow4Timer);

        var slideShowsArray = ["boulder-colorado", "houston-texas", "chicago-illinois", "los_angeles-california"];

        // Finds all elements by class name and adds an event listener to each.
        function addListener(element, listenFor, functionToCall) {
            for (var i = 0; i < element.length; i++) {
                element[i].addEventListener(listenFor, functionToCall);
            }
        }

        function nextSlide(ele) {
            var elem = document.getElementById(ele);
            var currentSlideHere = elem.getElementsByClassName("visible");
            if (currentSlideHere[0]) {
                var slides = elem.getElementsByClassName("slide");
                var slidesArray = Array.prototype.slice.call(slides);
                var here = slidesArray.indexOf(currentSlideHere[0]);
                slides[here].classList.remove("visible");
                here += 1;
                if (here >= slides.length) {
                    here = 0;
                }
                slides[here].classList.add("visible");
            }
        }
    }
}


// When any of the cityBlock divs are clicked
// The city becomes set to the id of the div
$(".slideShow").on('click', function (event) {
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

    // Post object to local storage and load the chosencity.html content
    localStorage.setItem("currentCity", JSON.stringify(currentCity));
    event.preventDefault();
    location.href = "chosencity.html"
});
