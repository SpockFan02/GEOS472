function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('p5sketchCanvas');
}

var rad = 50;
var diff = 10;

function draw() {
  background(220);
  fill(255, 0, 0, 255);
  ellipse(150, 150, rad + 2 * diff, rad + 2 * diff);
  fill(0, 255, 0, 255);
  ellipse(150, 150, rad + diff, rad + diff);
  fill(0, 0, 255, 255);
  ellipse(150, 150, rad, rad);
}

function growRad() {
  rad++;
}

function growDiff() {
  diff++;
}

function shrinkRad() {
  rad--;
}

function shrinkDiff() {
  diff--;
}