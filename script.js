var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
      var deck = [];
        for( var v = 0; v < values.length; v++ ) {
          for( var s = 0; s < suits.length; s++ ) {
            this.deck.push(values[v], suits[s]);
          }
        }
    return this.deck;
  },
  shuffleDeck: function(){
    this.deck.sort(function(a, b){
      return a-b;
    });
    return this.deck;
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
