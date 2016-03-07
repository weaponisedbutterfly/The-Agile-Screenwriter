var React = require('react');
var ReactDOM = require('react-dom');
var ScreenplayBox = require('./components/ScreenplayBox.jsx');

window.onload = function(){
	ReactDOM.render(
		<ScreenplayBox> </ScreenplayBox>,
		document.getElementById('app')
		);
};