var mongoose = require('mongoose');

var screenplaySchema = new mongoose.Schema({ 
		title: 'string', 
		screenwriter: 'string', 
		tagline: 'string', 
		logline: 'string'
	});


var Screenplay = mongoose.model('Screenplay', screenplaySchema);
module.exports = Screenplay;