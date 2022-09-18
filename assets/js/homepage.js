/**
 * HomePage JS for Travel Widget
 * Last Updated by Arielle Sept 17 2022
**/


var API_KEY = '16784074-a09f6dbadf96547b9a326b052';
var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('Boulder Colorado');

$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
else
    console.log('No hits');
});
