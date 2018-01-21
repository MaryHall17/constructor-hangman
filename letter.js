var word = require("./word.js");

console.log(word.chosenWord);

var chosenWord = word.chosenWord;
console.log(chosenWord);
console.log(word.displayWord);
var displayWord = word.displayWord;
console.log(displayWord);

function Letter(wordBlanks, revealWord) {
	// this.wordBlanks = wordBlanks;

	this.revealWord = function () {
		console.log(this.wordBlanks);
	}

		
}


// chosenWord.displayBlanks();
var blankWord = new Letter(displayWord);
blankWord.revealWord();