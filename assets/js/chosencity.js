
let searchbtn= document. querySelector ("#btn")
searchbtn.addEventListener('click', () => {
    
    let tempDescription = document.querySelector('.temp-description');
    let tempDegree = document.querySelector ('.temp-degree');
    let loctionTimezone = document.querySelector ('.location-timezone');
    let icon = document.querySelector ('.icon');
    let chosenCity = document.querySelector ('#city')


            const api = "https://api.openweathermap.org/data/2.5/weather?q="+ chosenCity.value + "&units=imperial&exclude=currently,daily&appid=b1bfaa8aef920555a5427b626bedb8c9"
            fetch (api)
            .then (response => {
                return response.json();
             })
             
             .then (data => {
                console.log (data);
                const temp = data.main.temp;


            //set some elements from the api
            var iconImg = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            tempDegree.textContent= temp;
            icon.setAttribute("src", iconImg)
            tempDescription.textContent= data.weather[0].main
            loctionTimezone.textContent= data.name;
        });

    });

    var city = JSON.parse(localStorage.getItem("currentCity"));
console.log(city);


    
