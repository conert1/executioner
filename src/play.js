const data = require("../words.json");

class Hangman {
  constructor(word, list, globalTheme) {
    this.globalTheme = globalTheme;
    this.word = word;
    this.initListeners(); 
    this.list = list;
    this.turns = 6;
    this.match = false;
  }

  // event listeners for the buttons(letters)
  initListeners() {
    document.querySelectorAll(".key").forEach((key) => {
      key.addEventListener("click", (event) => this.clickHandler(event));
    });
  }

  clickHandler(event) {
    const letter = event.target.textContent.toUpperCase();

    for (let i = 0; i < this.word.split("").length; i++) {
      if (letter == this.word.split("")[i].toUpperCase()) {
        this.list[i] = letter;
        this.match = true;
        document.getElementById(letter)?.classList.add("fade-out");
      } else {
        document.getElementById(letter)?.classList.add("fade-out");
      }
    }
    document.getElementById("play-area").innerHTML = this.list.join("");
    if (!this.list.includes("_")) {
      this.gameWon();
    }
    if (this.turns <= 0) {
      this.gameOver();
    }
    if (this.match == false) {
      this.turns--;
    }
    this.match = false;
  }

  gameWon() {
    this.hideGraphics();
    document.getElementById("game-won").style.display = "block";
  }
  gameOver() {
    document.getElementById("game-lost").style.display = "block";
    this.hideGraphics();
  }

  hideGraphics() {
    document.getElementById("hang-graphics").style.display = "none";
    document.getElementById("play-area").style.display = "none";
    document.getElementById("global-theme").style.display = "none";
    document.getElementById("input").style.display = "none";
  }
}

module.exports = { Hangman };
