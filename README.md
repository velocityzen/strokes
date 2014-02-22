#Strokes
Simple SVG animation component for handdraw like effect.
No dependecies. And has a jquery plugin version.

## Usage
```js
var container = document.getElementById('container');
var vectors = [];

//initialisation
var strokes = new Strokes(container, vectors, {start: 0});

// draw first vector
strokes.draw(1);

```

###Options
* **drawTime** — stroke animation time in ms, default is 1000;
* **changeTime** — time between strokes changes in ms. if undefined it will not change automaticaly. Default is undefined;
* **changeDelay** — delay between end of one stroke drawing and beginig of next stroke start to draw, in ms. Default is 0;
* **start** — on what vector start to draw. Default is 0.
* **transition** — css transition string for vectors animation.

If we are using **changeTime** options it will start to draw vectors automaticaly.
