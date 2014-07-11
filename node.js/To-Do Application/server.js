//set up:

var express = require('express');
var app = express();
var mongoose = require('mongoose');


//config
//connect to mongo db database
mongoose.connect('mongodb://optimus:swordfish@mongo.onmodulus.net:27017/uro9vaMe')

app.configure(function(){
	app.use(express.static(__dirname)+'/public')
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});

app.listen(8080);
console.log("App listening to port 8080");
