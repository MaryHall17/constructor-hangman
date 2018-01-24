var letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require("inquirer");
var correctLetters = letter.letters;
// var guessesLeft = letter.guessesLeft;
var guessFunction = letter.guessFunction;
var chosenWord = word.chosenWord;
 

//For loop within a for loop for letter array, then blankOutWord. If user input equals, letter in letter array, replace blankOutWord[i] with letter[i]
var guesses = 9;

function guessLetter () {
	if (guesses > 0) {
		inquirer.prompt([
		{
			name: "guess",
			message: "Guess a letter."
		}

		]).then(function(inquirerResponse) {
			console.log(inquirerResponse.guess);
		})
	}
}

guessLetter();

