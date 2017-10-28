var game = require("./game.js");
var inquirer = require("inquirer");


console.log("---------------");
console.log(" Welcome to the Pokemon Hangman Game");
console.log("---------------");
console.log(" Guess the Pokemon!");
console.log("---------------");

function start(){
	var word = game.getWord();

	//console log the word
	word.display();

	//gets the user's guess
	getUserGuess(word);
}

start();

function getUserGuess(word){

	inquirer.prompt([
		{
			type: "input",
			name: "letter",
			message: "Enter a letter"
		}
	])
	.then(function(response){
		console.log("hello")
		word.letterInWord(response.letter);
		word.display();

		if (!word.guessed){
			if(word.guessesRemain > 0){
				getUserGuess(word);
			}else {
				console.log("out of guesses, game over!");
				start();
			}
		}
		else if (word.guessed === true){
			console.log("you found the word, nice job!");
			start();
		}
	})
}

userGuess();