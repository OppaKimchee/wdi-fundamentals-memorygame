//creating an array of cards
var cards = ['queen', 'queen', 'king', 'king'];
//cards that are played will be stored in here.
var cardsInPlay = [];

//when did we create this....
//instructions unclear, took me a while to realize createCards == createBoard...
//creates the game board
var createBoard = function(){

	//loop to create the cards from the cards[]
	for(var i = 0; i < cards.length; i++){

		//create the space for the cards
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		//set the attribute for the div to data-card and gives it current card value
		cardElement.setAttribute('data-card', cards[i]);
		//listens for a mouse click event, then steps into isTwoCards function
    	cardElement.addEventListener('click', isTwoCards);
		document.getElementById('game-board').appendChild(cardElement);

	}

}//createBoard()

//function for checking cards selected
var isTwoCards = function(){

	cardsInPlay.push(this.getAttribute('data-card'));
	//check to assign king or queen picture to click event
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src = 'king.png' alt = 'King' />";
	} 
	else {
		this.innerHTML = "<img src = 'queen.png' alt = 'Queen'/>";
	}
	//check when 2 cards are picked to step in isMatch to check for matches
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		//clear played cards
		cardsInPlay = [];
	}

}//isTwoCards()

//function to check for 
var isMatch = function(){

	//check cards in element 0 and 1 of cardsInPlay[]
	if(cardsInPlay[0] == cardsInPlay[1] ){
	alert("You found a match!");
	}
	else
	alert("Sorry, try again.");
	//reset the cards or "unflip" them.
	this.innerHTML = '';

}//isMatch()

createBoard();

/*
var createCards = function(){

	for(var i = 0; i < 4; i++){

	var cardDiv = document.createElement('div');
	cardDiv.innerHTML='<div class="card"></div>';
	document.getElementById('game-board').appendChild(cardDiv);

	}

}
createCards();

if(cardOne == cardTwo){
	alert("You found a match!");
}
else if(cardThree == cardFour){
	alert("You found a match!");
}
else{
	alert("Sorry, try again.");
}
*/