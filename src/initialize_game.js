const {Hangman} = require("./play")

let hang = new Hangman
const elements = document.querySelectorAll("#input > div");
  elements.forEach((element, index) => {
    element.addEventListener("click", () => {
      hang.clickHandler(index + 1);
    });
  });