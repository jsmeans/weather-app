function printMessage(city, temp){

	var message = 'In ' + city + ' the temperature is ' + temp + ' degrees.';
	console.log(message);
};

printMessage('OKC', 1000);
//bfb96733b03b5837c96c76cfb0556aa0

var http = require("http");

var request = http.get("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=bfb96733b03b5837c96c76cfb0556aa0", function(response){

console.log(response.statusCode);
});