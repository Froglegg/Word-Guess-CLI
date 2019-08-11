const Letter = function(char, guessed) {

    this.char = char;
    this.guessed = false;
    this.checkGuess = function(char) {
        if (this.guessed === true) {
            guess === false;
            return char;
        } else {
            return "_";
        }
    }
}

module.exports = Letter;

// https: //jsbin.com/facawetume/edit?js,console

    // * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

    // * A string value to store the underlying character for the letter

    // * A boolean value that stores whether that letter has been guessed yet

    // * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

    // * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

    // randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    // getHint = wordList.indexOf(randomWord);
    // // console.log(getHint);
    // hint = hintList[getHint];
    // // console.log(hint);
    // for (var i = 0; i < randomWord.length; i++) {
    //     answerArray[i] = "_";
    // };
    // space = answerArray.join(" ");