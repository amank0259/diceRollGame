"use strict";

//  Selecting Elements
const score0El = document.querySelector("#score-0");
const score1El = document.getElementById("score-1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-dice");
const btnHold = document.querySelector(".btn-hold");

// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling Dice Function
btnRoll.addEventListener("click", function () {
  //1.  Generate a Random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log("haaaaa");
  console.log(dice);
  // 2.  Display Dice
  diceEl.classList.remove("hidden");
  diceEl.src = `Alea_${dice}.png`;
});
