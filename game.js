var Word = require("./word.js");

this.getWord = function(){
	var gameWords = ["pikachu", "squirtle", 
	"charmander", "onix", "mew", "jigglypuff", 
	"meowth", "oddish", "ditto", "snorlax"];

	//pick a random word
	var randomWord = gameWords[Math.floor(Math.random()* gameWords.length)];

	// makes a new word using constructor function
	var word = new Word(randomWord);

	// returns word obj
	return word;


}