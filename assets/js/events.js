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

//Help pull in the variable
var city = JSON.parse(localStorage.getItem("currentCity"));
console.log(city);

let img1El = document.querySelector("#img1")
let img2El = document.querySelector("#img2")
let img3El = document.querySelector("#img3")
let img4El = document.querySelector("#img4")
let img5El = document.querySelector("#img5")

var chicagoBtn = document.querySelector("#chicago-illinois")
var boulderBtn = document.querySelector("#boulder-colorado")
var losAngelesBtn = document.querySelector("#los-angeles-calafornia")

coloradoBtn.addEventListener('click', function(){
  let thisCIty = inputEl.value.trim()
  updateImage(thisCity)
})

function updateImage(colorado){
  img1El.setAttribute("src", "./images/colorado-musicfestival.jpg")
  img2El.setAttribute("src", "./images/boulder-fall-fest.jpg")
  img3El.setAttribute("src", "./images/bolderboulder.jpg")
  img4El.setAttribute("src", "./images/winter-craft-beer-festival.jpg")
  img5El.setAttribute("src", "./images/b-filmfestival.jpg")
}

losAngelesBtn.addEventListener('click', function(){
  let thisCIty = inputEl.value.trim()
  updateImage(thisCity)
})

function updateImage(losAngeles){
  img1El.setAttribute("src", "./images/colorado-musicfestival.jpg")
  img2El.setAttribute("src", "./images/boulder-fall-fest.jpg")
  img3El.setAttribute("src", "./images/bolderboulder.jpg")
  img4El.setAttribute("src", "./images/winter-craft-beer-festival.jpg")
  img5El.setAttribute("src", "./images/b-filmfestival.jpg")
}

boulderBtn.addEventListener('click', function(){
  let thisCIty = inputEl.value.trim()
  updateImage(thisCity)
})

function updateImage(boulder){
  img1El.setAttribute("src", "./images/colorado-musicfestival.jpg")
  img2El.setAttribute("src", "./images/boulder-fall-fest.jpg")
  img3El.setAttribute("src", "./images/bolderboulder.jpg")
  img4El.setAttribute("src", "./images/winter-craft-beer-festival.jpg")
  img5El.setAttribute("src", "./images/b-filmfestival.jpg")
}