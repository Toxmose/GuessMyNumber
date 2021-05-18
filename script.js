"use strict";

let score = 20;
let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no input detected
  if (!guess) {
    displayMessage(" 💩 Oops ! No number 💩");
  }

  // guess is correct
  else if (guess === secretNumber) {
    displayMessage(" 🎉 BINGO 🎉 ");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    score--;
    document.querySelector(".score").textContent = score;

    // highscore check
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
      highScore = score;
    } else document.querySelector(".highscore").textContent = highScore;
  }

  // guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? " 🌡 Too high 🌡" : " ❄ Too low ❄ ");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" 🙈 GAME OVER 🙈 ");
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  displayMessage(" Start guessing... ");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
