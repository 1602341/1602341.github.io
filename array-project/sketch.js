// Array Project
// Natalie Woo
// October 19. 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//let state = "startMode"
//let petalArray = [];

let sphereArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(800, 600, WEBGL);
  background(0);
  angleMode(DEGREES)
}

function keyPressed() {
  if (keyCode === 37)  {

  }
}

function moveSphere() {
  //while state === "gameMode"
  // if keyPressed() {

  // }

}
// function spawnPetals() {
//   if keyPressed() {
//     thePetal();
//   }
// }


function spawnSpheres() {
  let sphere = {
    x: z * cos(angle),
    y: z * sin(angle),
    color: color(random(255), random(255), random(255)),
    dx: 5,
    dy: 5,
  }
  
  sphereArray.push(sphere);
}
function drawSpiral() {
  let dir = atan2(y - height / 2, x - width / 2);
  x += cos(dir + 90) * dx;
  y += sin(dir + 90) * dy;
}


function draw() {
  for (let theSphere of sphereArray) {
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
    drawSpiral();
    
  }
}
