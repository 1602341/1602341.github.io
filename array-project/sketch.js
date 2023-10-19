// Array Project
// Natalie Woo
// October 19, 2023
//
// Extra for Experts:
// - The use of WEBGL to create 3D objects and change textures and lighting

//Reference for the spiral:
//https://editor.p5js.org/ejuo/sketches/7m5U6m2g-

//Reference for 3D is WEBGL
//https://p5js.org/examples/3d-geometries.html

//sets up the array and initializes one value
let sphereArray = [];
let growRadius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //imports a extension that allows 3D shapes
  createCanvas(800, 600, WEBGL);
  background(0);
  angleMode(DEGREES);
  //pushes the initial array
  let someSphere = spawnSpheres();
  sphereArray.push(someSphere); 
}

//function to attach object notaions to
function spawnSpheres() {
  let sphere = {
    x: width/4,
    y: height/4,
    color: color(random(255), random(255), random(255)),
    offset: 1,
    radius: 5,
    middle: width/2,
  };
return sphere;
}

function draw() {
  //pulls values from the array
  for (let theSphere of sphereArray) {
    //sets position for the initial sphere
    translate(width/2, height/2);
    //sets up the spiral of the spheres
    for (let i = 0; i < 1400; i = i+2) {
      theSphere.offset = theSphere.offset + 0.01;
      theSphere.radius = 1 + (i/2.25);
      sphereRadius = width/50 + (i/20);
      growRadius = 1;
      growRadius = growRadius + 0.02;
      theSphere.radius = theSphere.radius + growRadius;
      theSphere.x = theSphere.middle/4 + cos((i) - theSphere.offset) * theSphere.radius;
      theSphere.y = theSphere.middle/4 - sin((i) - theSphere.offset) * theSphere.radius;
      push();
      //decides new placement of the spheres
      translate (theSphere.x - width/2, theSphere.y - width/2);
      //sets up the lighting and texture of the spheres
      normalMaterial()
      specularMaterial(theSphere.color);
      pointLight(247, 230, 166, mouseX - width/2, mouseY - width/2, 100);
      //spawns the spheres
      sphere(sphereRadius);
      pop();
      //picks a new random colour once the mouse is pressed
      if (mouseIsPressed){
        theSphere.color = color(random(255), random(255), random(255));
      }
    }
  }
}

