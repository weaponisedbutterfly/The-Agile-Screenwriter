var React = require('react');

var ScreenplayDisplay = React.createClass({

	render: function(){
		var screenplayDetails = this.props.screenplay || {}

		return(
			<div>
				<h2> Title: </h2>
				<h4> {screenplayDetails.Title}</h4>
				<h2> Tagline: </h2>
				<h4> {screenplayDetails.Tagline} </h4>
				<h2> Logline: </h2>
				<h4 id ='Logline'> {screenplayDetails.Logline} </h4>
			</div>
		)
	}
});


module.exports = ScreenplayDisplay;