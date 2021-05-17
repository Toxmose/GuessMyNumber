"use strict";

let score = 20;
const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = " 💩 Oops ! No number 💩";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = " 🎉 BINGO 🎉 ";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 🌡 Too high 🌡";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 🙈 GAME OVER 🙈 ";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < secretNumber) {
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
