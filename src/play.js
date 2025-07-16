const data = require("../words.json");

class Hangman {
  constructor(word, list, globalTheme) {
    this.globalTheme = globalTheme;
    this.word = word;
    this.initListeners();
    this.list = list;
    this.turns = 7;
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

    if (this.match == false) {
      this.turns--;
      switch (this.turns) {
        case 6:
          // console.log(this.turns);
          document.getElementById("pole").style.display = "block";
          break;
        case 5:
          document.getElementById("head").style.display = "block";
          break;
        case 4:
          document.getElementById("bbody").style.display = "block";
          break;
        case 3:
          console.log(this.turns);
          document.getElementById("legs").style.display = "block";
          break;
        case 2:
          document.getElementById("stool").style.display = "block";
          break;

        case 1:
          const graphics = document.getElementById("hang-graphics");
          const stool = document.getElementById("stool");

          graphics.classList.remove("animate__animated", "animate__shakeY");
          void graphics.offsetWidth;
          graphics.classList.add("animate__animated", "animate__shakeY");

          stool.classList.remove("animate__fadeInUp");
          stool.classList.add("animate__animated", "animate__hinge");

          stool.addEventListener("animationend", function handleHingeEnd() {
            stool.style.display = "none";
            stool.removeEventListener("animationend", handleHingeEnd);
          });

          break;
      }
      if (this.turns <= 1) {
        setTimeout(() => {
          this.gameOver();
        }, 2000);
      }
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
