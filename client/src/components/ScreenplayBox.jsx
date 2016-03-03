var React = require('react');
var screenplays = require('../models/screenplay.json');

var ScreenplayDisplay = require('./ScreenplayDisplay');

var ScreenplayBox = React.createClass({

	getInitialState: function(){
		console.log('getting inital state', screenplays)
		return { screenplays:screenplays, currentScreenplay:screenplays[0]}
	},

	render:function(){
		console.log('rendering')
		return(<h4> {this.state.screenplays[0].Title} </h4>)
	}

});



module.exports = ScreenplayBox;