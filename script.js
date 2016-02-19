var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    var self = this;
    values.forEach(function(value){
    suits.forEach(function(suit){
      self.deck.push([value, suit]);
    });
  });
  },
  shuffleDeck: function(){
    var self = this;
    values.forEach(function(value){
      self.deck(math.random())

  },
  getMorePlayers: function(){
    var game = addPlayers()
  },
  deal: function(){
    var cards = (values, suits)
    this.cards = new Array();
  },
  findHighestCard: function(){
    var cards = (values, suits)
    array.pop("A")
  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
