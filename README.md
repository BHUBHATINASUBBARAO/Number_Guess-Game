 🎯 Number Guessing Game – Full Project Description
📌 Overview
The Number Guessing Game is a beginner-friendly web application that challenges users to guess a randomly generated number between 1 and 100. It provides real-time feedback on each guess and tracks the number of attempts. This project is designed to help new developers understand the basics of web development, including user input handling, DOM manipulation, and JavaScript logic.

🧠 Concept & Process
- Game Initialization:
- When the page loads, the game generates a random number between 1 and 100 using JavaScript.
- A counter is initialized to track the number of guesses.
- User Interaction:
- The user enters a number in the input field and clicks the "Submit Guess" button.
- The game checks the input and compares it to the secret number.
- Feedback Loop:
- If the guess is too low or too high, the game displays a message accordingly.
- If the guess is correct, the game congratulates the user and disables further input.
- Restart Option:
- The user can click the "Restart" button to reset the game, generate a new number, and start over.

✨ Features
- ✅ Random number generation between 1 and 100
- ✅ Input validation to ensure guesses are within range
- ✅ Real-time feedback: "Too high", "Too low", or "Correct!"
- ✅ Guess counter to track number of attempts
- ✅ Restart button to reset the game
- ✅ Clean and responsive UI with CSS styling

🛠️ Implementation Details
HTML
- Provides the structure of the game interface.
- Includes:
- A heading and instructions
- Input field for user guesses
- Buttons for submitting and restarting
- Paragraphs for feedback and guess count
CSS
- Styles the game container for a clean and modern look.
- Adds spacing, colors, and hover effects to buttons.
- Ensures the layout is centered and responsive.
JavaScript
- Handles all game logic:
- Generates the secret number
- Validates user input
- Updates feedback messages
- Tracks and displays guess count
- Resets the game state

🔢 Input & Output
Input
- A number between 1 and 100 entered by the user in the input field.
Output
- Feedback message:
- "Too low! Try again."
- "Too high! Try again."
- "🎉 Correct! You guessed it in X tries."
- Updated guess count displayed below the input.
- Input field disabled after correct guess.

🧑‍💻 Development Workflow
- Setup:
- Create index.html, style.css, and script.js files.
- Link CSS and JS files in the HTML.
- Build UI:
- Design the layout using HTML and style it with CSS.
- Implement Logic:
- Write JavaScript to handle:
- Random number generation
- Input validation
- Feedback messages
- Guess tracking
- Game reset
- Test Functionality:
- Try different inputs to ensure feedback is accurate.
- Verify that the guess counter increments correctly.
- Confirm that the restart button resets all elements.
- Enhance UX:
- Add hover effects and transitions.
- Improve accessibility with input constraints and clear messages.

🚀 Future Improvements
- Add difficulty levels (e.g., Easy: 1–50, Hard: 1–200)
- Store high scores using local storage
- Add sound effects or animations for feedback
- Display a history of previous guesses
