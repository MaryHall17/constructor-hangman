var word = require("./word.js");

// console.log(word.chosenWord);

var chosenWord = word.chosenWord;
// console.log(chosenWord);
// console.log(word.displayWord);
var displayWord = word.displayWord;
// console.log(displayWord);


function Letter(wordBlanks, revealWord) {
	this.wordBlanks = wordBlanks;

	// this.displayBlanks = function () {
	// 	console.log(this.wordBlanks);
	// },
	this.revealWord = function () {
		console.log(chosenWord);
		var letters = [];
		
		for (i = 0; i < chosenWord.length; i++) {
			// console.log(chosenWord.charAt(i));
			letters.push(chosenWord[i]);
			


			// console.log(letters);
			// if (user.letter === chosenWord.charAt(i) && guesses > 0) {
			// 	var flipLetter = replace(displayWord.charAt(i), user.letter);
			// 	console.log(flipLetter);
			// 	console.log("That's correct! Guess another letter.");
			// 	return true
			// } 
			// guesses --;
			// console.log("Wrong. Guess again. You have " + guesses + " guesses left.");
			// return false
		}
			console.log(letters);
			module.exports = {
				letters: letters,
				guessFunction: this.revealWord

			}

		
		
	}

		
}

Letter.prototype.displayBlanks = function () {
	console.log(this.wordBlanks);
};


// chosenWord.displayBlanks();
var blankWord = new Letter(displayWord);
blankWord.displayBlanks();
// blankWord.displayBlanks();
blankWord.revealWord();