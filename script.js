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

// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Function
btnRoll.addEventListener("click", function () {
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

    current0El.textContent = currentScore;
  } else {
    // Switch to Next Player
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player-active");
    player1El.classList.toggle("player-active");
  }
});
