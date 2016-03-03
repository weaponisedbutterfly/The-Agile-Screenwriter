var React = require('react');
var screenplays = require('../models/screenplay.json');

// var ScreenplayDisplay = require('./ScreenplayDisplay');

var ScreenplayBox = React.createClass({

	getInitialState: function(){
		console.log('getting inital state', screenplays)
		return { screenplays:screenplays, currentScreenplay:screenplays[0]}
	},

	render:function(){
		console.log('rendering')
		return(
			<div>
				<h2> Title: </h2>
				<h4> {this.state.screenplays[0].Title}</h4>
				<h2> Tagline: </h2>
				<h4> {this.state.screenplays[0].Tagline} </h4>
				<h2> Logline: </h2>
				<h4 id ='Logline'> {this.state.screenplays[0].Logline} </h4>
			</div>);

	}

});



module.exports = ScreenplayBox;