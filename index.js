'use strict';

let config = require('./config.js');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || config.port;

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  socket.emit('welcome', {"title": "Connected", "msg": "Connected!!!"});
});
