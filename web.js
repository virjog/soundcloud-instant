var express = require('express');
var port = process.env.PORT || 3000;
var app = express.createServer();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
}).configure(function() {
    app.use('/scripts', express.static(__dirname + '/scripts'));
    app.use('/images', express.static(__dirname + '/images'));
    app.use('/css', express.static(__dirname + '/css'));
}).listen(port);