// Array Project
// Natalie Woo
// October 19, 2023
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
let grow;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(800, 600, WEBGL);
  background(0);
  angleMode(DEGREES);
  let dir = atan2(y - height / 2, x - width / 2);
  let someSphere = spawnSpheres();
  someSphere.x = (x + cos(dir + 90) * 5);
  someSphere.y = (y + sin(dir + 90) * 5);
  sphereArray.push(someSphere); 
}

// function keyTyped() {
//   //let dir = atan2(y - height / 2, x - width / 2);
//   if (keyCode === 37) {
//     let someSphere = spawnSpheres();
//     // someSphere.x = (x + cos(dir + 90) * 5);
//     // someSphere.y = (y + sin(dir + 90) * 5);
//     sphereArray.push(someSphere); 
      
//   }
// }

function spawnSpheres() {
  let sphere = {
    x: width/4,
    y: height/4,
    color: color(random(255), random(255), random(255)),
    dx: 5,
    dy: 5,
    grow: 1,
    growStep: 0.002, 
    offset: 1,
    radius: 5,
    middle: width/2,
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
    //growStep = 0.0002;
    //offset = 1;
    //middle = width/2;
    step = step + 1;
    fill(theSphere.color);
    translate(width/2, height/2);
    for (let i = 0; i < 1400; i = i+2) {
      grow = grow + theSphere.growStep;
      theSphere.offset = theSphere.offset + 0.01;
      radius = 1 + (i/2.25);
      sphereRadius = width/2 + (i/2000);
      growRadius = 0;
      growRadius = growRadius + 0.02;
      radius = radius + growRadius;
      theSphere.x = theSphere.middle/2 + cos((i) - theSphere.offset) * radius;
      theSphere.y = theSphere.middle/2 - sin((i) - theSphere.offset) * radius;
      push();
      translate (theSphere.x, theSphere.y);
      fill(theSphere.color);
      //rotate((-20*cos(i+step)) + abs(12*sin(i+step)));
      rotateZ(frameCount * 0.1);
      rotateX(frameCount * 0.1);
      rotateY(frameCount * 0.1);
      sphere(sphereRadius);
      pop();
      if (mouseIsPressed){
        theSphere.color = color(random(255), random(255), random(255));
      }
    }
  }
//   if (grow > 5 ) { 
//     growStep = -0.002;
//   }
//   if (grow < 0.5 ) { 
//     growStep = 0.002;
//   }
}

