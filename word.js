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
            if (this.letters[i].guessed == false) {
                this.letters[i].checkGuess(charGuess);
            }
        }
        return word.letters;
    }

    this.showWord = function() {
        var wordDisplay = [];
        for (var i = 0; i < this.letters.length; i++) {
            wordDisplay.push(this.letters[i].showChar());
        }
        // return word.letters;
        return wordDisplay.join(" ");
    }

}

module.exports = Word;