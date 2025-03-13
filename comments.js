// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

// Create server
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    // Check if file exists
    var filepath = path.join