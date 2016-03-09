	var React = require('react');

var ScreenplayDisplay = React.createClass({

	handleDelete: function(){
	  this.props.onScreenplayDelete(this.props.screenplay._id);
	},

	render: function(){
		var screenplayDetails = this.props.screenplay || {}

		return(
			<div>
				<h1 id ="title"> {screenplayDetails.title}</h1>
				<h3 id ="by"> by </h3>
				<h4 id = "screenwriter"> {screenplayDetails.screenwriter}</h4>
				<h3> Tagline: </h3>
				<h4> {screenplayDetails.tagline} </h4>
				<h3> Logline: </h3>
				<h4 id ='Logline'> {screenplayDetails.logline} </h4>
				<button onClick={this.handleDelete}>Delete Screenplay?</button>
			</div>
		)
	}

});


module.exports = ScreenplayDisplay;