// Ultimate X's and O's
// Natalie Woo
// November 13, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Resources
//https://editor.p5js.org/rajpeaks/sketches/Skk7r8r1V

let i;
let n;
let grid;
let section;
let cellSize;
let sectionSize;
let playerX;
let playerO;
let theTurn;
let turnX = 0;
let turnO = 1;
let state = "start"
const GRID_SIZE = 9;
const SECTION_SIZE = 3;


function preload() {
  playerX = loadImage("x.png");
  playerO = loadImage("o.png");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CORNER)
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
// <<<<<<< HEAD
//   image(playerX, 28, 28, playerX.width/4, playerX.height/4);
//   image(playerO, 80, 80, playerO.width/2.5, playerO.height/2.5);
// =======
  //image(playerX, 28, 28, playerX.width/4, playerX.height/4);
  //image(playerO, 80, 80, playerO.width/2.5, playerO.height/2.5);
  // mouseClicked();
// >>>>>>> f32bf55f35725067ef7a2d93c3be3bfbe31b43d4
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

function mouseClicked() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);
  let i = Math.floor(mouseY/sectionSize);
  let n = Math.floor(mouseX/sectionSize);
  boxFinder(x, y)
  if (state === "start") {
    //theTurn = "turnX";
    //if (state === "turnX") {
        state = "turnO"
    //}
    //else if (state === "turnO") {
      //state = "turnX"
    //}
    // if (theTurn === "turnX") {
    //   displayMainGrid()
    //   theTurn = "turnO";
    // }
    // else if (theTurn === "turnO"){
    //   displayMainGrid()
    //   theTurn = "turnX";
    // }
  }
}


function displayMainGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      strokeWeight(5)
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      if (state === "turnX") {
        if (grid[y][x] === turnX) {
          image(playerO, x * cellSize, y * cellSize, width/9, height/9);
          //theTurn === "turnO"
          state = "turnO"
          //rect(i * cellSize, n * cellSize, cellSize, cellSize);
          //rect(i * sectionSize, n * sectionSize, sectionSize, sectionSize);
        }
      }
    
      if (state === "turnO") {
        if (grid[y][x] === turnO) {
          image(playerX, x * cellSize, y * cellSize, width/9, height/9);
          state === "turnX"
          //fill("grey")
          //rect(0, 0, width/3, height/3);
        } 
        //rect(i * sectionSize, n * sectionSize, sectionSize, sectionSize);
        // else if (grid[y][x] === 0) {
          //   image(playerO, x * cellSize, y * cellSize, width/9, height/9);
          // } 
        }
    }
  }
}

function displaySectionGrid() {
  for (let y = 0; y < SECTION_SIZE; y++) {
    for (let x = 0; x < SECTION_SIZE; x++) {
      fill(0, 0, 30, 20);
      strokeWeight(10);
      //rect(x * cellSize, y * cellSize, cellSize, cellSize);
      rect(x * sectionSize, y * sectionSize, sectionSize, sectionSize);
      // if (theTurn === "turnX") {
      //   if (grid[y][x] === 0) {
      //     theTurn === "turnX"
      //     fill("grey")
      //     rect(i * sectionSize, n * sectionSize, sectionSize, sectionSize);
      //   }
      // }
      // else if (theTurn === "turnO") {
      //   if (grid[y][x] === 1) {
      //     theTurn === "turnO"
      //     fill("grey")
      //     rect(i * sectionSize, n * sectionSize, sectionSize, sectionSize);
      //   } 
      // }
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