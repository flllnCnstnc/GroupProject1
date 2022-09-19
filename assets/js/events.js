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

//Help pull in the city variable
var cityStr = localStorage.getItem('currentCity');
//var cityObj = JSON.parse(cityStr)
var cityObj = '.houston';



var imgEl = document.querySelectorAll("img");
var siteEl = document.querySelectorAll("a");

function updateToBoulder() {
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
}

function updateToLA() {
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
}

function updateToChicago() {
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
}

function updateToHouston() {
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
}

function chooseCity() {
  if(cityObj === "houston") {
    updateImageHouston();
  }
  if(cityObj === "los-angeles") {
    updateImageLosAngeles();
  }
  if(cityObj === "boulder") {
    updateImageBoulder();
  }
  if(cityObj === "chicago") {
    updateImageChicago();
  }
}