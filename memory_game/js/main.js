
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{   rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"}
];

var cardsInPlay = [];


var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
alert ("You found a match!"); }
else {
alert ("Sorry, try again.");}
 }

var flipCard = function () {
var cardId = this.getAttribute('data-id'); 
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);

cardsInPlay.push(cards[cardId].rank);

this.setAttribute('src', cards[cardId].cardImage);

   if (cardsInPlay.length === 2) {
        
checkForMatch(); }
}


var createBoard = function (){
	for (var i = 0; i < cards.length; i++) {
    // Logic here
    var cardElement = document.createElement('img');
cardElement.setAttribute('src','images/back.png');
cardElement.setAttribute('data-id', i);
cardElement.addEventListener('click', flipCard);
document.getElementById("game-board").appendChild(cardElement);
 
} }

createBoard();

var reset = function(){
location.reload();
}

/*console.log("user flipped queen")
console.log("user flipped king")

if (cardsInPlay === 2 ){

} 
else if (cardsInPlay[0] === cardsInPlay[1] ) {
 alert("You found a match!");
}else {
	alert ("Sorry, try again.");
} 

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);*/


