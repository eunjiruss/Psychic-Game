

var wins = 0;
var losses = 0;
var numberofGuessLeft = 10;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
 'l', 'm', 'n', 'o', 'p', 'q', 'r' , 's', 't', 'u', 'v', 'w', 'x', 'y' ,'z']
var userGuesses = [];

window.onload = function() {
	alert("May the Force be with you!")
}

document.onkeyup = function(event) {
	var userGuess = event.key.toLowerCase();
	//var userGuess = //.toLowerCase//
	var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
	//console.log(computerGuess);
	userGuesses.push(userGuess); // Save the guess


	
	if(userGuess == computerGuess){
		wins++;
		userGuesses = [];
		numberofGuessLeft = 9;
		alert("The Force is trong with this one!")
	}
	else{
		numberofGuessLeft--;
	}


	if(numberofGuessLeft == 0){
		// THis is the 'reset game area'
		losses++;
		numberofGuessLeft = 9;
		userGuesses = [];
		alert("Just let the Force guide you!")
		// Clear user guesses
	}

	var html =
	"<h1>The Psychic Game</h1>" +
	"<p>Guess a letter!" + "</p>" +
	"<p>Wins:" + wins + "</p>" +  
	"<p>Losses:" + losses + "</p>" +
	"<p>Number of Guess Left:" + numberofGuessLeft + "</p>";

	//console.log(html)

	var guessString = "";
	for (var i = 0; i < userGuesses.length; i++)
	{
	   guessString = guessString + userGuesses[i] + " , ";
	}

	html = html + "<p>Letters You Guessed:" + guessString + "</p>";

	
	 document.querySelector("#game").innerHTML = html;

	
}
