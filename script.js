var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],

  buildDeck: function(){
    var self = this;
    for (var v = 0; v < values.length; v++){
      for (var s = 0; s < suits.length; s++)
      this.deck.push([values], [suits]);
    }
  }


/* build the deck by combining items in var values and var suits*/

  },
  /* shuffleDeck: function() {
    var shuffle = math.random(deck)} */

/*shuffle deck by randomizing deck key inside var game
  }, */
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
