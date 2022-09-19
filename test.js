var slideShows = document.getElementsByClassName("slideShow");
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
