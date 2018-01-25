var letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require("inquirer");
var correctLetters = letter.first.letters;
var incorrectLetters = letter.second.incorrectLetters;
console.log(correctLetters);
console.log(incorrectLetters);
var guessFunction = letter.first.guessFunction;
var chosenWord = word.chosenWord;
var displayWord = word.displayWord;

// console.log(letter.method);
// console.log(guessFunction);
// console.log(letters);
// console.log(incorrectLetters);
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
			console.log(correctLetters);
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

