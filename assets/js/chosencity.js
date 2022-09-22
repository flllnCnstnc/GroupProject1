
/**
 * Travel Site JS
 */


/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START Arielle
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// Retrieve current city from local storage
var currentCity = JSON.parse(localStorage.getItem("currentCity"));
var city = currentCity.city;
console.log(city);
// Set as title of page in header
$(document).prop('title', 'Welcome to '+ city);
// Set as visible h1 text
var cityTitle = $('#cityTitle').text("Welcome to " + city);

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * END Arielle
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */


/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START Constance
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
// I moved the variables to the top to avoid conflict
var imgEl = document.querySelectorAll("img");
var siteEl = document.querySelectorAll("a");
var textEl = document.querySelectorAll("p");

// Indicates what slide the carosel starts on
let slideIndex = 1;
showSlides(slideIndex);

// Next controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/**
 * City variable defined from line 15 (Arielle)
 */
var selectCity = function() {
  if(city === "Houston") {
    updateHouston();
  }
  else if(city === "Los Angeles") {
    updateLosAngeles();
  }
  else if(city === "Boulder") {
    updateBoulder();
  }
  else if(city === "Chicago") {
    updateChicago();
  }
}


//Calling the selectCity function to work
selectCity()

function updateBoulder() {
  imgEl[0].setAttribute("src", "./assets/images/colorado-musicfestival.jpg");
  imgEl[1].setAttribute("src", "./assets/images/boulder-fall-fest.jpg");
  imgEl[2].setAttribute("src", "./assets/images/bolderboulder.jpg");
  imgEl[3].setAttribute("src", "./assets/images/winter-craft-beer-festival.jpg");
  imgEl[4].setAttribute("src", "./assets/images/b-filmfestival.jpg");
  siteEl[0].setAttribute("href", "https://coloradomusicfestival.org/")
  siteEl[1].setAttribute("href", "https://boulderdowntown.com/fall-fest")
  siteEl[2].setAttribute("href", "https://www.bolderboulder.com/")
  siteEl[3].setAttribute("href", "https://www.wintercraftbeerfestival.com/")
  siteEl[4].setAttribute("href", "https://biff1.com/")
  textEl[0].setAttribute("p", "Colorado Music Festival")
  textEl[1].setAttribute("p", "Downtown Boulder Fall Fest")
  textEl[2].setAttribute("p", "Bolder Boulder 10k Road Race")
  textEl[3].setAttribute("p", "Winter Craft Beer Festival")
  textEl[4].setAttribute("p", "Boulder International Film Festival")
}

function updateLosAngeles() {
  imgEl[0].setAttribute("src", "./assets/images/la-film-festival.jpg");
  imgEl[1].setAttribute("src", "./assets/images/la-grammy.jpg");
  imgEl[2].setAttribute("src", "./assets/images/la-emmys.jpg");
  imgEl[3].setAttribute("src", "./assets/images/la-hollywood-bowl.jpg");
  imgEl[4].setAttribute("src", "./assets/images/la-broadway.jpg");
  siteEl[0].setAttribute("href", "https://www.filmindependent.org/la-film-festival/")
  siteEl[1].setAttribute("href", "https://www.grammy.com/")
  siteEl[2].setAttribute("href", "https://www.discoverlosangeles.com/event/2022/09/12/primetime-emmy-awards")
  siteEl[3].setAttribute("href", "https://www.hollywoodbowl.com/")
  siteEl[4].setAttribute("href", "https://www.broadwayinhollywood.com/venues/detail/pantagestheatre")
  textEl[0].setAttribute("p", "LA Film Festival")
  textEl[1].setAttribute("p", "The Grammys")
  textEl[2].setAttribute("p", "The Emmys")
  textEl[3].setAttribute("p", "Hollywood Bowl")
  textEl[4].setAttribute("p", "Broadway")
}

function updateChicago() {
  imgEl[0].setAttribute("src", "./assets/images/taste-of-chicago.jpg");
  imgEl[1].setAttribute("src", "./assets/images/Lollapalooza-Chicago.jpg");
  imgEl[2].setAttribute("src", "./assets/images/chicago-boat-show.jpg");
  imgEl[3].setAttribute("src", "./assets/images/Air&WaterShow.jpg");
  imgEl[4].setAttribute("src", "./assets/images/chicago-marathon.jpg");
  siteEl[0].setAttribute("href", "https://www.chicago.gov/city/en/depts/dca/supp")
  siteEl[1].setAttribute("href", "https://www.lollapalooza.com/")
  siteEl[2].setAttribute("href", "https://www.chicagoboatshow.com/")
  siteEl[3].setAttribute("href", "https://www.chicago.gov/city/en/depts/dca/supp")
  siteEl[4].setAttribute("href", "https://www.chicagomarathon.com/")
  textEl[0].setAttribute("p", "Taste of Chicago")
  textEl[1].setAttribute("p", "Lollapalooza")
  textEl[2].setAttribute("p", "Chicago Boat Show")
  textEl[3].setAttribute("p", "Chicago Air and Water Show")
  textEl[4].setAttribute("p", "Chicago Marathon")
}

function updateHouston() {
  imgEl[0].setAttribute("src", "./assets/images/houston-rodeo.jpg")
  imgEl[1].setAttribute("src", "./assets/images/miller-theater.jpg")
  imgEl[2].setAttribute("src", "./assets/images/h-art-festival.jpg")
  imgEl[3].setAttribute("src", "./assets/images/comic-cosplay.jpg")
  imgEl[4].setAttribute("src", "./assets/images/art-car.jpg")
  siteEl[0].setAttribute("href", "https://www.rodeohouston.com/")
  siteEl[1].setAttribute("href", "https://www.milleroutdoortheatre.com/")
  siteEl[2].setAttribute("href", "https://www.artcolonyassociation.org/")
  siteEl[3].setAttribute("href", "https://www.comicpalooza.com/")
  siteEl[4].setAttribute("href", "https://www.thehoustonartcarparade.com/")
  textEl[0].setAttribute("p", "Houston Livestock Show and Rodeo")
  textEl[1].setAttribute("p", "Miller Outdoor Theater")
  textEl[2].setAttribute("p", "Bayou City Art Festival")
  textEl[3].setAttribute("p", "Comicpalooza")
  textEl[4].setAttribute("p", "The Houston Art Car Parade")
}

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * END Constance
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START Abdul
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// calling for the value from the local storage
localStorage.getItem(city)


     let tempDescription = document.querySelector('.temp-description');
   
     let icon = document.querySelector ('.icon');
  
            
     const api = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial&exclude=currently,daily&appid=b1bfaa8aef920555a5427b626bedb8c9"
             fetch (api)
             .then (response => {
                 return response.json();
              })

              .then (data => {
                 console.log (data);
            
                 //set some elements from the api
             var iconImg = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
             document.querySelector('.temp-degree').innerText = data.main.temp + "° F";
             icon.setAttribute("src", iconImg)
             tempDescription.textContent= data.weather[0].main
            
             document.querySelector('.city-weather').innerText= data.name;
             document.querySelector(".hi-temp").innerText =  data.main.temp_max +'°' ;
             document.querySelector(".low-temp").innerText =  data.main.temp_min +'°' ;


            

         });

     

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * END Abdul
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
