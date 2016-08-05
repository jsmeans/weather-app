//bfb96733b03b5837c96c76cfb0556aa0

var router = require("./router.js");

var http = require('http');
http.createServer(function(request, response){

	router.homeRoute(request,response);
	router.userRoute(request,response);

}).listen(8080, '127.0.0.1');

console.log('Server running at localhost:8080');

