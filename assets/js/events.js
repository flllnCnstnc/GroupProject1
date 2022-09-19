// Indicates what slide the carosel starts on
let slideIndex = 0;
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
var cityStr = localStorage.getItem('currentCity')
//var cityObj = JSON.parse(cityStr)
var cityObj = 'houston'

let img1El = document.querySelector("#img1");
let img2El = document.querySelector("#img2");
let img3El = document.querySelector("#img3");
let img4El = document.querySelector("#img4");
let img5El = document.querySelector("#img5");



function updateImageBoulder() {
  img1El.setAttribute("src", "./assets/images/colorado-musicfestival.jpg");
  img2El.setAttribute("src", "./assets/images/boulder-fall-fest.jpg");
  img3El.setAttribute("src", "./assets/images/bolderboulder.jpg");
  img4El.setAttribute("src", "./assets/images/winter-craft-beer-festival.jpg");
  img5El.setAttribute("src", "./assets/images/b-filmfestival.jpg");
}

function updateImageLA() {
  img1El.setAttribute("src", "./assets/images/la-film-festival.jpg");
  img2El.setAttribute("src", "./assets/images/la-grammy.jpg");
  img3El.setAttribute("src", "./assets/images/la-emmys.jpg");
  img4El.setAttribute("src", "./assets/images/la-hollywood-bowl.jpg");
  img5El.setAttribute("src", "./assets/images/la-broadway.jpg");
}

function updateImageChicago() {
  img1El.setAttribute("src", "./assets/images/taste-of-chicago.jpg");
  img2El.setAttribute("src", "./assets/images/Lollapalooza-Chicago.jpg");
  img3El.setAttribute("src", "./assets/images/chicago-boat-show.jpg");
  img4El.setAttribute("src", "./assets/images/Air&WaterShow.jpg");
  img5El.setAttribute("src", "./assets/images/chicago-marathon.jpg");
}

function updateImageHouston() {
  img1El.setAttribute[("src", "./assets/images/houston-rodeo.jpg")]
  img2El.setAttribute("src", "./assets/images/miller-theater.jpg")
  img3El.setAttribute("src", "./assets/images/h-art-festival.jpg")
  img4El.setAttribute("src", "./assets/images/comic-cosplay.jpg")
  img5El.setAttribute("src", "./assets/images/art-car.jpg")
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