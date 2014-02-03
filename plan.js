'use strict';

var defaults = {
	home: 'http://velocityzen.github.io/strokes',
	title: 'Strokes',
	templates: './templates',
	src: './',
	dst: './'
};

var dome = {
	"/": {
		template: "index.html",
		title: "Simple SVG animation component for handdraw like effect.",
		content: "./README.md"
	}
};


module.exports = {
	defaults: defaults,

	"static": {
		tools: {
			dome: {tasks: dome}
		}
	}
};
