const data = require("../words.json");

class Hangman {
  constructor(word, list, globalTheme) {
    this.globalTheme = globalTheme
    this.word = word;
    this.initListeners(); // set up click events
    this.list = list;
    this.turns = 7;
    this.match = false
  }

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
        this.match=true
        // document.getElementById(letter).style.display = "none"
        document.getElementById(letter)?.classList.add("fade-out");
      }else{
        document.getElementById(letter)?.classList.add("fade-out");
      }
    }
    document.getElementById("play-area").innerHTML = this.list.join("");
    if (!this.list.includes("_")) {
      this.gameWon()
    }
    if(this.turns <=0){
      this.gameOver()
    }
    if(this.match == false){
      this.turns--
    }
    this.match = false
    
  }


  gameWon(){
    alert("YOU HAVE WON!!!!!")
  }
  gameOver(){
    alert("Game over")
  }
}

module.exports = { Hangman };
