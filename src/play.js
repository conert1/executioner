
const data = require("../words.json")


// class Hangman {
//     constructor(word) {
//        this.word= word 
//     }

//     clickHandler(number){
//         console.log(this.word)   
//         console.log(handler()) 
//     }
    
    
// }

class Hangman {
    constructor(word) {
        this.word = word;
        this.initListeners(); // set up click events
    }

    initListeners() {
        document.querySelectorAll('.key').forEach(key => {
            key.addEventListener('click', (event) => this.clickHandler(event));
        });
    }

    clickHandler(event) {
        const letter = event.target.textContent;
        console.log('Word:', this.word);
        console.log('Clicked letter:', letter);
        // You can add more logic here, e.g. checking if the letter is in this.word
    }
}


// function hang(){
//     let words = data.ProgrammingLanguages[2]
//     let correctGuess = document.getElementById("play-area")

//     correctGuess.innerHTML = words
// }

// function handler(event) {
//     // Return or log the letter that was clicked
//     const letter = event.target.textContent;
//     console.log(letter);
//     return letter;
//   }
  
//   // Attach the handler to all elements with class "key"
//   document.querySelectorAll('.key').forEach(key => {
//     key.addEventListener('click', handler);
//   });
  


// document.onload
// hang()



module.exports = {Hangman}
















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