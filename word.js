function Word(word, hangmanWord) {
	this.word = word;
	// console.log(this.word);
	console.log(this.word.length);
	this.hangmanWord = function() {
		var number = Math.floor((Math.random() * this.word.length));
		this.word = this.word[number];
		console.log(this.word);
		var blankOutWord = this.word;
		for (i = 0; i < this.word.length; i++) {
			blankOutWord = blankOutWord.replace(blankOutWord.charAt(i), "_");
		}

		console.log(blankOutWord);
		
	}

}


var wordArray = new Word(["Chrom", "Lucina", "Robin", "Tiki", "Nowi", "Lissa", "Frederick", "Stahl"]);

wordArray.hangmanWord();
// word.transformWord();
// console.log(word);