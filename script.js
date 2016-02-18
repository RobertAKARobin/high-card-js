/* This is woefully incomplete, and I admit to feeling quite lost on a lot of these.*/

var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){  // The deck is a nested array.
    var self = this;  // Each card constitutes an element of the deck array.
    values.forEach(function(value) {
      suits.forEach(function(suit) {
        self.deck.push([value, suit])
      });
    });
  },
  shuffleDeck: function(){  // The attempt here is to randomize the cards.
    this.deck.sort(function(){
    return 0.5 - Math.random()})
      }
    })
  },
  getMorePlayers: function(){
    var addPlayer = prompt("Would you like to add more players?" , "Yes or No");
    var playerName = prompt("What is your name?", "Your Name Here");
      if (addPlayer === "Yes") {
        this.players.push(playerName);
      }
  },
  deal: function(){  // deal() should distribute the first or last element of the array to each player
    var self = this;
    players.forEach(function(player) {
      hands.forEach(function(hand) {
        self.hands.push([player, hand])
      });
    });
  },
  findHighestCard: function(){ // The function should find the highest value element in the hands array.

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
