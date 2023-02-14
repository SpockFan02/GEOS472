function setup() {
  var canvas = createCanvas(360, 180);
  canvas.parent('p5canvas');
}

var lat;
var long;
var dataValue;
var symbolDiameter;

function updateValues() {
  lat = Number(document.getElementById("yInput").value, 10);
  long = Number(document.getElementById("xInput").value, 10);
  dataValue = Number(document.getElementById("valueInput").value, 10);
}

function drawSymbol() {
  if ((-90 <= lat) && (lat <= 90) && (-180 <= long) && (long <= 180)) {
    ellipse(long + 180, (-1 * lat + 90), symbolDiameter, symbolDiameter);
  }
  else {
    stroke(255, 0, 0, 255); /*red*/
    text("Invalid coordinates", 5, 105);
  }
}

function draw() {
  background(0, 0, 255, 255);

  if ((0 <= dataValue) && (dataValue <= 100)) {
	fill(0); /*black*/
	stroke(0);
	symbolDiameter = 5;
	drawSymbol();
  }
  else if ((100 < dataValue) && (dataValue <= 200)) {
    fill(0); /*black*/
	stroke(0);
	symbolDiameter = 10;
	drawSymbol();
  }
  else if (200 < dataValue) {
    fill(0); /*black*/
	stroke(0);
	symbolDiameter = 15;
	drawSymbol();
  }
  else { /*dataValue is negative or NaN*/
    fill(255, 0, 0, 255); /*red*/
	stroke(255, 0, 0, 255);
	text("Data value must be non-negative!", 5, 15);
  }
}