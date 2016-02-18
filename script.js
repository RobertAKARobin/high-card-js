var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var cardValues = [];
var game = {
  deck: [],
  players: [],
  hands: [],

  buildDeck: function(){
    for (i = 0; i < values.length; i++){
      game.deck.push([values[i], "Clubs"]);
      game.deck.push([values[i], "Hearts"]);
      game.deck.push([values[i], "Diamonds"]);
      game.deck.push([values[i], "Spades"]);
    }
  },
//Stolen from the internet. Using this so I can move on. Will revisit if I have time (I'm not gonna have time tonight 😞).//
  shuffleDeck: function(){
    	for(var j, x, i = game.deck.length; i; j = parseInt(Math.random() * i), x = game.deck[--i], game.deck[i] = game.deck[j], game.deck[j] = x);
    	return game.deck;
  },
//gets at least 2 players//
  getMorePlayers: function(){
    while (game.players.length < 2) {
      var playerNames = prompt("Enter player's name.");
      game.players.push([playerNames])
    }
  },
  deal: function(){
    for (i = 0; i < game.players.length; i++){
      game.hands.push([game.players[i], game.deck[i]]);
    }
  },
//So far my findHighestCard function only populates the array cardValues and populates it with just the card values, e.g. turns ["Jeff", [6, "Hearts"]], ["Joe", [8, "Spades"]] into [[7],[6]].

  findHighestCard: function(){
    for (i = 0; i < game.hands.length; i++){
      cardValues.push([hands[i][1][0]])
    }
  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
