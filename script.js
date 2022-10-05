"use strict";

// console.log(document.querySelector(".input"));
let chances = document.querySelector(".chances").textContent;

document.querySelector(".highScore");

let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);

document.querySelector(".check").addEventListener("click", () => {
  let inputValue = Number(document.querySelector(".input").value);

  if (!inputValue) {
    document.querySelector(".result").textContent = "😶 No Value!";
  } else if (inputValue === randomNumber) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".input").style.fontSize = "2rem";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".result").textContent = "🤩 Correct Answer";
    document.querySelector(".highScore").textContent = chances;
  } else if (inputValue !== randomNumber) {
    chances--;
    if (chances > 0) {
      document.querySelector(".chances").textContent = chances;
    } else {
      document.querySelector(".chances").textContent = 0;
    }

    inputValue > randomNumber
      ? (document.querySelector(".result").textContent = "👠Too High")
      : (document.querySelector(".result").textContent = "🥿 Too Low");
  }
  if (chances <= 0) {
    document.querySelector(".result").textContent = "😈 You Lost!";
  }
});

document.querySelector(".reset").addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".input").value = "";
  document.querySelector(".chances").textContent = 20;
  chances = 20;
  document.querySelector(".result").textContent = "";
  document.querySelector("body").style.backgroundColor = "#565656";
});
