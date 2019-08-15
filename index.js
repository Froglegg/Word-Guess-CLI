const inquirer = require('inquirer');
const chalkPipe = require('chalk-pipe');
var Word = require("./word");

function app() {
    // declaring some variables...
    let wordList = ["awesome", "great", "terrific", "wonderful", "outstanding", "marvelous"];
    let guessedList = [];
    let count = 5;

    // random word function... storing it as a function so that it could potentially be called somewhere else
    var randomWord = function() {
        return randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    }

    // calling random word function 
    randomWord();

    // splitting the randomword into an array, and then joining it again into a format that could be compared to the Word Display array that the word.showWord() function produces
    var randomWordArray = randomWord.split("").join(" ");

    // storing the random word as a parameter of the Word constructor
    let word = new Word(randomWord);

    // Creating a new word + the array of letter objects
    word.makeWord();

    function guesser() {

        // makes sure the guess hasn't been made already, or if the user runs out of attempts. If so, restarts app
        if (count < 1) {
            console.log(chalkPipe('red.bold')('you lose!'));
            app();
        } else if (word.showWord() == randomWordArray) {
            console.log(chalkPipe(`green.bold`)(`you win!`));
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

                        //running the checkWord function to update the "guessed" boolean for the letter being guessed
                        word.checkWord(charGuess);

                        //checking to make sure the user didn't already guess this letter; not necessary, but a helpful feature
                        if (guessedList.includes(charGuess)) {
                            console.log(chalkPipe('blue.bold')(`\nYou already guessed ${charGuess}`));
                        } else {
                            guessedList.push(charGuess);
                            // if the random word includes the character guessed
                            if (randomWord.includes(charGuess)) {
                                console.log(chalkPipe('green.bold')('\nCorrect!'));

                                //console log what is returned from the showWord function
                                console.log(word.showWord());

                            } else {
                                console.log(chalkPipe('red.bold')('\nWrong!'));
                                console.log(`\nLetters guessed: ${guessedList}`);

                                // decrease the count
                                count--;
                                console.log(`Attempts remaining: ${chalkPipe(`red.bold`)(+count)}`);
                        //console log what is returned from the showWord function
                        console.log(word.showWord());

                    }
                }
                console.log("\n");

                // recursion, re-initiate inquirer
                guesser();

            });
        }


    }

    // guesser starts the inquirer prompt, unless word has been guessed, then it will restart the app
    guesser();
}
// launches appplication
app();