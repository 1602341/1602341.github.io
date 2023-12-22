// Recursion Circles

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  recersiveCircle(width/2, height/2, mouseX);
}

function recersiveCircle(x, y, radius)  {
  let grey = map(radius, 30, height/2, 0, 255);
  fill(grey);
  circle(x, y, radius*2);
  if (radius > 30) {
   recersiveCircle(x - radius/2, y, radius/2);
   recersiveCircle(x + radius/2, y, radius/2);
   recersiveCircle(x, y - radius/2, radius/2);
   recersiveCircle(x, y + radius/2, radius/2);
  }
}
