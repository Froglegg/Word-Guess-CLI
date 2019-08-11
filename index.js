// var Word = require("word.js");
// const word = new Word();

const inquirer = require('inquirer');
const userInput = process.argv[2];
const chalkPipe = require('chalk-pipe');

// declaring some variables...
let wordList = ["awesome", "great", "terrific"];
let answerArray = [];
let guessedList = [];
var randomWord;

// random word function... storing it in a variable for some reason?
var randomWord = function() {
    return randomWord = wordList[Math.floor(Math.random() * wordList.length)].split('');
}

// calling random word function 
randomWord();

// creating spaces that match the length of the random word
for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}

function guesser() {

    // if (answerArray.join("") == randomWord.join("")) {
    //     console.log("YOU DID IT!!!");
    //     guessedList = [];
    //     answerArray = [];
    //     new randomWord();
    //     guesser();
    // }

    // console.log(`line 25 random word:  ${randomWord}`);
    // console.log(`line 26 guessed list: ${guessedList}`);

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

            return 'Please enter a single letter';
        }
    }]).then(answer => {

        guessedList.push(answer.input);

        console.log(`Letters guessed: ${guessedList}`);

        if (randomWord.includes(answer.input)) {
            console.log(chalkPipe('blue.bold')('Correct!'));
        } else {
            console.log(chalkPipe('blue.bold')('Wrong!'));
        }

        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === answer.input) {
                answerArray[i] = answer.input;
            }
        }

        console.log(`asnwer array joined: ${answerArray.join(" ")}`);

        guesser();
    });
}

guesser();


// The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses