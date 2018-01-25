function Word(word, hangmanWord) {
	this.word = word;
	//Randomize the word and transform into blanks in same function to avoid scoping issues
	this.hangmanWord = function() {
		var number = Math.floor((Math.random() * this.word.length));
		this.word = this.word[number];
		var blankOutWord = this.word;
		for (i = 0; i < this.word.length; i++) {
			blankOutWord = blankOutWord.replace(blankOutWord.charAt(i), "_");
		}

		module.exports = {
			chosenWord: this.word,
			displayWord: blankOutWord,
			wordArray: word
		}
		
	}

}


var wordArray = new Word(["Chrom", "Lucina", "Robin", "Morgan", "Nowi", "Lissa", "Cordelia", "Stahl"]);

wordArray.hangmanWord();

