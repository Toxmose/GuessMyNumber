"use strict";

let score = 20;
let secretNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no input detected
  if (!guess) {
    document.querySelector(".message").textContent = " 💩 Oops ! No number 💩";
  }

  // guess is correct
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = " 🎉 BINGO 🎉 ";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    score--;
    document.querySelector(".score").textContent = score;
  }

  // guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 🌡 Too high 🌡";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 🙈 GAME OVER 🙈 ";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }

  // guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " ❄ Too low ❄ ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 🙈 GAME OVER 🙈 ";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = " Start guessing... ";
  document.querySelector(".guess").value = "";
});
