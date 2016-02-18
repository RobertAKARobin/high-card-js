var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
function card (value,suit ) {
this.value = value;
this.suit = suit;
}
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
      var deck = [];
        for( var v = 0; v < this.values.length; v++ ) {
          for( var s = 0; s < this.suits.length; s++ ) {
            deck.push( new card(this.values[v], this.suits[s]));
          }
        }
    return deck;
  },
  shuffleDeck: function(){
    deck.sort(function(a, b){
      return a-b
    });
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
