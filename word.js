function Word(word, hangmanWord) {
	this.word = word;
	//Randomize the word and transform into blanks in same function to avoid scoping issues
	this.hangmanWord = function() {
		var number = Math.floor((Math.random() * this.word.length));
		this.word = this.word[number];
		chosenWord = this.word;
		console.log(this.word);
		module.exports = {
			chosenWord: this.word
		}
		// var blankOutWord = this.word;
		// for (i = 0; i < this.word.length; i++) {
		// 	blankOutWord = blankOutWord.replace(blankOutWord.charAt(i), "_");
		// 	console.log(this.word.charAt(i));
		// }

		// console.log(blankOutWord);
		
	}

}


var wordArray = new Word(["Chrom", "Lucina", "Robin", "Tiki", "Nowi", "Lissa", "Frederick", "Stahl"]);

wordArray.hangmanWord();
// word.transformWord();
// console.log(word);
