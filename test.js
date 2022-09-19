var slideShows = document.getElementsByClassName("slideShow");
var dots = document.getElementsByClassName("dot");
var slideShow1 = document.getElementById("slideShow1");
var slideShow1Timer = slideShow1.getAttribute("data-slide-time")
var slideShow2 = document.getElementById("slideShow2");
var slideShow2Timer = slideShow2.getAttribute("data-slide-time")
var slideShow3 = document.getElementById("slideShow3");
var slideShow3Timer = slideShow3.getAttribute("data-slide-time")
var slideShow4= document.getElementById("slideShow4");
var slideShow4Timer = slideShow4.getAttribute("data-slide-time")
var timer1 = setInterval(function() {
  nextSlide("slideShow1")
}, slideShow1Timer);
var timer2 = setInterval(function() {
  nextSlide("slideShow2")
}, slideShow2Timer);
var timer3 = setInterval(function() {
  nextSlide("slideShow3")
}, slideShow3Timer);
var timer4 = setInterval(function() {
    nextSlide("slideShow4")
  }, slideShow4Timer);
var slideShowsArray = ["slideShow1", "slideShow2", "slideShow3", "slideShow4"];

// Finds all elements by class name and adds an event listener to each.
function addListener(element, listenFor, functionToCall) {
  for (var i = 0; i < element.length; i++) {

    element[i].addEventListener(listenFor, functionToCall);
  }
}

function addDots() {
  for (var i = 0; i < slideShows.length; i++) {
    var slides = slideShows[i].getElementsByClassName("slide");
    for (var j = 0; j < slides.length; j++) {
      var dot = document.createElement("div");
      dot.classList.add("dot");
      dot.innerHTML = "O";
      slideShows[i].appendChild(dot);
    }
  }
}

addDots();

function nextSlide(ele) {
  var elem = document.getElementById(ele);
  var currentSlideHere = elem.getElementsByClassName("visible");
  if (currentSlideHere[0]) {
    var dots = elem.getElementsByClassName("dot");
    var slides = elem.getElementsByClassName("slide");
    var slidesArray = Array.prototype.slice.call(slides);
    var here = slidesArray.indexOf(currentSlideHere[0]);
    dots[here].style.backgroundColor = "white";
    slides[here].classList.remove("visible");
    here += 1;
    if (here >= slides.length) {
      here = 0;
    }
    slides[here].classList.add("visible");
    dots[here].style.backgroundColor = "grey";
  }
}

function changeImageDot() {
  var slides = this.parentElement.getElementsByClassName("slide");
  var dotsHere = this.parentElement.getElementsByClassName("dot");
  var dotsArray = Array.prototype.slice.call(dotsHere);
  var chosenSlide = dotsArray.indexOf(this);
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("visible");
    slides[i].classList.remove("visiblePaused");
    dotsHere[i].style.backgroundColor = "white";
  }
  this.style.backgroundColor = "grey";
  slides[chosenSlide].classList.add("visible");
}

addListener(dots, "click", changeImageDot);

addListener(slideShows, "mouseover", function() {
  var lemon = this.getElementsByClassName("visible");
  lemon[0].classList.add("visiblePaused");
  lemon[0].classList.remove("visible");
})


addListener(slideShows, "mouseleave", function() {
  var lemon = this.getElementsByClassName("visiblePaused");
  lemon[0].classList.add("visible");
  lemon[0].classList.remove("visiblePaused");
})
