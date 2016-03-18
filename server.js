var express = require('express');
var app = express();
var path = require('path');
var Screenplay = require('./models/screenplay');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/ag_screen_app');

var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/ag_screen_app';
moongoose.connect(mongoUri);

app.use(express.static('client/build'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.get("/screenplays", function(req, res){
	Screenplay.find(function(err, screenplays){
		if(err) console.log(err)
		//res.render('index', { screenplays: screenplays});
		res.json(screenplays);
	})
});

app.post("/screenplays", function(req, res){
	console.log('req body', req)
	//create a screenplay with the information from request body
	var newScreenplay = new Screenplay(req.body)

	//save it
	newScreenplay.save(function(){
		//when the screenplay has saved, pass back all the screenplays from db
		Screenplay.find(function(err, screenplays){
			if(err) console.log(err)
			res.json(screenplays);
		})
	})

});

app.post('/screenplays/:id/delete', function(req, res){
  //DELETE
  Screenplay.findByIdAndRemove(req.params.id, function(err) {
    if (err) console.log(err);

    console.log('Screenplay deleted!');
    Screenplay.find(function(err, screenplays) {
      if(err) console.log(err)
      res.json(screenplays);
    })
  });
});


var server = app.listen(process.env.PORT || 3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Agile Screenwriter App listening at htt://%s:%s', host, port);
});