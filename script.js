"use strict";
//  Selecting Elements
const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");
const score0El = document.querySelector("#score-0");
const score1El = document.getElementById("score-1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-dice");
const btnHold = document.querySelector(".btn-hold");
const current0El = document.querySelector("#current-0");
const current1El = document.querySelector("#current-1");

let score, currentScore, activePlayer, playing;

// Starting Condition
const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");

  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.add("player-active");
};

init();

// Rolling Dice Function
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1.  Generate a Random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log("haaaaa");
    console.log(dice);
    // 2.  Display Dice
    diceEl.classList.remove("hidden");
    diceEl.src = `Alea_${dice}.png`;

    //   3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to Current Player
      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to Next Player
      document.getElementById(`current-${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle("player-active");
      player1El.classList.toggle("player-active");
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    score[activePlayer] += currentScore;
    // score[1] = score[1 + currentScore]
    document.getElementById(`score-${activePlayer}`).textContent =
      score[activePlayer];

    // 2. Check if player's score is >= 100
    if (score[activePlayer] >= 50) {
      // Finish the Game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
      //   currentScore = 0;
    } else {
      // Switch to the next player
      document.getElementById(`current-${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle("player-active");
      player1El.classList.toggle("player-active");
    }
  }
});

btnNew.addEventListener("click", function () {
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.remove("player-winner");
  document;
  init();
});
