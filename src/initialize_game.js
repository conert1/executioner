const { Hangman } = require("./play");
const wordToGuess = require("../words.json");

let globalTheme;

function themeSelector(theme) {
  const keys = Object.keys(wordToGuess[theme]);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  globalTheme = randomKey;
  let guess = Math.floor(
    Math.random() * Object.keys(wordToGuess[theme][randomKey]).length
  );
  
  return wordToGuess[theme][randomKey][guess];
}

function initializePlay(selectedTheme) {
  let number = [];
  for (let i = 0; i < selectedTheme.length; i++) {
    if (selectedTheme[i] == " ") {
      number.push(" ");
    } else {
      number.push("_");
    }
  }
  document.getElementById("play-area").innerHTML = number.join("");
  document.getElementById("global-theme").innerHTML = globalTheme;
  return number;
}

document.querySelectorAll("#theme button").forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.id;
    const selectedTheme = themeSelector(theme);

    const display = initializePlay(selectedTheme);
    let hang = new Hangman(selectedTheme, display, globalTheme);

    // Optionally store hang for future gameplay input
    window.currentHangmanGame = hang;
  });
});

module.exports = { initializePlay };
