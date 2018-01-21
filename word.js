function Word(word, randomizeWord, transformWord) {
	this.word = word;
	// console.log(this.word);
	console.log(this.word.length);
	this.randomizeWord = function() {
		var number = Math.floor((Math.random() * this.word.length));
		this.word = this.word[number];
		word = this.word;
		console.log(word);
		
	}

}


var wordArray = new Word(["Chrom", "Lucina", "Robin", "Tiki", "Nowi", "Lissa", "Frederick", "Stahl"]);

wordArray.randomizeWord();