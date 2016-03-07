var React = require('react');
var screenplays = require('../models/screenplay.js');
var ScreenplaySelect = require('./ScreenplaySelect.jsx');
var ScreenplayCreateForm = require('./ScreenplayCreateForm.jsx');
var ScreenplayDisplay = require('./ScreenplayDisplay.jsx');


var ScreenplayBox = React.createClass({

	getInitialState: function(){
		console.log('getting inital state', screenplays)
		return { screenplays:screenplays, currentScreenplay:screenplays[0]}
	},

	
	setCurrentScreenplay: function(screenplay){
		this.setState({ currentScreenplay: screenplay});
	},

	handleScreenplaySubmit: function(screenplay){
		console.log(screenplay);


	},

	render:function(){
		console.log('rendering')
		return(
			<div>
				<ScreenplaySelect onSelectScreenplay={this.setCurrentScreenplay} screenplays={this.state.screenplays}></ScreenplaySelect>
				<ScreenplayDisplay screenplay={this.state.currentScreenplay}></ScreenplayDisplay>
				<ScreenplayCreateForm onScreenplaySubmit={this.handleScreenplaySubmit}></ScreenplayCreateForm>
			</div>
		);
	},


});

module.exports = ScreenplayBox;