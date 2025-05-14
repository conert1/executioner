const { Hangman } = require("./play");
const wordToGuess = require("../words.json");

function chosenWord() {
  // themeSelector()
  //choose topic
  let guess = Math.floor(Math.random() * Object.keys(wordToGuess.technology).length)
  console.log("number of items  =  " +Object.keys(wordToGuess.technology).length)
  console.log("guess       " + guess)
  //choose word from the topic
  let wordGuessNumber = Math.floor(Math.random() * Object.keys(wordToGuess.technology).length) 
  // let actualWord = 
  console.log(wordToGuess.technology)
  return wordToGuess.technology.techCompanies[guess];
}
function themeSelector(theme){

  return selected_theme
}

function initializePlay() {
  let number = [];
  for (let i = 0; i < chosenWord().length; i++) {
    // if there is a space then replace the "_" with an empty space
    // to see win check if there is an "_" in the game if not then it is a WIN!!! 
    if(chosenWord()[i] == " "){
      number.push(" ")
    }else{
      number.push("_");
    }
  }
  document.getElementById("play-area").innerHTML = number.join("");
  return number;
}
initializePlay();
let hang = new Hangman(chosenWord(), initializePlay());

chosenWord();

module.exports = { chosenWord, initializePlay };
