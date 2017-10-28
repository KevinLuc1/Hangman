


// this.Letter = function(value) {
// 	this.value = value;
// 	this.guessed = false
// 	this.letterToDisplay = function() {
// 		if (this.guessed === true){
// 			return this.value;
// 		}
// 		else {
// 			return "_"
// 		}
// 	}
// }

// exports.Letter = Letter;


//----

// Constructor for letter objects
function Letter(value){

// name is a string containing any one single alphabet 
this.value = value;
// when the user guesses a letter correctly, it turns the guessed should be set to true.
this.guessed = false;

}

// this method is used to controls display mode of name property, whether it should show or stay hidden
Letter.prototype.display = function(){
		if(this.guessed === false){
			// hide the name
			return '_';
		}else{
			return this.value;
		}
	}

module.exports = Letter;