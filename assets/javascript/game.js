

var wins = 0;
var losses = 0;
var numberofGuessLeft = 9;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
 'l', 'm', 'n', 'o', 'p', 'q', 'r' , 's', 't', 'u', 'v', 'w', 'x', 'y' ,'z']
var userGuesses = [];

document.onkeyup = function(event) {
	var userGuess = event.key.toLowerCase();

	//var userGuess = //.toLowerCase//
	var alphabet = Math.floor(Math.random()*26)
	var computerGuess = alphabet;
	console.log(computerGuess);

	userGuesses.push(userGuess); // Save the guess

	
	if(userGuess == computerGuess){
		wins++;
		userGuesses = [];
		numberofGuessLeft = 9;
	}
	else{
		numberofGuessLeft--;
	}


	if(numberofGuessLeft == 0){
		// THis is the 'reset game area'
		losses++;
		numberofGuessLeft = 9;
		userGuesses = [];
		// Clear user guesses
	}


	var html = "<h1>The Psychic Game</h1>" +
	"<p>Guess a letter!" + "</p>" +
	"<p>Wins:" + wins + "</p>" +  
	"<p>Losses:" + losses + "</p>" +
	"<p>Number of Guess Left:" + numberofGuessLeft + "</p>";
	//console.log(html)

	var guessString = "";
	for (var i = 0; i < userGuesses.length; i++)
	{
	   guessString = guessString + userGuesses[i] + "    ";
	}

	html = html + "<p>Letters You Guessed:" + guessString + "</p>";

	
	 document.querySelector("#game").innerHTML = html;

	
}
