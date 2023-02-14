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
  else if (dataValue < 0) {
    stroke(255, 0, 0, 255); /*red*/
	line(long + 175, -1 * lat + 95, long + 185, -1 * lat + 85);
	line(long + 175, -1 * lat + 85, long + 185, -1 * lat + 95);
  }
  else { /*dataValue is NaN*/
    fill(255, 0, 0, 255); /*red*/
	stroke(255, 0, 0, 255);
	text("Invalid data value!", 5, 15);
  }
}