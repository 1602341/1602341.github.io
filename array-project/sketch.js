// Array Project
// Natalie Woo
// October 19. 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//let state = "startMode"
//let petalArray = [];

let x = 0;
let y = 0;

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

function thePetal() {
  fill(255);
  arc(200, 200, width/4, height/2, PI, TWO_PI);
  rotate(45);
//   x += 10;
//   y += 10;
//   z += 5;
 }

function theSphere() {
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(20);
  pop();
  //moveSphere()
}
function spawnPetal() {
  let thePetal = {
    x: 0,
    y: 0,
    r: random(255),
    g: random(255),
    b: random(255),
  }

  return thePetal;
}


function draw() {
  theSphere();
  thePetal();
}
