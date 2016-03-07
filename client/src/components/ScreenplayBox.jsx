var React = require('react');
var screenplays = require('../models/screenplay.js');
var ScreenplaySelect = require('./ScreenplaySelect.jsx');
var ScreenplayDisplay = require('./ScreenplayDisplay.jsx');

// var ScreenplayDisplay = require('./ScreenplayDisplay');

var ScreenplayBox = React.createClass({

	getInitialState: function(){
		console.log('getting inital state', screenplays)
		return { screenplays:screenplays, currentScreenplay:screenplays[0]}
	},

// 	componentDidMount: function(screenplay){
//     	this.setState( { screenplays: screenplays, currentScreenplay: screenplays[0].title })
//     },
	
	setCurrentScreenplay: function(screenplay){
		this.setState({ currentScreenplay: screenplay});
	},

	render:function(){
		console.log('rendering')
		return(
			<div>
				<ScreenplaySelect onSelectScreenplay={this.setCurrentScreenplay} screenplays={this.state.screenplays}></ScreenplaySelect>
				<ScreenplayDisplay screenplay={this.state.currentScreenplay}></ScreenplayDisplay>
			</div>
		);
	},
});

module.exports = ScreenplayBox;