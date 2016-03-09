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
		var url = "http://localhost:3000/screenplays"
		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.onload = function(){
			var data = JSON.parse(request.responseText);
			this.setState( {screenplays: data, currentScreenplay: data[0]})
		}.bind(this)
		request.send(null);
	},

	handleScreenplaySubmit: function(screenplay) {
		console.log('screenplay', screenplay)
		screenplay.id = Date.now();

		//updating front end - optimistic update
		var oldScreenplays = this.state.screenplays;
		var newScreenplays = oldScreenplays.concat( [screenplay] );
		this.setState({screenplays: newScreenplays});

		//updating data in database
		var url = "http://localhost:3000/screenplays"
		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader("Content-Type", "application/json");

		//updating once have database information
		request.onload = function(){
			if(request.status === 200){
				var receivedScreenplays = JSON.parse(request.responseText);
				this.setState({screenplays: receivedScreenplays});
			}
		}.bind(this);

		request.send(JSON.stringify(screenplay));
	},

		handleScreenplayDelete: function(id){
			//delete data from database
		var url = "http://localhost:3000/screenplays/" + id + "/delete"
		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader("Content-Type", "application/json");

		//updating once have database information
		request.onload = function(){
			if(request.status === 200){
				var receivedScreenplays = JSON.parse(request.responseText);
				this.setState({screenplays: receivedScreenplays, currentScreenplay: receivedScreenplays[0]});
			}
		}.bind(this);

		request.send(null);
		},

	render:function(){
		console.log('rendering')
		return(
			<div>
				<ScreenplaySelect onSelectScreenplay={this.setCurrentScreenplay} screenplays={this.state.screenplays}></ScreenplaySelect>
				<ScreenplayDisplay screenplay={this.state.currentScreenplay} onScreenplayDelete={this.handleScreenplayDelete}></ScreenplayDisplay>
				<ScreenplayCreateForm onScreenplaySubmit={this.handleScreenplaySubmit}></ScreenplayCreateForm>
			</div>
		);
	},
 

});

module.exports = ScreenplayBox;