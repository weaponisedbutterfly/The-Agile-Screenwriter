var React = require('react');
var ScreenplaySelect = require('./ScreenplaySelect.jsx');
var ScreenplayCreateForm = require('./ScreenplayCreateForm.jsx');
var ScreenplayDisplay = require('./ScreenplayDisplay.jsx');


var ScreenplayBox = React.createClass({

	getInitialState: function(){
		return { screenplays:[], currentScreenplay:{}}
	},

	setCurrentScreenplay: function(screenplay){
		this.setState({ currentScreenplay: screenplay});
	},

	componentDidMount:function(){
		var url = "http://localhost:3000/api"
		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.onload = function(){
			var data = JSON.parse(request.responseText);
			this.setState( {screenplays: data, currentScreenplay: data[0]})
		}.bind(this)
		request.send(null);
	},

	// handleScreenplaySubmit: function(screenplay){
	// 	console.log(screenplay);
	// },

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