var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (var i = 0; i < values.length; i++){
      deck.push([values[i], "Clubs"]);
      deck.push([values[i], "Hearts"]);
      deck.push([values[i], "Diamonds"]);
      deck.push([values[i], "Spades"]);
    }
  },
  shuffleDeck: function(){
    	for(var j, x, i = deck.length; i; j = parseInt(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
    	return deck;
    }
  },
  getMorePlayers: function(){
    var playerNames = prompt("Enter player's name.");
    players.push([playerNames]);
  }
},
  deal: function(){

  },
  findHighestCard: function(){

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
