// Terrain Generation
// October 23, 2023

let terrain = [];
let xOffset = 0;
let bike;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles();
  imageMode(CENTER);
}

function preload() {
  bike = loadImage("bike.png");
}

function draw() {
  background(220);
  if (keyIsDown(RIGHT_ARROW)) {
    if (xOffset <= 10000 - xOffset)
      xOffset += 30;
  }

  if (keyIsDown(LEFT_ARROW)) {
    if (xOffset >= 5)  {
      xOffset -= 30;
    }
  }

  displayRectangles();
  image(bike, mouseX, mouseY, bike.width/4, bike.height/4);
}

function displayRectangles() {
  for (let i = xOffset; i < width + xOffset; i++) {
    let thisRect = terrain[i];
    rect(thisRect.x - xOffset, height - thisRect.height, 1, thisRect.height);
  }
}

function spawnRectangles() {
  let time = 0;
  for (let x = 0; x < 10000; x++) {
    let h = noise(time) * height;
    let thisRect = {
      x: x,
      height: h,
    };
    terrain.push(thisRect);
    time += 0.002;
  }
}