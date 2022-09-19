

var currentCity = JSON.parse(localStorage.getItem("currentCity"));
var city = currentCity.city;


console.log(city);
var cityTitle = $('#cityTitle').text("Welcome to " + city);
