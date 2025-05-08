alert("hello")
const data = require("../words.json")

let word = "hello"

function hang(){
    let play = true
    let letter
    while(play == true){
        // console.log("guess the word")
        // letter = 
        // letter = process.argv.slice(2); // Remove the first two elements
        // console.log('Arguments:', letter);

        // console.log("hello")

        process.stdout.write('Enter your name: ');

        process.stdin.on('data', (data) => {
            const name = data.toString().trim();
            console.log(`Hello, ${name}!`);
            process.exit(); // Exit the process after receiving input
          });
    }
}




hang()



























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