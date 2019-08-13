const Guesser = function() {

    if(answerArray.join("") == randomWord.join("")){
        console.log(chalkPipe('green.bold')(`Correct! You guessed it!`));
        app();
    }
    else{
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
        if (guessedList.includes(answer.input)){
            console.log(chalkPipe('blue.bold')(`You already guessed ${answer.input}`));
        }
        else {
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
            } else 
            {
                console.log(chalkPipe('red.bold')('Wrong!'));
            } 
        }

        // console.log(randomWord, guessedList, randomWord.some(v => guessedList.includes(v)));

        console.log(`${answerArray.join(" ")}`);

        guesser();
    });
}

}

module.exports = Guesser;
