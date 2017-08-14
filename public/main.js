var then = Date.now();
var socket = io();

socket.on('welcome', function(data){
    var now = Date.now();
    var timeDif = now - then;
    console.log(timeDif);
    $('span#welcomeMSG').removeClass('disconnected');
    $('span#welcomeMSG').addClass('connected');
    $('title').text(data.title);
    $('span#welcomeMSG').text(data.msg);
    $('div#holder').append('<br>');
    $('div#holder').append('<span>It took '+timeDif+' miliseconds to connect</span>');
});
