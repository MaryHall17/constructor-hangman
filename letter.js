var word = require("./word.js");

// console.log(word.chosenWord);
// console.log(word.wordArray);

var chosenWord = word.chosenWord;
var displayWord = word.displayWord;
var wordArray = word.wordArray;



function Letter(wordBlanks, revealWord) {
	this.wordBlanks = wordBlanks;

	this.revealWord = function () {
		console.log(chosenWord);
		var letters = [];
		
		for (i = 0; i < chosenWord.length; i++) {

			letters.push(chosenWord[i]);
		}
			// console.log(letters);
			exports.first = {
				letters: letters,
				guessFunction: this.revealWord

			}

		
	}

		
}

Letter.prototype.displayBlanks = function () {
	console.log(this.wordBlanks);
};

function IncorrectLetters(incorrectLetters) {
	this.incorrectLetters = incorrectLetters;
	exports.second = {
		incorrectLetters: incorrectLetters
	}
}
	




// chosenWord.displayBlanks();
var blankWord = new Letter(displayWord);
if (chosenWord === wordArray[0]) {
	var chromIncorrect = new IncorrectLetters(["a", "b", "d", "e", "f", "g", "i", "j", "k", "l", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
} else if (chosenWord === wordArray[1]) {
	var lucinaIncorrect = new IncorrectLetters(["b", "d", "e", "f", "g", "h", "j", "k", "m", "o", "p", "q", "r", "s", "t", "v", "w", "x","y", "z"]);
} else if (chosenWord === wordArray[2]) {
	var robinIncorrect = new IncorrectLetters(["a", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "p", "q", "s", "t", "u", "v", "w", 'x', "y", "z"]);
} else if (chosenWord === wordArray[3]) {
	var tikiIncorrect = new IncorrectLetters(["a", "b", "c", "d", "e", "f", "g", "h", "j", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"]);
} else if (chosenWord === wordArray[4]) {
	var nowiIncorrect = new IncorrectLetters(["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]);
} else if (chosenWord === wordArray[5]) {
	var lissaIncorrect = new IncorrectLetters(["b", "c", "d", "e", "f", "g", "h", "j", "k", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"]);
} else if (chosenWord === wordArray[6]) {
	var frederickIncorrect = new IncorrectLetters(["a", "b", "g", "h", "j", "l", "m", "n", "o", "p", "q", "s", "t", "u", "v", "w", "x", "y", "z"]);
} else if (chosenWord === wordArray[7]) {
	var stahlIncorrect = new IncorrectLetters(["b", "c", "d", "e", "f", "g", "i", "j", "k", "m", "n", "o", "p", "q", "r", "u", "v", "w", "x", "y", "z"]);
}

 
blankWord.displayBlanks();
// blankWord.displayBlanks();
blankWord.revealWord();