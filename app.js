var inquirer = require("inquirer");
var wordArray = ["Chrom", "Sumia", "Robin", "Lucina", "Henry", "Nowi"];

function Hangman (word, letter) {
	this.word = word;
	this.letter = letter;

}
	Hangman.pickWord = function() {
		var number = Math.floor((Math.random() * wordArray.length));
		// console.log(wordArray[number]);
		this.word = wordArray[number];
		word = this.word
		// console.log(this.word);
		// console.log(word);
		Hangman.wordBlank (word);
		}
	
	Hangman.wordBlank = function (word) {

		
		var transformWord = word;
		for (i = 0; i < word.length; i++) {
			transformWord = transformWord.replace(transformWord.charAt(i), "_");

			this.letter = word.charAt(i);
			
		}
			console.log(transformWord);
		
	}

	Hangman.pickWord()
	// Hangman.wordBlank(word);
