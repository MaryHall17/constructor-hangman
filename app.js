var inquirer = require("inquirer");
var wordArray = ["Chrom", "Sumia", "Robin", "Lucina", "Henry", "Nowi"];
// var guesses = 9;

function Hangman (word, guesses, letter) {
	
	this.word = word;
	this.letter = letter;
	this.guesses = guesses;
	// console.log(this.guesses);
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
			//make letter a global var to pass into the guess function
			letter = this.letter;
			console.log(this.letter);
			
		}
			console.log(transformWord);
			// console.log(this.letter);
			
		
	}

	// var guess = 9;

	// Hangman.guessLetter = function() {

	// 	if (guess > 0) {

	// 		inquirer.prompt([
	// 			{
	// 				name: "letter",
	// 				message: "Guess a letter."
	// 			}
					
	// 			]).then(function() {
	// 				for (i = 0; i < word.length; i++) {
	// 					if letter === word[i]
	// 				}
	// 			})
	// 		}
	// 	}

	// }

	Hangman.pickWord();
	Hangman(word);
	// Hangman.wordBlank(word);
