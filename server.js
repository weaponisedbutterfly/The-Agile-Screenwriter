var express = require('express');
var app = express();
var path = require('path');
var Screenplay = require('./models/screenplay');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ag_screen_app');

app.use(express.static('client/build'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.get("/api", function(req, res){
	Screenplay.find(function(err, screenplays){
		if(err) console.log(err)
		//res.render('index', { screenplays: screenplays});
		res.json(screenplays);
	})
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Agile Screenwriter App listening at htt://%s:%s', host, port);
});