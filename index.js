const inquirer = require('inquirer');
const chalkPipe = require('chalk-pipe');
var Word = require("./word");

function app() {
    // declaring some variables...
    let wordList = ["awesome", "great", "terrific", "wonderful", "outstanding", "marvelous"];
    let answerArray = [];
    let guessedList = [];
    var randomWord;
    var guess;

    // random word function... storing it as a function in a variable for some reason?
    var randomWord = function() {
            return randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        }
        // calling random word function 
    randomWord();

    function guesser() {

        // make sure the guess hasn't been made already, if so, create new random word, restarts app 
        if (testWord.lettersArray.join("") == randomWord.join) {
            console.log(chalkPipe('green.bold')(`Correct! You guessed it!`));
            app();
        } else {
            inquirer.prompt([{
                type: "input",
                name: "input",
                message: "Guess a Letter!",
                validate: function(value) {
                    var pass = value.match(
                        /^[a-zA-Z]$/
                    );
                    if (pass) {
                        return true;
                    }

                    return chalkPipe('red.bold')('Please enter a single letter');
                }
            }]).then(answer => {

                guesser();
            });
        }
    }
    // starts the inquirer prompt, unless word has been guessed, then it will restart the app 
    guesser();
}

// starts the application
app();





// The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses