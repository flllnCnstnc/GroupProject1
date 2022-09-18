window.addEventListener('load', () => {
    let long;
    let lat;
    let tempDescription = document.querySelector('.temp-description');
    let tempDegree = document.querySelector ('.temp-degree');
    let loctionTimezone = document.querySelector ('.location-timezone');
    let icon = document.querySelector ('.icon');
    
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = "https://api.openweathermap.org/data/3.0/onecall?lat=41.885&lon=-87.626&units=imperial&exclude=currently,daily&appid=b1bfaa8aef920555a5427b626bedb8c9"
    
