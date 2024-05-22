// DOM elements instantiation
// Get the year element to dynamically set the current year in the footer
const footerDate = document.getElementById('year');
// Get the grid element which will contain the tic-tac-toe board
const grid = document.getElementById('grid');
// Get the winner element to display the game result
const winnerDiv = document.getElementById('winner');

// Global variables initialization
// Current player indicator ('X' or 'O')
let currentPlayer = 'X';
// Game board array to keep track of moves, initially empty
let gameBoard = ['', '', '', '', '', '', '', '', ''];
// Flag to indicate if the game is over
let isGameOver = false;

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

// Check winner based on winPatterns
// Function to check if there is a winner or a draw
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
      return gameBoard[a]; // Return the winning player ('X' or 'O')
    }
  }
  // Return 'Draw' if all positions are filled and no winner
  return gameBoard.includes('') ? null : 'Draw';
}

// Click handler to verify winning status
// Function to handle a cell click event
function handleClick(event, index) {
  // Ignore clicks if the game is over or the cell is already filled
  if (isGameOver || gameBoard[index]) return;

  // Update the game board and display the current player's move
  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  // Check for a winner or draw after the move
  const result = checkWinner();
  if (result) {
    isGameOver = true; // Set the game over flag
    // Display the result message
    winnerDiv.textContent =
      result === 'Draw' ? "It's a Draw!" : `${result} Wins!`;
    winnerDiv.classList.remove('hidden'); // Show the winner message
  } else {
    // Switch the current player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
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
      cell.classList.add(`player-${currentPlayer.toLowerCase()}-bg`); // Add player-specific background color
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
