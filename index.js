const inquirer = require('inquirer');
const chalkPipe = require('chalk-pipe');
var Word = require("./word");

function app() {
    // declaring some variables...
    let wordList = ["awesome", "great", "terrific", "wonderful", "outstanding", "marvelous"];
    let guessedList = [];
    let answerArray = [];
    var randomWord;

    // var wordDisplay;
    // var guess;
    // var charGuess;

    // random word function... storing it as a function in a variable for some reason?
    var randomWord = function() {
            return randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        }
        // calling random word function 
    randomWord();
    var randomWordArray = randomWord.split("");
    // storing the random word as a parameter of the Word constructor
    let word = new Word(randomWord);

    // Creating a new word + the array of letter objects
    word.makeWord();

    // creating a constant function for showing the word, which will be called over and over again


    function guesser() {
        var showWord = word.showWord();

        // make sure the guess hasn 't been made already, if so, create new random word, restarts app 
        if (!showWord.includes("_")) {
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
                var charGuess = answer.input;
                word.checkWord(charGuess);
                console.log(word);
                console.log("else ran");
                var wordArray = word.letters;
                wordArray.forEach(element => {
                    console.log(element.char);
                });

                // if (guessedList.includes(charGuess)) {
                //     console.log(chalkPipe('blue.bold')(`You already guessed ${charGuess}`));
                // } else {
                //     guessedList.push(charGuess);
                //     console.log(`Letters guessed: ${guessedList}`);

                //     if (randomWordArray.includes(charGuess)) {
                //         console.log(chalkPipe('green.bold')('Correct!'));
                //         for (var i = 0; i < word.letters.length; i++) {
                //             if (word.letters[i] === charGuess) {
                //                 answerArray[i] = charGuess;
                //             }
                //         }
                //     } else {
                //         console.log(chalkPipe('red.bold')('Wrong!'));
                //     }
                // }

                console.log(`${answerArray.join(" ")}`);

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