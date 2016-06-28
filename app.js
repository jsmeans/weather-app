//bfb96733b03b5837c96c76cfb0556aa0

var router = require("./router.js");

var http = require('http');
http.createServer(function(request, response){

	router.homeRoute(request,response);
	router.userRoute(request,response);

}).listen(8080, '127.0.0.1');

console.log('Server running at localhost:8080');

/**
* When the JSON body is fully recieved the 
* the "end" event is triggered and the full body
* is given to the handler or callback
**/
//cityProfile.on("end", console.dir);

/**
* If a parsing, network or HTTP error occurs an
* error object is passed in to the handler or callback
**/
//clear
