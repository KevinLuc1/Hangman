var Letter = require("./letter.js")

module.exports= function Word(word) {
	var letters = [];
	var wordArray = word.split("");
	//pushes letter objects into word array
	wordArray.forEach(function(value){
		letters.push(new Letter(value));
	})
	//number of guesses allowed
	this.guessesRemain = 10;
	//isGuessed is true when entire word is guessed
	this.isGuessed = false;

	this.letterInWord = function(userGuess){
		this.guessesRemain--;
		this.guessed = letters.every(function(letter){
			if (userGuess === letter.name){
				letter.guessed = true;
			}
			return letter.guessed;
		})
	}
	// to display word on console
	this.display = function(){
		var string = "";
		letters.forEach(function(letter){
			string += letter.display()
		});
		console.log( " "+string+"   Guesses remaining:"+ this.guessesRemain);
	}
}

