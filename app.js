var inquirer = require("inquirer");
var wordArray = ["Chrom", "Sumia", "Robin", "Lucina", "Henry", "Nowi"];
// var guesses = 9;

function Hangman (word, guesses, letter) {
	
	this.word = word;
	this.letter = letter;
	this.guesses = guesses;
	console.log(this.guesses);
	console.log(this.word);

}
	Hangman.pickWord = function() {
		
		var number = Math.floor((Math.random() * wordArray.length));
		this.word = wordArray[number];
		//rename to a global var to pass to a function to replace the word with blanks
		word = this.word
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

	Hangman.guessLetter = function() {

	}

	Hangman.pickWord();
	Hangman(word, 9);
	// Hangman.wordBlank(word);
