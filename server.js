//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var app = express(); 

global.__base = __dirname + '/';

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

var router = require("./route/api");
app.use('/',router);

var server = require("http").Server(app);


//Setting up server
server.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("Aplicacion corriendo en puerto: ", port);
 });

