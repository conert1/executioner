const { Hangman } = require("./play");
const wordToGuess = require("../words.json");

let globalTheme 
const objectName = {
  // "tv_entertainment": tv_entertainment,
  "otherr": other
}

function chosenWord(theme) {
  // themeSelector()
  //choose topic
  // console.log("here      "+ theme)
  // let guess = Math.floor(Math.random() * Object.keys(wordToGuess.technology).length)
  // console.log("number of items  =  " +Object.keys(wordToGuess.technology).length)
  // console.log("guess       " + guess)

  //choose word from the topic
  // let wordGuessNumber = Math.floor(Math.random() * Object.keys(wordToGuess.technology).length) 
  // let actualWord = 
  // let tt = theme
  // console.log("---------------------------------   "+wordToGuess)
  // return wordToGuess.technology.techCompanies[guess];
}
function themeSelector(theme){


  // let selected_theme = wordToGuess[theme]
  const keys = Object.keys(wordToGuess[theme]);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
    console.log("here   -----------   " + randomKey)
  globalTheme = randomKey
  let guess = Math.floor(Math.random() * Object.keys(wordToGuess[theme][randomKey]).length)
  console.log(wordToGuess[theme][randomKey][guess])

  return wordToGuess[theme][randomKey][guess]

}

function initializePlay(selectedTheme) {
  let number = [];
  for (let i = 0; i < selectedTheme.length; i++) {
    // if there is a space then replace the "_" with an empty space
    // to see win check if there is an "_" in the game if not then it is a WIN!!! 
    if(selectedTheme[i] == " "){
      number.push(" ")
    }else{
      number.push("_");
    }
  }
  document.getElementById("play-area").innerHTML = number.join("");
  return number;
}


// initializePlay();
// let hang = new Hangman(chosenWord(), initializePlay());

// chosenWord(theme);

document.querySelectorAll("#theme button").forEach(button => {
  button.addEventListener("click", () => {
    const theme = button.id; // e.g., "technology"
    // console.log(theme)
    const selectedTheme = themeSelector(theme);
    // chosenWord(selectedTheme)

    // const { word, display } = initializePlay(selectedTheme);
    const display = initializePlay(selectedTheme)
    let hang = new Hangman(selectedTheme, display, globalTheme);

    // Optionally store hang for future gameplay input
    window.currentHangmanGame = hang;
  });
});

module.exports = { initializePlay};
