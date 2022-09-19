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
var cityStr = localStorage.getItem('currentCity')
//var cityObj = JSON.parse(cityStr)
var cityObj = 'houston'



let imgEl = document.querySelector("img");

function updateImageBoulder() {
  imgEl[0].setAttribute("src", "./assets/images/colorado-musicfestival.jpg");
  imgEl[1].setAttribute("src", "./assets/images/boulder-fall-fest.jpg");
  imgEl[2].setAttribute("src", "./assets/images/bolderboulder.jpg");
  imgEl[3].setAttribute("src", "./assets/images/winter-craft-beer-festival.jpg");
  imgEl[4].setAttribute("src", "./assets/images/b-filmfestival.jpg");
}

function updateImageLA() {
  imgEl[0].setAttribute("src", "./assets/images/la-film-festival.jpg");
  imgEl[1].setAttribute("src", "./assets/images/la-grammy.jpg");
  imgEl[2].setAttribute("src", "./assets/images/la-emmys.jpg");
  imgEl[3].setAttribute("src", "./assets/images/la-hollywood-bowl.jpg");
  imgEl[4].setAttribute("src", "./assets/images/la-broadway.jpg");
}

function updateImageChicago() {
  imgEl[0].setAttribute("src", "./assets/images/taste-of-chicago.jpg");
  imgEl[1].setAttribute("src", "./assets/images/Lollapalooza-Chicago.jpg");
  imgEl[2].setAttribute("src", "./assets/images/chicago-boat-show.jpg");
  imgEl[3].setAttribute("src", "./assets/images/Air&WaterShow.jpg");
  imgEl[4].setAttribute("src", "./assets/images/chicago-marathon.jpg");
}

function updateImageHouston() {
  imgEl[0].setAttribute("src", "./assets/images/houston-rodeo.jpg")
  imgEl[1].setAttribute("src", "./assets/images/miller-theater.jpg")
  imgEl[2].setAttribute("src", "./assets/images/h-art-festival.jpg")
  imgEl[3].setAttribute("src", "./assets/images/comic-cosplay.jpg")
  imgEl[4].setAttribute("src", "./assets/images/art-car.jpg")
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