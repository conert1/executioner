const { Hangman } = require("./play");
const wordToGuess = require("../words.json");

window.onload = function() {
      document.getElementById("hang-graphics").style.display = "none";
      document.getElementById("play-area").style.display = "none";
      document.getElementById("input").style.display = "none";
      document.getElementById("global-theme").style.display = "none";
      document.getElementById("game-lost").style.display = "none";
      document.getElementById("game-won").style.display = "none";

    };

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
  document.getElementById("global-theme").innerHTML = globalTheme + "remember to remove ==" + selectedTheme;
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
    
    document.getElementById("theme").style.display = "none"
    document.getElementById("hang-graphics").style.display = "block";
    document.getElementById("play-area").style.display = "block";
    document.getElementById("global-theme").style.display = "block";
    document.getElementById("input").style.display = "block";

    // hangman image
        document.getElementById("pole").style.display = "none"
        document.getElementById("stool").style.display = "none"
        document.getElementById("rope").style.display = "none"
    document.getElementById("head").style.display = "none"
    document.getElementById("bbody").style.display = "none"
    document.getElementById("legs").style.display = "none"
    document.getElementById("kick-chair").style.display = "none"

  });
});

module.exports = { initializePlay };
