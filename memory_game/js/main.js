console.log("Up and running!");

//Card Object

var cards = [
   {
      	rank: "queen",
      	suit: "hearts",
      	cardImage: "images/queen-of-hearts.png",
   },
   {
     	rank: "queen",
     	suit: "diamonds",
     	cardImage: "images/queen-of-diamonds.png",
   },

   {
    	rank: "king",
    	suit: "hearts",
    	cardImage: "images/king-of-hearts.png",
   },
    {
    	rank: "king",
    	suit: "diamonds",
    	cardImage: "images/king-of-diamonds.png",
   },
];

var cardsInPlay = [];

//Function to check for matches

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
			alert("Oops, try again!");
		}
}

//Card Flip function

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length ===2) {
	checkForMatch();
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	}
}

flipCard(0);
flipCard(2);