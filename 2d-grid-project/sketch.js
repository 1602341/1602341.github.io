// Sudoku
// Natalie Woo
// October 27, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let section;
let cellSize;
let sectionSize;
let xPlayer;
let yPlayer;
const GRID_SIZE = 9;
const SECTION_SIZE = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  displayNumberGrid();
  displaySectionGrid();
}

function keyTyped() {
  if (key === "x") {
    
  }
  else if (key === "o") {
    
  }
}

function mousePressed() {

}

function displayNumberGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      fill("white");
      strokeWeight(5)
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
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