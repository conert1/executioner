const data = require("../words.json");

class Hangman {
  constructor(word, list) {
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

// let ran = Math.floor(Math.random() * 50)
// console.log(ran)
// console.log(data.movies[ran])
// console.log(data.techCompanies[ran])
// console.log(data.ProgrammingLanguages[ran])
// console.log(data.mythicalCreatures[ran])
// console.log(data.cartoonCharacters[ran])
// console.log(data.funActivities[ran])
// console.log(data.produce[ran])
// console.log(data.animals[ran])
// console.log(data.periodicTableElements[ran])
// console.log(data.planets[ran])
// console.log(data.body_parts[ran])
// console.log(data.scientists[ran])
// console.log(data.countries[ran])
// console.log(data.cities[ran])
// console.log(data.tv_shows[ran])
// console.log(data.famous_people[ran])
