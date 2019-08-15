const Guesser = function() {

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

module.exports = Guesser;