// Ultimate X's and O's
// Natalie Woo
// November 13, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Resources
//https://editor.p5js.org/rajpeaks/sketches/Skk7r8r1V
//
//Minimax
//https://www.youtube.com/watch?v=trKjYdBASyQ
//https://thecodingtrain.com/challenges/154-tic-tac-toe-minimax
//https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD

let i;
let n;
let grid;
let cellSize;
let turn;
let human;
let ai;
let player = human;
// let ai = "X";
// let human = "O";
let state = "startScreen"
const GRID_SIZE = 3;
//const SECTION_SIZE = 3;


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
  // if (height > width) {
  //   sectionSize = width/SECTION_SIZE;
  // }
  // else {
  //   sectionSize = height/SECTION_SIZE; 
  //}
  grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  bestMove();
}

function find3(a, b, c) {
  return a === b && b === c && a!== '';
}

// function findWinner() {
//   let winner = theWinner;
// }

function checkWinner() {
  if (state === "singlePlayer") {
    let winner = null;
    for (let y = 0; y < GRID_SIZE; y++) {
      //horizontal
      if (find3(grid[y][0], grid[y][1], grid[y][2])) {
        winner = grid[y][0];
      }
      //vertical
      else if (find3(grid[0][y], grid[1][y], grid[2][y])) {
        winner = grid[0][y];
      }
    }
      //diagonal
    if (find3(grid[0][0], grid[1][1], grid[2][2])) {
      winner = grid[0][0];
    }
    if (find3(grid[2][0], grid[1][1], grid[0][2])) {
      winner = grid[2][0];
    }
    let openSpots = 0;
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (grid[y][x] == '') {
          openSpots++;
        }
      }
    }
    if (winner === null && openSpots === 0) {
      return ("tie");
    }
    else {
      return winner;
    }
  }
}

function mousePressed() {
  if (state === "startScreen") {
    let singleClicked = isInRect(mouseX, mouseY, height/2, 
    height/2 + 200, width/3, width/3 + 300);
    if (singleClicked) {
      state = "singlePlayer";
      turn = human
    }
  }
}

function start() {
  if (state === "startScreen") {
    textSize(width/10);
    fill('black');
    text('Tic Tac Toe', width/4, height/3);
    rect(width/3, height/2, 300, 200);
    textSize(width/20)
    fill('white');
    text('Single Player', width/2.7, height/1.6);
  }
  else if ((state === "singlePlayer") || (state === "multiPlayer")) {
  displayMainGrid();
  //displaySectionGrid();
  }
}

function draw() {
  background(220);
  start();
  checkWinner();
}

function isInRect(x, y, top, bottom, left, right) {
  return x >= left && x <= right && y >= top && y <= bottom;
}

function boxFinder(x, y) {
  if (state === "singlePlayer") {
        grid[y][x] = ai;
    if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
      if (grid[y][x] === '') {
        bestMove();
        grid[y][x] = ai;
      }
      else if (grid[y][x] === ai) {
        bestMove();
        grid[y][x] = human;
      }
    }
  }
}

function mouseClicked() {
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);
  // let i = Math.floor(mouseY/sectionSize);
  // let n = Math.floor(mouseX/sectionSize);
  boxFinder(x, y)
}

function bestMove() {
  let bestScore = -Infinity;
  let move;
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === '') {
        grid[y][x] = ai;
        let score = miniMax(grid);
        grid[y][x] = '';
        if (score > bestScore) {
          bestScore = score;
          move = { y, x };
          grid[move.y][move.x] = ai;
          player = human;
        }
      }
    }
  }
}

let scores = {
  X: 10,
  O: -10,
  tie: 0
}

function miniMax(grid, depth, maximizing) {
  let result = checkWinner();
  if (state === "startScreen") {
    if (result !== null) {
      return scores[result];
    }

    if (maximizing) {
      let bestScore = -Infinity;
      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
          if (grid[y][x] === '') {
            grid[y][x] = ai;
            let score = miniMax(grid, depth + 1, false);
            grid[y][x] = '';
            bestScore = max(score, bestScore)
          }
        }
      }
      return bestScore;
    }
    else {
      let bestScore = Infinity;
      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < 3; x++) {
          // Is the spot available?
          if (grid[y][x] == '') {
            grid[y][x] = human;
            let score = miniMax(grid, depth + 1, true);
            grid[y][x] = '';
            bestScore = min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }
}


function displayMainGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      strokeWeight(5)
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      let spot = grid[y][x];
      if (spot === human) {
        image(playerX, x * cellSize, y * cellSize, width/3, height/3); 
      }
      else if (spot === ai) {
        image(playerO, x * cellSize, y * cellSize, width/3, height/3);
      }
      // if (turn === "turnX") {
      //   if (grid[y][x] === "turnX") {
      //     image(playerO, x * cellSize, y * cellSize, width/9, height/9);
      //     turn = "turnO"
      //   }
      // }
      // else if (turn === "turnO") {
      //   if (grid[y][x] === "turnO") {
      //     image(playerX, x * cellSize, y * cellSize, width/9, height/9);
      //     state === "turnX"
      //   } 
      // }
    }
  }
//   let result = checkWinner();
//   if (result !== null) {
//     noLoop();
//     state = "endScreen";
//   }
 }

// function displaySectionGrid() {
//   //if (state === singlePlayer || state === multiplayer) {
//     for (let y = 0; y < SECTION_SIZE; y++) {
//       for (let x = 0; x < SECTION_SIZE; x++) {
//         fill(0, 0, 30, 20);
//         strokeWeight(10);
//         rect(x * sectionSize, y * sectionSize, sectionSize, sectionSize);
//     }
//   }  
// }

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