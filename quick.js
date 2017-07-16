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

  sorting(heights);
}

function sorting(arr, left, right) {
  if (arr.length == 1) {
    line(x, height, x, height - heights[x]);
    x++;
  }
  var pi vot = Math.floor(random(arr.length));
  var lower_arr = [];
  var upper_arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (i != pivot) {
      if (arr[i] < arr[pivot]) {
        lower_arr.push(arr[i]);
      } else {
        upper_arr.push(arr[i]);
      }
    }
  } 
  sorting(lower_arr);
  line(x, height, x, height - heights[x]);
  x++;
  sorting(upper_arr);
}