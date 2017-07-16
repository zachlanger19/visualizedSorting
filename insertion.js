var heights = [];
var w;
var x;
function setup() {
  createCanvas(600, 400);
  x = 0;
  w = width - 1;

  for (var i = 0; i < width; i++) {
    heights.push(random(height))
  }
}

function draw() {
  background(0);
  fill(255);
  stroke(255);
  strokeWeight(1);
  for (var i = 0; i < width; i++) {
    point(i, height - heights[i]);
  }

  for (var i = 0; i < w; i++) {
    if (heights[i] > heights[i + 1]) {
      var temp = heights[i];
      heights[i] = heights[i + 1];
      heights[i + 1] = temp
    }
  }
  w--;
}