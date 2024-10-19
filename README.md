# Just Another Tic Tac Toe Game
Created by **Alvison Hunter** for mentoring and educational purposes only.<br>
**Senior Frontend Developer** at CodeCrafters Labs - October, 18th, 2024

## About this game
This repository contains a simple implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript. The game allows two players to play against each other on a 3x3 grid. The project demonstrates basic web development skills, including DOM manipulation, event handling, and dynamic content updates.

## Features

- **Two-player game:** Players take turns to place their mark (X or O) on the grid.
- **Winner detection:** The game automatically detects and announces the winner or if the game is a draw.
- **Dynamic UI:** The current year is dynamically displayed in the footer, and the game board updates in real-time based on player actions.

## Tools and Technologies Used

- **HTML5:** Provides the structure of the game board and other elements.
- **CSS3:** Styles the game board, cells, and other components to create an attractive and responsive design.
- **JavaScript:** Implements the game logic, including player turns, winner detection, and dynamic UI updates.

## Project Structure

- **index.html:** The main HTML file containing the structure of the game.
- **styles.css:** The CSS file that styles the game board and other elements.
- **index.js:** The JavaScript file that contains the game logic and DOM manipulation.
- **assets:** The folder that contains the game assets such as images, media files and others.

## Getting Started

To get a local copy of the project up and running, follow these simple steps:

1. **Clone the repository:**

    ```bash
    git clone git@github.com:AlvisonHunterArnuero/tik-tak-tok-game.git
    ```

2. **Open the project folder:**

    ```bash
    cd tic-tac-toe-game
    ```

3. **Open `index.html` in your web browser:**

    You can open the `index.html` file directly in your web browser to start playing the game. Additionally, you can also add your local live server to run this file.

## Usage

- Click on a cell in the grid to make a move.
- The game will display the current player's mark (X or O) in the clicked cell.
- The game will automatically detect and announce the winner or if the game is a draw.
- The current year is displayed in the footer.

## Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tic Tac Toe Game</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="wrapper">
        <h1 class="game-title">Welcome to the Tic Tac Toe Game</h1>
        <div class="grid" id="grid"></div>
        <div class="winner hidden" id="winner"></div>
    </div>

    <footer class="footer">
        <p>&copy; <span id="year"></span>
            <a href="https://codecrafterslabs.com/">CodeCrafters Labs</a>. All Rights Reserved. |
            Built Entirely in JavaScript for Educational Purposes.
        </p>
    </footer>
    <script src="index.js"></script>
</body>

</html>
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---