var Letter = require('./letter');

const Word = function(word) {

    this.word = word;

    this.letters = [];

    this.makeWord = function() {
        for (var i = 0; i < word.length; i++) {
            var letter = new Letter(word[i]);
            this.letters.push(letter);
        }
    }

    this.checkWord = function(charGuess) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].checkGuess(charGuess);
        }
    }

    this.showWord = function() {
        var wordDisplay = [];
        for (var i = 0; i < this.letters.length; i++) {
            wordDisplay.push(this.letters[i].showChar());
        }
        return wordDisplay.join(" ");
    }

}

module.exports = Word;



// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// * An array of `new` Letter objects representing the letters of the underlying word X

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)