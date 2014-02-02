/*jshint browser:true*/
'use strict';

(function (window, document, undefined) {

var namespace = 'http://www.w3.org/2000/svg',
	transition = (function() {
		var i, style = document.body.style,
			transitions = ["WebkitTransition", "MozTransition", "msTransition", "transition"];

        for (i in transitions) {
            if (style[transitions[i]] !== undefined) {
                return transitions[i];
            }
        }
	})();

var Strokes = function(els, vectors, options) {
	var self = this;

	self.drawTime = options.drawTime || 1000;
	self.changeTime = options.changeTime;
	self.changeDelay = self.drawTime + (options.changeDelay || 0);
	self.transition = options.transition || "stroke-dashoffset "+ self.drawTime +"ms ease-in-out";
	self.current = undefined;

	self.pathes = [];
	self.vectors = vectors;
	self.lengths = self.getLengths(vectors);

	els = Array.isArray(els) ? els : [els];
	els.forEach(function(el, i) {
		var svg = self.createSvg();
		var path = self.createPath();

		svg.appendChild(path);
		el.insertBefore(svg, el.firstChild);
		self.pathes.push(path);
	});

	self.draw(options.start || 0, true);

	if(self.changeTime !== undefined) {
		setInterval(function() {
			self.draw();
		}, self.changeTime);
	}
};

Strokes.prototype = {
	draw: function(n, immediately) {
		var self = this,
			pathes = self.pathes;

		if(n === self.current) {return;}

		if(n === undefined) {
			n = self.current + 1;
		}

		if(n >= self.vectors.length) {
			n = 0;
		}

		var ll = self.lengths[self.current],
			l = self.lengths[n],
			v = self.vectors[n];

		for(var p in pathes) {
			pathes[p].style.strokeDashoffset = -ll;
		}

		setTimeout(function() {
			for(var p in pathes) {
				var path = pathes[p];

				path.style[transition] = 'none';
				path.setAttribute("d", v);
				path.style.strokeDasharray = l + ' ' + l;
				path.style.strokeDashoffset = l;
				path.getBoundingClientRect();
				path.style[transition] = self.transition;
				path.style.strokeDashoffset = 0;
			}
		}, immediately ? 0 : self.changeDelay);

		self.current = n;
	},

	createSvg: function(attrs) {
		attrs = attrs || {};
		attrs.version = 1.1;
		attrs.xmlns = "http://www.w3.org/2000/svg";
		var svg = document.createElementNS(namespace, 'svg');
		for(var key in attrs) {
			svg.setAttribute(key, attrs[key]);
		}

		return svg;
	},

	createPath: function() {
		return document.createElementNS(namespace,"path");
	},

	getLengths: function(vectors) {
		var self = this,
			path = self.createPath(),
			lengths = [], v;

		for(v in vectors) {
			path.setAttribute("d", vectors[v]);
			lengths[v] = path.getTotalLength();
		}

		return lengths;
	},
};


window.Strokes = Strokes;

})(window, document);
