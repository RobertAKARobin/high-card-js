var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    var self = this;
    values.forEach(function(value) {
      suits.forEach(function(suit) {
        self.deck.push([value, suit])
      });
    });
  },
  shuffleDeck: function(){
    this.deck.sort(function() {
      return 0.5 - Math.random()
    });
  },
  getMorePlayers: function(){
    var addPlayer = prompt("Do you want to add additional players? Yes or No?");
    var playerName = prompt ("Hello Player. What is your name?");
      if (addPlayer === "Yes") {
        this.players.push(playerName);
      }
  },
  deal: function(){
    var self = this;
    deck.forEach(function(deck) {
      players.forEach(function(players) {
        self.hands.push([deck, players])
      });
    });
  },
  //I'm not sure if this 'deal' method is supposed to populate the 'hands' array. I took the same approach as I did with 'buildDeck' method but the current code [I think] would assign all 52 cards to each player. Not sure how to make this work...
  findHighestCard: function(){
    var winner;

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
