var letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require("inquirer");
var correctLetters = letter.first.letters;
var incorrectLetters = letter.second.incorrectLetters;
var guessFunction = letter.first.guessFunction;
var chosenWord = word.chosenWord;
var displayWord = word.displayWord;


 


var guesses = 9;
var guessedLetters = [];

function guessLetter () {
	if (guesses > 0 && displayWord !== chosenWord) {
		inquirer.prompt([
		{
			name: "guess",
			message: "Guess a letter."
		}

		]).then(function(inquirerResponse) {
			for (i = 0; i < correctLetters.length; i++) {
				if (inquirerResponse.guess === correctLetters[i]) {
					console.log(true);
				
					
					
					displayWord = displayWord.replace(displayWord[i], inquirerResponse.guess);
					
					
							
				
				} 

			}

			for (i = 0; i < incorrectLetters.length; i++) {
				if (inquirerResponse.guess === incorrectLetters[i]) {
					guesses--;
					console.log("Sorry, guess again.");
				}
			}



			
			console.log(displayWord);
			guessedLetters.push(inquirerResponse.guess);
			console.log("Letters guessed: " + guessedLetters);
			console.log(guesses);
			guessLetter();
		})
	} else if (displayWord === chosenWord) {
		console.log("Congrats! You won.");
	} else {
		console.log("Sorry, you lost.");
	}
}

guessLetter();

