// Array Project
// Natalie Woo
// October 19, 2023
//
// Extra for Experts:
// - The use of WEBGL to create 3D objects and change textures and lighting

//Reference for the spiral:
//https://editor.p5js.org/ejuo/sketches/7m5U6m2g-

let sphereArray = [];
let x = 0;
let y = 0;
let growRadius;
//let step;
//let grow;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(800, 600, WEBGL);
  background(0);
  angleMode(DEGREES);
  let someSphere = spawnSpheres();
  sphereArray.push(someSphere); 
}

function spawnSpheres() {
  let sphere = {
    x: width/4,
    y: height/4,
    color: color(random(255), random(255), random(255)),
    //dx: 5,
    //dy: 5,
    grow: 1,
    growStep: 0.002, 
    offset: 1,
    radius: 5,
    middle: width/2,
  };
return sphere;
}

//step = step + .0001;

function draw() {
  for (let theSphere of sphereArray) {
    //step = step + 1;
    fill(theSphere.color);
    translate(width/2, height/2);
    for (let i = 0; i < 1400; i = i+2) {
      theSphere.grow = theSphere.grow + theSphere.growStep;
      theSphere.offset = theSphere.offset + 0.01;
      theSphere.radius = 1 + (i/2.25);
      sphereRadius = width/50 + (i/20);
      growRadius = 1;
      growRadius = growRadius + 0.02;
      theSphere.radius = theSphere.radius + growRadius;
      theSphere.x = theSphere.middle/4 + cos((i) - theSphere.offset) * theSphere.radius;
      theSphere.y = theSphere.middle/4 - sin((i) - theSphere.offset) * theSphere.radius;
      push();
      translate (theSphere.x - width/2, theSphere.y - width/2);
      normalMaterial()
      specularMaterial(theSphere.color);
      rotateZ(frameCount * 0.1);
      rotateX(frameCount * 0.1);
      rotateY(frameCount * 0.1);
      pointLight(250, 250, 250, mouseX - width/2, mouseY - width/2, 100);
      sphere(sphereRadius);
      pop();
      if (mouseIsPressed){
        theSphere.color = color(random(255), random(255), random(255));
      }
    }
  }
}

