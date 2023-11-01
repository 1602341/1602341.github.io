// Ultimate X's and O's
// Natalie Woo
// November 13, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let section;
let cellSize;
let sectionSize;
let playerX;
let playerO;
let turnX;
let turnO;
const GRID_SIZE = 9;
const SECTION_SIZE = 3;


function preload() {
  playerX = loadImage("x.png");
  playerO = loadImage("o.png");
}

function setup() {
  createCanvas(windowWidth * 0.8, windowHeight * 0.8);
  imageMode(CENTER)
  if (height > width) {
    cellSize = width/GRID_SIZE;
  }
  else {
    cellSize = height/GRID_SIZE; 
  }
  if (height > width) {
    sectionSize = width/SECTION_SIZE;
  }
  else {
    sectionSize = height/SECTION_SIZE; 
  }
  grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
}

function draw() {
  background(220);
  displayMainGrid();
  displaySectionGrid();
  //image(playerX, 28, 28, playerX.width/4, playerX.height/4);
  //image(playerO, 80, 80, playerO.width/2.5, playerO.height/2.5);
  // mouseClicked();
}

// function mouseClicked() {
//   if (mouseX < width/GRID_SIZE && mouseX > 0 && mouseY < height/GRID_SIZE && mouseY > 0 ) {
//   image(playerX, 34, 34, playerX.width/4, playerX.height/4);
//   }
// }

function boxFinder(x, y) {
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
      if (grid[y][x] === turnX) {
        grid[y][x] = turnO;
      }
      else if (grid[y][x] === turnO) {
        grid[y][x] = turnX;
      }
  }
}

function mousePressed() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);
  boxFinder(x, y) 
}

function displayMainGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      fill("white");
      strokeWeight(5)
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      if (grid[y][x] === turnX) {
        image(playerX, x, y, playerX.width/4, playerX.height/4);
      }
      else if (grid[y][x] === turnO) {
        image(playerO, x, y, playerO.width/4, playerO.height/4);
      }
    }
  }
}

function displaySectionGrid() {
  for (let y = 0; y < SECTION_SIZE; y++) {
    for (let x = 0; x < SECTION_SIZE; x++) {
      fill(0, 0, 0, 0);
      strokeWeight(10);
      //rect(x * cellSize, y * cellSize, cellSize, cellSize);
      rect(x * sectionSize, y * sectionSize, sectionSize, sectionSize);
    }
  }  
}

function generateEmptyGrid(cols, rows) {
  let randomArray = [];
  for (let y = 0; y < cols; y++) {
    randomArray.push([]);
    for (let x = 0; x < rows; x++) {
        randomArray[y].push(0);
    }
  }
  return randomArray;  
}