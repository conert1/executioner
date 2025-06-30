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
    if (this.turns <= 1) {
      this.gameOver();
    }
    if (this.match == false) {
      
      this.turns--;
      switch(this.turns){
        case 5:
          console.log(this.turns)
            document.getElementById("pole").style.display = "block";
            break
        case 4:
            document.getElementById("head").style.display = "block";
            break
        case 3:
            document.getElementById("bbody").style.display = "block";
            break
        case 2:
          console.log(this.turns)
            document.getElementById("legs").style.display = "block";
            break
        case 1:
          console.log(this.turns)
          
              const graphics = document.getElementById("hang-graphics");
  graphics.classList.remove("animate__animated", "animate__shakeY");
  void graphics.offsetWidth; // Force reflow
  graphics.classList.add("animate__animated", "animate__shakeY");
  document.getElementById("legs").style.display = "none";

            document.getElementById("legs2").style.display = "block";

            break
        case 0:
          console.log(this.turns)
          case 0:
  console.log(this.turns);
  document.getElementById("legs").style.display = "block";

  // Make the game container shake
$("#hang-graphics").addClass("animate__animated animate__shakeY")

  break;
        // case 5:
        //   console.log(this.turns)
        //     document.getElementById("kick-chair").style.display = "block";
        //     break
 
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
