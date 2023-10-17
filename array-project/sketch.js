// Array Project
// Natalie Woo
// October 19. 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//let state = "startMode"
//https://editor.p5js.org/ejuo/sketches/7m5U6m2g-

let sphereArray = [];
let x = 0;
let y = 0;
let growRadius;
let step;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(800, 600, WEBGL);
  background(0);
  angleMode(DEGREES)
  spawnSpheres();
}

function keyTyped() {
  //let dir = atan2(y - height / 2, x - width / 2);
  if (keyCode === 37) {
    let someSphere = spawnSpheres();
    // someSphere.x = (x + cos(dir + 90) * 5);
    // someSphere.y = (y + sin(dir + 90) * 5);
    sphereArray.push(someSphere); 
      

function spawnSpheres() {
  let sphere = {
    x: width/2,
    y: height/2,
    color: color(random(255), random(255), random(255)),
    dx: 5,
    dy: 5,
    grow: 1,
    growStep: 0.002, 
    offset: 1,
    alternate: 0,
  };
return sphere;
}
// function drawSpiral() {
//   let dir = atan2(y - height / 2, x - width / 2);
//   x += cos(dir + 90) * dx;
//   y += sin(dir + 90) * dy;
// }

step = step + .0001;

function draw() {
  for (let theSphere of sphereArray) {
    middle = width/2;
    step = step + 1;
    fill(theSphere.color);
    translate(width/2, height/2);
    grow = grow + growStep;
  }
  if (grow > 5 ) { 
    growStep = -0.002;
  }
  if (grow < 0.5 ) { 
    growStep = 0.002;
  }
  for (var i = 0; i < 1400; i=i+2) {
    offset = offset + 0.0001;
    radius = 2 + (i/2.25);
    circleRadius = 45 + (i/30);
    growRadius = 0;
    growRadius = growRadius + 0.02;
    radius = radius + growRadius;
    xCircle = middle + cos((i)-offset) * radius;
    yCircle = middle - sin((i)-(offset)) * radius;
    push();
    translate (xCircle, yCircle);
    fill(theSphere.color);
    rotate((-20*cos(i+step)) + abs(12*sin(i+step)));
    sphere(30);
    pop();
     }
    }
  }
}
