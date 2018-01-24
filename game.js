var letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require("inquirer");
var correctLetters = letter.letters;
// var guessesLeft = letter.guessesLeft;
var guessFunction = letter.guessFunction;
var chosenWord = word.chosenWord;
var displayWord = word.displayWord;
// var revealWord = letter.letters;
 

//For loop within a for loop for letter array, then blankOutWord. If user input equals, letter in letter array, replace blankOutWord[i] with letter[i]
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
					// var revealWord = displayWord.replace(displayWord[i], correctLetters[i]);
					// for (i = 0; i < displayWord.length; i++) {
						// if (correctLetters[i] !== inquirerResponse.guess) {
						displayWord = displayWord.replace(displayWord[i], inquirerResponse.guess);
						// console.log("Something happened");


						// }	
					// }	
				
				} 
			} else if (guesses > 0 && inquirerResponse.guess !== correctLetters[i]) {
				console.log("Sorry, guess again!");
				guesses--;
			} else {
				console.log("Sorry, you lost.");
			}
			// console.log(revealWord);
			console.log(displayWord);
			console.log(correctLetters);
			guessedLetters.push(inquirerResponse.guess);
			console.log("Letters guessed: " + guessedLetters);
			guessLetter();
		})
	}
}

guessLetter();

