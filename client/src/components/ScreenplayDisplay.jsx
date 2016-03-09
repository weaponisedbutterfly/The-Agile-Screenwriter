	var React = require('react');

var ScreenplayDisplay = React.createClass({

	handleDelete: function(){
	  this.props.onScreenplayDelete(this.props.screenplay._id);
	},

	render: function(){
		var screenplayDetails = this.props.screenplay || {}

		return(
			<div className = "scriptDisplay">
				<h1 className ="title"> {screenplayDetails.title}</h1>
				<h3 className ="by"> by </h3>
				<h4 className = "screenwriter"> {screenplayDetails.screenwriter}</h4>
				<h3 className ='taglineHeader'> Tagline: </h3>
				<p></p>
				<h4 className ='taglineContent'> {screenplayDetails.tagline} </h4>
				<p></p>
				<h3 className ='loglineHeader'> Logline: </h3>
				<p></p>
				<h4 className ='loglineContent'> {screenplayDetails.logline} </h4>
				<button className = "deleteButton" onClick={this.handleDelete}>Delete Screenplay?</button>
			</div>
		)
	}

});


module.exports = ScreenplayDisplay;