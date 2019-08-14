var Letter = require('./letter');

const Word = function(word, answerInput) {
    this.letters = word.split('');
    this.answerInput = answerInput;

    this.returnWord = function() {
        var lettersArray = [];
        this.letters.forEach(element => {
            var letter = new Letter(element);
            letter.checkGuess(answerInput);
            return lettersArray.push(letter.showChar());
        });
        console.log(lettersArray);
        return lettersArray;
    }
}

let newWord = new Word("hey", "y");

newWord.returnWord();

module.exports = Word;



// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// * An array of `new` Letter objects representing the letters of the underlying word X

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)