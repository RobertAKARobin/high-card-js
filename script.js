var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],

// This is getting the value of each card and the suit of each card for 52 cards

  buildDeck: function(){
    var self = this;
    for(var s = 0; i < self.suits.length; s++) {
      for(var v = 0; v < self.values.length; v++) {
        self.deck.push(values[v], suits[s]);
      }
    }
    alert("The deck has been built.");
    return self.deck;
  },

// This takes the deck array after it's built and reorders it

  shuffleDeck: function(){
    var self = this;
    new self.deck.sort;
    alert("The deck has been shuffled.");
    return self.deck;
  },

// This pushes a new player to the players' array

  getMorePlayers: function(player){
    addPlayer = confirm("Would you like to add a player?");
      if (addPlayer == true) {
      this.players.push(player);
      }
      else {
      alert("Ok, no new players will be added.");
      }
    },

// This takes the deck array and randomly assigns one card per player to the hand array

  deal: function(){
    var self = this;
    for (var p  = 0; p < self.players.length; p++) {
      self.hands[Math.floor(Math.random() * (self.deck.length - 1))];
    }
    console.log("The players have each been delth a card.");
  },

// This finds the highest card in the hands array.

  findHighestCard: function(){
    var self = this;
    var largest = 0;
    for (h = 0; h <= self.hands.length; h++) {
      if (self.hands[h] > largest);
      largest = self.hands[h];
    }
    console.log(largest);
  },

// This uses the findHighestCard function to determine which player in the array is the winner. Assume each player position in the array is the same as the position of their hand in the hands array.

  announceWinners: function(){
    var self = this;
    for (w = 0; w <= self.player.length; w++)
    if self.player(findHighestCard())
  },

// This should clear the game object.

  playANewGame: function(){
    var self = this;
    self.deck = [];
    self.players = [];
    self.hands = [];
  }
}
