var searchInputEl = $("#searchInput");
var dateEl = $("#date");
var nameEl = $("#cityName");
var tempEl = $("#temp");
var humidityEl = $("#humidity");
var windSpeedEl = $("#windSpeed");
var uvIndex = $("#uvIndex");

const FAHRENHEIT = "°F";

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

$("#searchBtn").click(function (e) {
  e.preventDefault();

  var location = $("#searchInput").val();
  const QUERY =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=484d77b1cc177cb84f44663aaf1730c7";

  callAPI(QUERY);
});

function callAPI(QUERY) {
  $.ajax({
    url: QUERY,
    method: "GET",
  }).then(function (res) {
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
    $("#humidity").append(humidity);
    $("#windSpeed").append(windSpeed);

    var lat = res.coord.lat;
    var lon = res.coord.lon;

    console.log(lat);
    console.log(lon);

    const QUERY2 =
      "https://api.openweathermap.org/data/2.5/uvi?appid=484d77b1cc177cb84f44663aaf1730c7&lat=" +
      lat +
      "&lon=" +
      lon;

    //!! This is a call for the UVI index
    $.ajax({
      url: QUERY2,
      method: "GET",
    }).then(function (resUVI) {
      console.log(resUVI);
      $("#uvIndex").append(resUVI.value);
    });

    var location = $("#searchInput").val();

    //!!5 day weather forecast API
    const QUERY3 =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      location +
      "&appid=484d77b1cc177cb84f44663aaf1730c7";
    //call for 5 day
    $.ajax({
      url: QUERY3,
      method: "GET",
    }).then(function (res) {
      console.log(res);
      for (i = 0; i < res.list.length; i++) {
        if (res.list[i].dt_txt.indexOf("12:00:00") !== -1) {
          var temp5 = Math.floor((res.list.main.temp - 273.15) * 1.8 + 32);
          console.log(res);
          var humidity5 = res.list.main.humidity;
          var windSpeed5 = res.list.wind.speed;
      
          $("#card-text").append(temp5 + "°F");
          $("#fiveDay").append(humidity5);
          $("#fiveDay").append(windSpeed5);
        }
      }
    });
  });
}
