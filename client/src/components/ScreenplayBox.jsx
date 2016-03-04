var React = require('react');
var screenplays = require('../models/screenplay.json');
var ScreenplaySelect = require('./ScreenplaySelect.jsx');
var ScreenplayDisplay = require('./ScreenplayDisplay.jsx');

// var ScreenplayDisplay = require('./ScreenplayDisplay');

var ScreenplayBox = React.createClass({

	getInitialState: function(){
		console.log('getting inital state', screenplays)
		return { screenplays:screenplays, currentScreenplay:screenplays[0]}
	},

	setCurrentScreenplay: function(){
		this.setState({currentScreenplay: screenplay});
	},
	

	render:function(){
		console.log('rendering')
		return(
			<div>
			<ScreenplaySelect onSelectScreenplay={this.setCurrentScreenplay} screenplays={this.state.screenplays}></ScreenplaySelect>
			<ScreenplayDisplay screenplay={this.state.currentScreenplay}></ScreenplayDisplay>
			</div>);

	}



});



module.exports = ScreenplayBox;