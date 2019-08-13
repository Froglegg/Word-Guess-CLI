// var Word = require("word.js");
// const word = new Word();

const inquirer = require('inquirer');
const userInput = process.argv[2];
const chalkPipe = require('chalk-pipe');

function app() {
    // declaring some variables...
    let wordList = ["awesome", "great", "terrific", "wonderful", "outstanding", "marvelous"];
    let answerArray = [];
    let guessedList = [];
    var randomWord;

    // random word function... storing it as a function in a variable for some reason?
    var randomWord = function() {
            return randomWord = wordList[Math.floor(Math.random() * wordList.length)].split('');
        }
        // calling random word function 
    randomWord();

    console.log(`calling random word function on line 22 word is ${randomWord}`);

    // creating spaces that match the length of the random word, adding them to the answer array which gets logged after every inquirer prompt is answered
    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
    }

    function guesser() {
        // make sure the guess hasn't been made already, if so, create new random word, restarts app 
        if (answerArray.join("") == randomWord.join("")) {
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
                if (guessedList.includes(answer.input)) {
                    console.log(chalkPipe('blue.bold')(`You already guessed ${answer.input}`));
                } else {
                    guessedList.push(answer.input);
                    console.log(`Guess: ${answer.input}`);
                    console.log(`Letters guessed: ${guessedList}`);
                    if (randomWord.includes(answer.input)) {
                        console.log(chalkPipe('green.bold')('Correct!'));
                        for (var i = 0; i < randomWord.length; i++) {
                            if (randomWord[i] === answer.input) {
                                answerArray[i] = answer.input;
                            }
                        }
                    } else {
                        console.log(chalkPipe('red.bold')('Wrong!'));
                    }
                }

                // console.log(randomWord, guessedList, randomWord.some(v => guessedList.includes(v)));

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