const { Hangman } = require("./play");
const wordToGuess = require("../words.json");

function chosenWord() {
  return wordToGuess.techCompanies[0];
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
