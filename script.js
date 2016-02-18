var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],

  buildDeck: function(){
    for(var s = 0; s < suits.length; s++){
      for (var v = 0; v < values.length; v++){
      game.deck.push([values[v], suits[s]])}
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
