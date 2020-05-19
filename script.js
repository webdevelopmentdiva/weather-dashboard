$(document).ready(function() {
    alert("Hello Skye!");
});

let previousCities = []

Let apiKey = “484d77b1cc177cb84f44663aaf1730c7”

//localStorage the previous cities
//run the API call to weathermap API
//Api is going to give us a object you need toJSON.parse
//Need to use the GET method through AJAX call
$.ajax({
    url: apiKey,
    method: “GET”,
    )}.then (function (result) {
        Console.log(result)
        
        Function~name~(previousCities, result);
        localStorage.setItem(cities, 
            JSON.stringify(previousCities);
            function~name~(result);
            
            let temp = result.temperature
            function showTemperature(temp) {
                if ( temp > 80) {
                    console.log(“oh my god I am melting”);
                } else {
                    Console.log(“way too cold, I need to go to Mesa”);}