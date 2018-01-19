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
		console.log(this.word);
		}
		
	Hangman.pickWord();