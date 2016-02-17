var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [(values.length * suits.length)],
  players: [a, b],
  hands: [1, 2],

  buildDeck: function(){
    for (var i = 0; i < values.length; i++){
      for (var i = 0; i < suits.length; i++)
      console.log(deck [i]);
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
