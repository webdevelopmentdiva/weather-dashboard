$(document).ready(function () {});

//localStorage the previous cities
let previousCities = [];
// localStorage.setItem("previousCities");
// document.getElementById("result").innerHTML = localStorage.getItem(
//   "previousCities"
// );

//run the API call to weathermap API
function getWeather(location) {
  const QUERY =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=484d77b1cc177cb84f44663aaf1730c7";
  //Api is going to give us a object you need toJSON.parse
  //Need to use the GET method through AJAX call
  $.ajax({
    url: QUERY,
    method: "GET",
  }).then(function (result) {
    console.log(result);
    $("#cityName").text("City Name: " + result.name + "");
    $("#mainWeather").text("Sky: " + result.weather[0].description + "");
    //not working
    $("#temp").text("Temp: " + result.main.temp + "");
    $("#humidity").text("Humidity: " + result.main.humidity + "");
    $("#wind").text("Wind: " + result.wind.speed + "");
  });
}
$("#searchBtn").click(function (e) {
  e.preventDefault();

  let location = $("#searchInput").val().trim();
  console.log(location);

  getWeather(location);
});

/*
Corrado notes
function (previousCities, result);
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
/*
Create buttons to the left that results save to
5 day weather forecast 
*/
