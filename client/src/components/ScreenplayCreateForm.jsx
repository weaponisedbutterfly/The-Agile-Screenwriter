var React = require('react');
var ScreenplayCreateForm = React.createClass({

	getInitialState: function(){
		return { title: '', screenwriter: '', tagline: '', logline: '' };
	},
	handleTitleChange: function(e) {
		this.setState({title: e.target.value});
	},
	handleScreenwriterChange: function(e) {
		this.setState({screenwriter: e.target.value});
	},
	handleTaglineChange: function(e) {
		this.setState({tagline: e.target.value});
	},
	handleLoglineChange: function(e) {
		this.setState({logline: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var title = this.state.title.trim();
		var screenwriter = this.state.screenwriter.trim();
		var tagline = this.state.tagline.trim();
		var logline = this.state.logline.trim();
		if (!title || !screenwriter || !tagline || !logline) {
			return;
		}
		this.props.onScreenplaySubmit({title: title, screenwriter: screenwriter, tagline: tagline, logline: logline});
		this.setState({title: '', screenwriter: '', tagline: '', logline: ''});
	},
	render: function() {
		return (
			<div>
			<h3 id="startNew"> Start New Script </h3>
			<form className="screenplayCreateForm" onSubmit={this.handleSubmit}>
			<ul class="formList">
				<li>
				<label className = "inputLabel">Title:</label>
				<input
				type="text"
				className = "scriptInput"
				size="110"
				placeholder="Don’t worry if it’s not right you will likely change it later. Ideally it will immediately give you a feel for the movie. e.g. Alien"
				value={this.state.title}
				onChange={this.handleTitleChange}
				/></li>
				<li>
				<label className = "inputLabel">Screenwriter:</label>
				<input
				type="text"
				className = "scriptInput"
				size="110"
				placeholder="Your Name. Come on be confident. Don't hide your light under a bushel."
				value={this.state.screenwriter}
				onChange={this.handleScreenwriterChange}
				/></li>
				<li>
				<label className= "inputLabel">Tagline:</label>
				<input
				type="text"
				className = "scriptInput"
				size="110"
				placeholder="What would the line on the poster be?  e.g. “In Space No One Can Hear You Scream”."
				value={this.state.tagline}
				onChange={this.handleTaglineChange}
				/></li>
				<li>
				<label className= "inputLabel">Logline:</label>
				<input
				type="text"
				className = "scriptInput"
				size="110"
				placeholder="What happens in your story in one short paragraph or 25 words or less. "
				value={this.state.logline}
				onChange={this.handleLoglineChange}
				/></li>
			<input className = "inputButton"type="submit" value="Create" />
			</ul>
			</form>
			</div>
		);
	}
});

module.exports = ScreenplayCreateForm; 
