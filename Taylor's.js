

var wins = 0;
var losses = 0;
var numberofGuessLeft = 9;
var userGuessList = [];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
 'l', 'm', 'n', 'o', 'p', 'q', 'r' , 's', 't', 'u', 'v', 'w', 'x', 'y' ,'z']

var gameState = {
	wins: 0,
	losses: 0,
	numberofGuessLeft: 9,
	userGuess: "",
	computerGuess: "",

	userGuessList: []
}

function printHtml(gameState) {
	var html = "<h1>The Psychic Game</h1>" +
	"<p>Guess a letter!" +   gameState.computerGuess  + "</p>" +
	"<p>Wins:" + gameState.wins + "</p>" +  
	"<p>Losses:" + gameState.losses + "</p>" +
	"<p>Number of Guess Left:" + gameState.numberofGuessLeft + "</p>" +
	"<p>Letters You Guessed:";

	var characterList = "";
	for (var i = 0; i < gameState.userGuessList.length; ++i)
	{
	   characterList = characterList + gameState.userGuessList[i] + ","
	}
	//console.log(html)

	 html = html + characterList + "</p>"
	
	 document.querySelector("#game").innerHTML = html;
}

document.onkeyup = function(event) {
	gameState.userGuess = event.key.toLowerCase();
	gameState.userGuessList.push(event.key.toLowerCase());
	//var userGuess = //.toLowerCase//
	var randomIdx = Math.floor(Math.random() * alphabet.length);

	gameState.computerGuess = alphabet[randomIdx];
	console.log(gameState);

	
	if(gameState.userGuess == gameState.computerGuess){
		gameState.wins++;
	}
	else{
		gameState.numberofGuessLeft--;
	}

	if(numberofGuessLeft == 0){
		gameState.losses++;
	}

	printHtml(gameState);
}

window.onload = function() {
	printHtml(gameState);
}

