'use strict';
/*
console.log(document.querySelector('.message').textContent);
// WHAT IS DOM?
// Documentation Object Model:
// Structured representation of html documents. allows JavaScript to access html elements and styles to maipulate them
// change text, html attributes, and even css styles
// DOM is complete representation of the html document so that we can manipulate it in many ways

// SELECTING AND MANIPULATING ELEMENTS
document.querySelector('.message').textContent = 'Correct Number!!';
document.querySelector('.score').textContent = '100';
document.querySelector('.number').textContent = '37';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const lostGame = function () {
  document.querySelector('.number').textContent = secretNumber;
  displayMessage('You lost the game!');
  document.querySelector('.score').textContent = 0;
  // Change CSS styling
  document.querySelector('body').style.backgroundColor = '#ff4343'; // changes background color
  document.querySelector('.number').style.width = '30rem'; // changes number box width
};
const wonGame = function () {
  document.querySelector('.number').textContent = secretNumber;
  displayMessage('Correct number!');
  // Change CSS styling
  document.querySelector('body').style.backgroundColor = '#60b347'; // changes background color
  document.querySelector('.number').style.width = '30rem'; // changes number box width
};

// "Check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    wonGame();
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When the guess is not correct
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      lostGame();
    }
  }
});

// "Again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222'; // changes background color
  document.querySelector('.number').style.width = '15rem'; // changes number box width
});
