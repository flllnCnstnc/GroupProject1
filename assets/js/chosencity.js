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
    