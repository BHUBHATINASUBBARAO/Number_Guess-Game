 let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  const feedback = document.getElementById('feedback');
  const guessDisplay = document.getElementById('guessCount');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  guessCount =5;
  guessDisplay.textContent = `Guesses: ${guessCount}`;

  if (userGuess === secretNumber) {
    feedback.textContent = `🎉 Correct! You guessed it in ${guessCount} tries.`;
    document.getElementById('guessInput').disabled = true;
  } else if (userGuess < secretNumber) {
    feedback.textContent = "Too low! Try again.";
  } else {
    feedback.textContent = "Too high! Try again.";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  document.getElementById('guessInput').value = '';
  document.getElementById('guessInput').disabled = false;
  document.getElementById('feedback').textContent = '';
  document.getElementById('guessCount').textContent = 'Guesses: 0';
}