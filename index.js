// App DOM elements Init instantiation

// Get the grid element which will contain the tic-tac-toe board
const grid = document.getElementById('grid');
// Get the winner element to display the game result
const winnerDiv = document.getElementById('winner');
// Reset button
const resetBtn = document.getElementById('resetBtn');
// Set the current year in the footer section
const footerDate = document.getElementById('year');

/* ------- Global variables initialization ----- */
// Current player indicator ('X' or 'O')
let currentPlayer = 'X';
// Game board array to keep track of moves, initially empty
let gameBoard = new Array(9).fill('');
// Flag to indicate if the game is over
let isGameOver = false;

/* ------- Winning Pattern Grid's cells Styling ----- */
// Save winning pattern positions in the grid
let arrWinPattern = [];

// Define Highlight colors for winning pattern
const patternColor = currentPlayer === 'X' ? '#fffb23' : '#FF2323';

let strWinningStatus = '';

// Game winning patterns declaration
// Array of arrays, each sub-array represents a winning combination of indices
const winPatterns = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Top-left to bottom-right diagonal
  [2, 4, 6], // Top-right to bottom-left diagonal
];

// Check if there is a winner or a draw
//  based on the above's winPatterns
function checkWinner() {
  // Iterate over all winning patterns
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    // Check if the board positions match and are not empty
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      arrWinPattern.push(a, b, c);
      strWinningStatus = gameBoard[a];
      return gameBoard[a]; // Return the winning player ('X' or 'O')
    }
  }
  // Return 'Draw' if all positions are filled and no winner
  strWinningStatus = gameBoard.includes('') ? null : 'Draw';
  return strWinningStatus;
}

// Function to handle a cell click event to verify winning status
function handleClick(event, index) {
  // Ignore clicks if the game is over or the cell is already filled
  if (isGameOver || gameBoard[index]) return;

  // Update the game board and display the current player's move
  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  // Check for a winner or draw after the move
  const result = checkWinner();
  if (result) {
    console.log(gameBoard);
    isGameOver = true; // Set the game over flag
    // Display the result message
    winnerDiv.textContent =
      result === 'Draw' ? "It's a Draw!" : `${result} Wins!`;
    // Show the winner message Label
    winnerDiv.classList.remove('hidden');

    // Highlight the winning pattern on screen
    console.log('PATTERN: ', arrWinPattern);
    const [first, second, third] = arrWinPattern;
    highlightWinningPattern(first, second, third);

    // Disable all the remaining divs that weren't selected
    const matches = document.querySelectorAll('div.cell');
    matches.forEach((elem, ndx) => {
      if (elem.className === 'cell') {
        elem.className = 'cell disabled-cell';
      }
    });
  } else {
    // Switch the current player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Highlight winning pattern with a different color
function highlightWinningPattern(first, second, third) {
  children = grid.childNodes;
  children[first].style.border = `2px solid ${patternColor}`;
  children[second].style.border = `2px solid ${patternColor}`;
  children[third].style.border = `2px solid ${patternColor}`;
}

// Highlight winning pattern with a different color
function clearWinningPattern() {
  children = grid.childNodes;
  const [first, second, third] = arrWinPattern;
  children[first].style.border = `2px solid #38b4b4`;
  children[second].style.border = '2px solid #38b4b4';
  children[third].style.border = '2px solid #38b4b4';
}

// Board creation and player colors setup on click event
// Function to create the game board
function createBoard() {
  // Iterate over the game board array to create each cell
  gameBoard.forEach((_, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell'); // Add the 'cell' class for styling
    // Add a click event listener to handle cell clicks
    cell.addEventListener('click', (event) => {
      // If Not Game Over, add player-specific background color
      if (!isGameOver) {
        cell.classList.add(
          `player-${currentPlayer.toLowerCase()}-bg`
        );
      }
      handleClick(event, index); // Handle the click event
    });
    grid.appendChild(cell); // Append the cell to the grid
  });
}

// Set current date year on the footer part dynamically
// Display the current year in the footer
footerDate.textContent = new Date().getFullYear();

// Draw the main board on the screen
// Create and display the game board
createBoard();

/* -------- App DOM elements Event Listeners -------- */
resetBtn.addEventListener('click', (event) => {
  // Reset winning pattern Highlights

  strWinningStatus !== 'Draw' && clearWinningPattern();

  // Clear cells and add init class "cell"
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.textContent = '';
    cell.className = 'cell';
  });

  // Hide the winner message Label
  winnerDiv.classList.add('hidden');

  /* -------- Reset global variables to init status -------- */
  currentPlayer = 'X';
  gameBoard = new Array(9).fill('');
  isGameOver = false;
  arrWinPattern = [];
});
