var React = require('react');

var ScreenplaySelect = React.createClass({

	getInitialState: function(){
		return { selectedIndex: null };
	},

	handleChange:function(e){
		e.preventDefault();
		var newIndex = e.target.value;
		this.setState({selectedIndex: newIndex});
		var currentScreenplay = this.props.screenplays[newIndex];
		this.props.onSelectScreenplay( currentScreenplay );
	},

	render: function(){

		var options = this.props.screenplays.map(function(screenplay, index ){
			return <option value={index} key={index}> { screenplay.name } </option>

		});

		return(
			<div> 
				<select value= {this.state.selectedIndex} onChange={this.handleChange}>
				{options}
				</select>
			</div>

		)

	}


});

module.exports = ScreenplaySelect;