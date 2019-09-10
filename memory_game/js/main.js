console.log("Up and running!");

//Card Tables

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

//Card 1 - 4 variable

var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

// Else if statement to check if two cards are in play

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Oops, try again!");
	}
}


	console.log( "User has flipped " + cardsInPlay);