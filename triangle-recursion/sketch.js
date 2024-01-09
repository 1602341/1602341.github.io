// Sierpinkski Trangle Recursion Demo

let initialTriangle = [
  {x: 400, y: 50},
  {x: 50, y: 550},
  {x: 750, y: 550}
];

let depth = 0;
let theColors = ["black", "red", "brown", "purple", "green"]

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  sierpinski(initialTriangle, depth);
}

function mousePressed() {
  if (depth < theColors.length - 1) {
    depth ++;
  }
}

function sierpinski(point, degree) {
  fill(theColors[degree]);
  triangle(point[0].x, point[0].y, point[1].x, point[1].y, point[2].x, point[2].y);
  if (degree > 0) {
    // draw upper triangle
    sierpinski([point[0],
        getMidpoint(point[0], point[1]),
        getMidpoint(point[0], point[2])],
        degree - 1);

    // draw bottom left triangle
    sierpinski([point[1],
        getMidpoint(point[0], point[1]),
        getMidpoint(point[1], point[2])],
        degree - 1);

    sierpinski([point[2],
        getMidpoint(point[0], point[2]),
        getMidpoint(point[1], point[2])],
        degree - 1);
  }
}

function getMidpoint(point1, point2) {
  let newX = (point1.x + point2.x)/2;
  let newY = (point1.y + point2.y)/2;
  return {x: newX, y: newY};
}