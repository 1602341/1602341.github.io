// Array Project
// Natalie Woo
// October 19. 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(800, 600, WEBGL);
  background(0);
  let x = 0;
  let y = 0;
}

function theSphere() {
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(20);
  pop();
  while 
}

function draw() {
  theSphere();
}
