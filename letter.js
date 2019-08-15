const Letter = function(char) {
    this.char = char;
    this.guessed = false;

    this.checkGuess = function(charGuess) {
        if (charGuess === this.char) {
            return this.guessed = true;
        } else {
            return this.guessed = false;
        }
    }

    this.showChar = function() {
        if (this.char === " ") {
            return " ";
        } else if (!this.guessed) {
            return "_";
        } else {
            return this.char;
        }
    }
}


module.exports = Letter;