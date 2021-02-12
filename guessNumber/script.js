'use strict';
/*
console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = '🎄 Correct Number!')
);

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 19;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/* secret number login */
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  // since 0 is falsy value hence !guess - No input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number 👎'
    displayMessage('No number 👎');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    // Change the color of the background when correct number
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Change the width of the number box
    document.querySelector('.number').style.width = '30rem';

    // Set the number and display the secret number
    document.querySelector('.number').textContent = secretNumber;

    // Storing highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High : 🔝' : 'Too Low : ⬇️';
      // score--;
      displayMessage(guess > secretNumber ? 'Too High : 🔝' : 'Too Low : ⬇️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 💣');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// restore the again the element , after clickin again
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
