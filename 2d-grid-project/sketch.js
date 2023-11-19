// Ultimate X's and O's
// Natalie Woo
// November 13, 2023
//
// Extra for Experts:
// - attempted minimax
//*I couldn't get my minimax function to work. I left the code 
// commented out but I'm not expecting it to qualify for extra
// for experts

//Resources
//Minimax
//https://www.youtube.com/watch?v=trKjYdBASyQ
//https://thecodingtrain.com/challenges/154-tic-tac-toe-minimax
//https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD



let grid;
let cellSize;
let turn = 1;
let player2 = -1;
let player1 = 1;
let player = player2;
let playerX;
let playerO;
let isWinner;
let state = "startScreen"
const GRID_SIZE = 3;


function preload() {
  //attaches the images used for the x and o
  playerX = loadImage("x.png");
  playerO = loadImage("o.png");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CORNER)
  //used to find position of object
  if (height > width) {
    cellSize = width/GRID_SIZE;
  }
  else {
    cellSize = height/GRID_SIZE; 
  }
  // creates a game board
  grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
}

//used to keep track of a win
function find3(a, b, c) {
  return a === b && b === c && a !== '';
}


function checkWinner() {
  let winner = null;
  if (state === "twoPlayer") {
    for (let y = 0; y < GRID_SIZE; y++) {
      //horizontal
      if (find3(grid[y][0], grid[y][1], grid[y][2])) {
        winner = grid[y][0];
      }
    }
    for (let y = 0; y < GRID_SIZE; y++) {
      //vertical
      if (find3(grid[0][y], grid[1][y], grid[2][y])) {
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
    //keeps track of how much of board is filled
    let openSpots = 0;
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (grid[y][x] == '') {
          openSpots++;
        }
      }
    }
    //check if there is a win
    if ((winner === null) && (openSpots === 0)) {
      return ("tie");
    }
    else {
      return winner;
    }
  }
}

function mousePressed() {
  if (state === "startScreen") {
    //checks if button was clicked
    let twoClicked = isInRect(mouseX, mouseY, height/2, 
    height/2 + 200, width/3, width/3 + 300);
    //starts game screen
    if (twoClicked) {
      state = "twoPlayer";
      if (isWinner) {
        return (turn *= -1)
      }
    }
  }
  //puts player in closest square to clicked 
  if (state === "twoPlayer") {
    if (player === player2) {
      let y = Math.floor(mouseY/cellSize);
      let x = Math.floor(mouseX/cellSize);
      boxFinder(x, y)
    }
  }
}

//sets up the start screen
function start() {
  if (state === "startScreen") {
    textSize(width/10);
    fill('black');
    text('Tic Tac Toe', width/4, height/3);
    rect(width/3, height/2, 300, 200);
    textSize(width/20)
    fill('white');
    text('Two Player', width/2.7, height/1.6);
  }
  //if button is pressed start the game
  else if ((state === "twoPlayer") || (state === "multiPlayer")) {
  displayMainGrid();
  }
}


function draw() {
  background(220);
  start();
  checkWinner();

}

//start button
function isInRect(x, y, top, bottom, left, right) {
  return x >= left && x <= right && y >= top && y <= bottom;
}

//function to find the closest box to where you clicked
function boxFinder(x, y) {
    if (grid[y][x] = player1) {
      if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
        if (grid[y][x] === '') {
          grid[y][x] = player2;
          player = player1;
        }
      }
    }
    if (grid[y][x] = player2) {
      if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
        if (grid[y][x] === '') {
          grid[y][x] = player1;
          player = player2;
        }
      }
    }
    return grid;
  }

  
  
  function displayMainGrid() {
    //goes through each box
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        strokeWeight(5)
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
        //places player in box
        let turn = grid[y][x];
        if (turn === 1) {
          image(playerO, x * cellSize, y * cellSize, width/3, height/3);
          checkWinner();
          turn = (turn * -1);
        }
        if (turn === -1) {
          image(playerX, x * cellSize, y * cellSize, width/3, height/3); 
          checkWinner();
          turn = (turn * -1);
        }
      }
    }
    return turn;
  }

//draws the game board
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
  //if (turn === human) {
    // let result = checkWinner();
    // if (result !== null) {
      //   background(220)
      //   fill("black")
      //   text('The Winner Is: ' + result, width/4, height/3);
      // }
      
      
      

// function bestMove() {
//   let bestScore = -Infinity;
//   let move;
//   for (let y = 0; y < GRID_SIZE; y++) {
//     for (let x = 0; x < GRID_SIZE; x++) {
//       if (grid[y][x] === '') {
//         grid[y][x] = ai;
//         let score = miniMax(grid, 0, false);
//         grid[y][x] = '';
//         if (score > bestScore) {
//           bestScore = score;
//           move = { y, x }
//           grid[move.y][move.x] = ai;
//         }
//       }
//     }
//   }
//   player = human;
// }

// let scores = {
//   X: 10,
//   O: -10,
//   tie: 0
// }

// function miniMax(grid, depth, maximizing) {
//   let result = checkWinner();
//   if (state === "startScreen") {
//     if (result !== null) {
//       return scores[result];
//     }

//     if (maximizing) {
//       let bestScore = -Infinity;
//       for (let y = 0; y < GRID_SIZE; y++) {
//         for (let x = 0; x < GRID_SIZE; x++) {
//           if (grid[y][x] === '') {
//             grid[y][x] = ai;
//             let score = miniMax(grid, depth + 1, false);
//             grid[y][x] = '';
//             bestScore = max(score, bestScore)
//           }
//         }
//       }
//       return bestScore;
//     }
//     else {
//       let bestScore = Infinity;
//       for (let y = 0; y < GRID_SIZE; y++) {
//         for (let x = 0; x < 3; x++) {
//           if (grid[y][x] == '') {
//             grid[y][x] = human;
//             let score = miniMax(grid, depth + 1, true);
//             grid[y][x] = '';
//             bestScore = min(score, bestScore);
//           }
//         }
//       }
//       return bestScore;
//     }
//   }
// }