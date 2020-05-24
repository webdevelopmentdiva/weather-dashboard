let previousCities = [];


//localStorage the previous cities
//run the API call to weathermap API
//Api is going to give us a object you need toJSON.parse
//Need to use the GET method through AJAX call


function getWeather(location) {

    const QUERY = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=484d77b1cc177cb84f44663aaf1730c7";

    $.ajax({
            url: QUERY,
            method: "GET"
        })
        .then(function (result) {
            console.log(result);
            console.log(result.main.humidity);
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

/*

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