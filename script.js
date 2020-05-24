var searchInputEl = $("#searchInput");
var dateEl = $("#date");
var nameEl = $("#cityName");
var tempEl = $("#temp");
var humidityEl = $("#humidity");
var windSpeedEl = $("#windSpeed");
var uvIndex = $("#uvIndex");

/*
var storedSearches = JSON.parse(localStorage.GetItem("cityArr"));
if(storedSearches === null) {
    storedSearches = [];
}

var newSearchEl;

for (let i = storedSearches.length -1; i > 0; i--) {
    newSearchEl = $("<h2>");
    newSearchEl.addClass("newSearch");
    newSearchEl.text(storedSearches[i]);
    recentSearch.append(newSearchEl)
}
*/


$("#searchBtn").click(function(e) {
    e.preventDefault();

    var location = $("#searchInput").val();

    const QUERY = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=484d77b1cc177cb84f44663aaf1730c7";

    callAPI(QUERY)
})


function callAPI(QUERY) {
    $.ajax({
        url:QUERY,
        method: "GET"
    }).then(function(res) {
        console.log(res);
        $("#cityName").append(res.name);
        //var currentDate = moment(res.city.list[0].dt).format('MMMM/DD/YYYY');
        //$("#date").append(currentDate);


        //!!This is the call for the weather icon

        var icon =
        "https://openweathermap.org/img/w/" + res.weather[0].icon + ".png";
        $("#weatherIcon").attr("src", icon);
        var temp = Math.floor((res.main.temp - 273.15) * 1.8 + 32);
        console.log(res);
        var humidity = res.main.humidity;
        var windSpeed = res.wind.speed;

        $("#temp").append(temp + "°F");
        $("#humidity").append(humidity + "%");
        $("#windSpeed").append(windSpeed + "MPH");

        var lat = res.coord.lat;
        var lon = res.coord.lon;

        console.log(lat);
        console.log(lon);

        const QUERY2 = "https://api.openweathermap.org/data/2.5/uvi?appid=484d77b1cc177cb84f44663aaf1730c7&lat=" + lat + "&lon=" + lon;
        
        //!! This is a call for the UVI index
        $.ajax({
            url: QUERY2,
            method: "GET"
        }).then(function(resUVI) {
            console.log(resUVI);
            $("#uvIndex").append(resUVI.value);
        })
        


    })

}































/*
let previousCities = [];


//localStorage the previous cities
//run the API call to weathermap API
//Api is going to give us a object you need toJSON.parse
//Need to use the GET method through AJAX call


function getWeather(location) {

    const QUERY = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=484d77b1cc177cb84f44663aaf1730c7";

    $.ajax({
            url: QUERY,
            method: "GET"
        })
        .then(function (result) {
            console.log(result);
            //console.log(result.main.humidity);
            $("#cityName").append("<h2> City Name: " + result.name + "</h2>");
            $("#mainWeather").append("<h3> Sky: " + result.weather[0].main + "</h3>");
            $("#date").append("<h4> Date: " + result.timezone + "</h4>");
            // $("#temp").append("<h5> Temp: " + result.weather[0].main + "</h5>");
            $("#humidity").append("<h6> Humidity: " + result.main.humidity + "</h6>");
        })
}
$("#searchbtn").click(function (e) {
    e.preventDefault();

    let location = $("#searchinput").val().trim();
    console.log(location);

    getWeather(location)
})


Function~name~(previousCities, result);
localStorage.setItem(cities,
        JSON.stringify(previousCities);

        function ~name~(result);

        let temp = result.temperature

        function showTemperature(temp) {
            if (temp > 80) {
                console.log(“oh my god I am melting”);
            } else {
                Console.log(“way too cold, I need to go to Mesa”);
            }
*/