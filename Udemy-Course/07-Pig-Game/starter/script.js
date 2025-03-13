'use strict';
// Selecting elements
// section elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// score elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
// current score elements
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// dice element
const diceEl = document.querySelector('.dice');
// button elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// state variables
let scores, currentScore, activePlayer, gameCondition;

// Functions
// Starting conditions
const init = function () {
  // reset internals
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameCondition = true;

  // reset visible elements
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');

  // remove player-winner class
  if (player0El.classList.contains('player--winner')) {
    player0El.classList.remove('player--winner');
  } else if (player1El.classList.contains('player--winner')) {
    player1El.classList.remove('player--winner');
  }

  // remove active-player class from player1 and make player0 active-player
  if (player1El.classList.contains('player--active')) {
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};
init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (gameCondition) {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Lose current score and switch to next player
      switchPlayer();
    }
  }
});

// hold functionality
btnHold.addEventListener('click', function () {
  if (gameCondition) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      gameCondition = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
      diceEl.classList.add('hidden');

      // Switch to next player
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
