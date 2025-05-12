const data = require("../words.json");

class Hangman {
  constructor(word, list) {
    this.word = word;
    this.initListeners(); // set up click events
    this.list = list;
  }

  initListeners() {
    document.querySelectorAll(".key").forEach((key) => {
      key.addEventListener("click", (event) => this.clickHandler(event));
    });
  }

  clickHandler(event) {
    const letter = event.target.textContent.toUpperCase();

    for (let i = 0; i < this.word.split("").length; i++) {
      console.log(letter + "   aaannnddd   " + this.word.split("")[i]);
      if (letter == this.word.split("")[i].toUpperCase()) {
        console.log(this.list);
        this.list[i] = letter;
      }
    }
    document.getElementById("play-area").innerHTML = this.list;
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
