var cityWeather = require("./weather.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var commonHeaders = {'Content-Type': 'text/html'};


function homeRoute(request, response){
	
	if(request.url === "/"){
		if(request.method.toLowerCase() === "get"){
			response.writeHead(200, commonHeaders);
			renderer.view("header", {}, response);
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
			response.end();
		} else{
			request.on("data", function(postBody){
				var query = querystring.parse(postBody.toString());
				response.writeHead(303, {"Location": "/" + query.cityName});
				response.end();
			});
		}
	}
}

function userRoute(request,response){

	var city = request.url.replace("/", "");

	if (city.length > 0){
		response.writeHead(200, commonHeaders);
		renderer.view("header", {}, response);

		var cityProfile = new cityWeather(city);

		cityProfile.on("end", function(weatherData){

			var values = {
				WeatherIcon:weatherData.weather[0].icon,
				cityName:weatherData.name,
				temperature: weatherData.main.temp,
				humidity:weatherData.main.humidity,
			}
				//simple response

		renderer.view("profile", values, response);
		renderer.view("footer", {}, response);
		response.end();
		});

		cityProfile.on("error", function(error){
		renderer.view("error", {errorMessage:error.message}, response);
		renderer.view("search", {}, response);
		renderer.view("footer", {}, response);
		response.end();
		});
	}
}

module.exports.homeRoute = homeRoute;
module.exports.userRoute = userRoute;