//bfb96733b03b5837c96c76cfb0556aa0

var http = require("http");

var city = 'boulder';

var zipCode = '73112';

var cityCode = '';


function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = hour + ':' + min;
  return time;
}

function printWeatherData(city, temp, humidity){

	var message = '\n\nIn ' + city + ' the temperature is ' + temp + ' degrees \nand the humidity is '+  humidity +'%.\n\n';
	console.log(message);
}

function CityData(city, cityId, cityLon, cityLat, country, sunrise, sunset){

	var cityInfo = 'City: ' + city + '\nCity ID: ' + cityId + '\nLongitude: ' + cityLon + '\nLatitude: ' 
	+ cityLat + '\nCountry: ' + country + '\nSunrise: '+  sunrise +'\nSunset: ' + sunset +'\n\n';
	console.log(cityInfo);
}



//Connect to the API

var request = http.get("http://api.openweathermap.org/data/2.5/weather?zip="+ city +"&units=imperial&APPID=bfb96733b03b5837c96c76cfb0556aa0", function(response){

console.log(response.statusCode);

var body = "";

//Read the data

response.on('data', function (chunk) {
    body += chunk;
  });

response.on('end', function(){
	var weatherData = JSON.parse(body);
	printWeatherData(weatherData.name, weatherData.main.temp, weatherData.main.humidity);
	CityData(weatherData.name, weatherData.id, weatherData.coord.lon, weatherData.coord.lat, 
		 weatherData.sys.country, timeConverter(weatherData.sys.sunrise), timeConverter(weatherData.sys.sunset));
	console.dir(weatherData);
});

});



request.on("error", function(e){

console.error(e.message);

});