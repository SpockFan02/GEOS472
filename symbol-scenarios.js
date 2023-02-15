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
    fill(255, 0, 0, 255); /*red*/
    stroke(255, 0, 0, 255);
    text("Invalid coordinates", 5, 105);
  }
}

function draw() {
  background(100, 200, 255, 255);
  
  if ((0 <= dataValue) && (dataValue <= 100)) {
    fill(0); /*black*/
    stroke(0);
    symbolDiameter = 5;
  }
  else if ((100 < dataValue) && (dataValue <= 200)) {
    fill(0); /*black*/
    stroke(0);
    symbolDiameter = 10;
  }
  else if (200 < dataValue) {
    fill(0); /*black*/
    stroke(0);
    symbolDiameter = 15;
  }
  else if (dataValue < 0) {
    symbolDiameter = 10; 
  }
  else { /*dataValue is NaN*/
    fill(255, 0, 0, 255); /*red*/
    stroke(255, 0, 0, 255);
    text("Invalid data value!", 5, 15);
  }
  
  if ((abs(mouseX - (long + 180)) <= (symbolDiameter / 2)) && (abs(mouseY - (-1 * lat + 90)) <= (symbolDiameter / 2))) { /*Mouse is over the symbol's location*/
    if (dataValue >= 0) {
      if ((-90 <= lat) && (lat <= 90) && (-180 <= long) && (long <= 180)) { /*valid coordinates*/
        if (((lat <= -80) && (long <= -170)) /*lower left corner of map*/ || ((lat <= -80) && (long > -170) && (long < 170) /*bottom edge of map, not a corner*/)) {
          ellipse(long + 190, -1 * lat + 80, symbolDiameter, symbolDiameter); /*draw symbol 10px up and to the right*/
          line(long + 180, -1 * lat + 90, long + 190, -1 * lat + 80); /*draw line from coordinates to the offset symbol*/
        }
        else if ((lat <= -80) && (long >= 170)) { /*lower right corner of map*/
          ellipse(long + 170, -1 * lat + 80, symbolDiameter, symbolDiameter); /*draw symbol 10px up and to the left*/
          line(long + 180, -1 * lat + 90, long + 170, -1 * lat + 80); /*draw line from coordinates to the offset symbol*/
        }
        else if (((lat >= 80) && (long <= -170)) /*upper left corner of map*/ || (((long <= -170) && (lat < 80) && (lat > -80)) /*left edge of map, not a corner*/)) {
          ellipse(long + 190, -1 * lat + 100, symbolDiameter, symbolDiameter); /*draw symbol 10px down and to the right*/
          line(long + 180, -1 * lat + 90, long + 190, -1 * lat + 100); /*draw line from coordinates to the offset symbol*/
        }
        else { /*upper right corner, right edge, top edge, or anywhere else on the canvas*/
          ellipse(long + 170, -1 * lat + 100, symbolDiameter, symbolDiameter); /*draw symbol 10px down and to the left*/
          line(long + 180, -1 * lat + 90, long + 170, -1 * lat + 100); /*draw line from coordinates to the offset symbol*/
        }
      }
      else { /*invalid coordinates*/
        fill(255, 0, 0, 255); /*red*/
        stroke(255, 0, 0, 255);
        text("Invalid coordinates", 5, 105);
      }
    }
    else if (dataValue < 0) {
      if ((-90 <= lat) && (lat <= 90) && (-180 <= long) && (long <= 180)) { /*valid coordinates*/
        if (((lat <= -80) && (long <= -170)) /*lower left corner of map*/ || ((lat <= -80) && (long > -170) && (long < 170) /*bottom edge of map, not a corner*/)) {
          stroke(255, 0, 0, 255); /*red*/
          line(long + 185, -1 * lat + 85, long + 195, -1 * lat + 75); /*draw X 10px up and to the right*/
          line(long + 185, -1 * lat + 75, long + 195, -1 * lat + 85);
          stroke(0); /*black*/
          line(long + 180, -1 * lat + 90, long + 190, -1 * lat + 80); /*draw line from coordinates to the offset X*/
        }
        else if ((lat <= -80) && (long >= 170)) { /*lower right corner of map*/
          stroke(255, 0, 0, 255); /*red*/
          line(long + 165, -1 * lat + 85, long + 175, -1 * lat + 75); /*draw X 10px up and to the left*/
          line(long + 165, -1 * lat + 75, long + 175, -1 * lat + 85);
          stroke(0); /*black*/
          line(long + 180, -1 * lat + 90, long + 170, -1 * lat + 80); /*draw line from coordinates to the offset X*/
        }
        else if (((lat >= 80) && (long <= -170)) /*upper left corner of map*/ || (((long <= -170) && (lat < 80) && (lat > -80)) /*left edge of map, not a corner*/)) {
          stroke(255, 0, 0, 255); /*red*/
          line(long + 185, -1 * lat + 105, long + 195, -1 * lat + 95); /*draw X 10px down and to the right*/
          line(long + 185, -1 * lat + 95, long + 195, -1 * lat + 105);
          stroke(0); /*black*/
          line(long + 180, -1 * lat + 90, long + 190, -1 * lat + 100); /*draw line from coordinates to the offset X*/
        }
        else { /*upper right corner, right edge, top edge, or anywhere else on the canvas*/
          stroke(255, 0, 0, 255); /*red*/
          line(long + 165, -1 * lat + 105, long + 175, -1 * lat + 95); /*draw X 10px down and to the left*/
          line(long + 165, -1 * lat + 95, long + 175, -1 * lat + 105);
          stroke(0); /*black*/
          line(long + 180, -1 * lat + 90, long + 170, -1 * lat + 100); /*draw line from coordinates to the offset X*/
        }
      }
      else { /*invalid coordinates*/
        fill(255, 0, 0, 255); /*red*/
        stroke(255, 0, 0, 255);
        text("Invalid coordinates", 5, 105);
      }
    }
    else { /*dataValue is NaN*/
      fill(255, 0, 0, 255); /*red*/
      stroke(255, 0, 0, 255);
      text("Invalid data value!", 5, 15);
    }
  }

  else { /*Mouse is not over the symbol's location*/
    console.log("Mouse is not over symbol!");
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
      if ((-90 <= lat) && (lat <= 90) && (-180 <= long) && (long <= 180)) { /*valid coordinates*/
        stroke(255, 0, 0, 255); /*red*/
        line(long + 175, -1 * lat + 95, long + 185, -1 * lat + 85);
        line(long + 175, -1 * lat + 85, long + 185, -1 * lat + 95);
      }
      else { /*invalid coordinates*/
        fill(255, 0, 0, 255); /*red*/
        stroke(255, 0, 0, 255);
        text("Invalid coordinates", 5, 105);
      }
    }
    else { /*dataValue is NaN*/
      fill(255, 0, 0, 255); /*red*/
      stroke(255, 0, 0, 255);
      text("Invalid data value!", 5, 15);
    }
  }
}