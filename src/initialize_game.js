const {Hangman} = require("./play")
const wordToGuess = require("../words.json")

function chosenWord(){
  return wordToGuess.ProgrammingLanguages[1]
}

function initializePlay(){
  let number = []
  for(let i=0; i<chosenWord().length; i++){
    number.push("_")
  }
  document.getElementById("play-area").innerHTML = number
  return number
}
initializePlay()
let hang = new Hangman(chosenWord(), initializePlay())
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

  module.exports={chosenWord, initializePlay}