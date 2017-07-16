var heights = [];
var left;
var right;
function setup() {
  createCanvas(600, 400);
  left = 0;
  right = width;


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
    line(i, height, i, height - heights[i]);
  }

  for (var i = left; i < right; i++) {
    if (heights[i] > heights[i + 1]) {
      var temp = heights[i];
      heights[i] = heights[i + 1];
      heights[i + 1] = temp
    }
  }
  right--;

  for (var i = right; i > left; i--) {
    if (heights[i] < heights[i - 1]) {
      var temp = heights[i];
      heights[i] = heights[i - 1];
      heights[i - 1] = temp
    }
  }
  left--;
}