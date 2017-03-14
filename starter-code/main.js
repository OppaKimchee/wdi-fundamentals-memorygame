var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var createCards = function(x){

	for(var i = 0; i < x; i++){

	var cardDiv = document.createElement('div');
	cardDiv.innerHTML='<div class="card"></div>';
	document.getElementById('game-board').appendChild(cardDiv);

	}

}
createCards(4);

/*
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