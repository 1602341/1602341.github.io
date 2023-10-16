// Array Project
// Natalie Woo
// October 19. 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//let state = "startMode"
//let petalArray = [];

let sphereArray = [];
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(800, 600, WEBGL);
  background(0);
  angleMode(DEGREES)
  spawnSpheres()
}

function keyPressed() {
  let dir = atan2(y - height / 2, x - width / 2);
  let someSphere = spawnSpheres();
    someSphere.x = (x += cos(dir + 90) * 5);
    someSphere.y = (y += sin(dir + 90) * 5);
    sphereArray.push(someSphere); 
  
}

function spawnSpheres() {
  let sphere = {
    x: width/2,
    y: height/2,
    color: color(random(255), random(255), random(255)),
    dx: 5,
    dy: 5,
  }
  sphereArray.push(sphere);
}
// function drawSpiral() {
//   let dir = atan2(y - height / 2, x - width / 2);
//   x += cos(dir + 90) * dx;
//   y += sin(dir + 90) * dy;
// }


function draw() {
  for (let theSphere of sphereArray) {
    if (keyPressed(keyCode === 37)) {
      fill(theSphere.color);
      translate(0, 0, 0);
      push();
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      sphere(20);
      pop();
      fill(theSphere.color);
      translate(width/2, height/2);
    //  drawSpiral();
    }
  }
}
