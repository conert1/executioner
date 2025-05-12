const {Hangman} = require("./play")
const wordToGuess = require("../words.json")

function chosenWord(){
  return wordToGuess.ProgrammingLanguages[1]
}


let hang = new Hangman(chosenWord())
// const elements = document.querySelectorAll("#input > div");
//   elements.forEach((element, index) => {
//     element.addEventListener("click", () => {
//       hang.clickHandler(index+1);
//     });
//   });


  // function handler(event) {
  //   // Return or log the letter that was clicked
  //   const letter = event.target.textContent;
  //   console.log(letter);
  //   return letter;
  // }
  
  // // Attach the handler to all elements with class "key"
  // document.querySelectorAll('.key').forEach(key => {
  //   key.addEventListener('click', handler);
  // });
  
 

  chosenWord()

  module.exports={chosenWord}