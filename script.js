var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function() { // running continous loop in console
  for (i = 0; i < values.length; j++) {
      for (j = 0; j < suits.length; j++) {
        game.deck.push(values[i]+suits[j]);
      }
  }
}
      },
  shuffleDeck: function(){

  },
  getMorePlayers: function(){

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
