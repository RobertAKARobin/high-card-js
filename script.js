var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],

// This is getting the value of each card and the suit of each card for 52 cards

  buildDeck: function(){
    for(var s = 0; i < suits.length; s++) {
      for(var v = 0; values.lenth; v++) {
        game.deck.push(values[v], suits[s]);
      }
    }
    alert("The deck has been built.");
    return game.deck;
  },

// This takes the deck array after it's built and reorders it

  shuffleDeck: function(){
    new game.deck.sort;
  },

// This pushes a new player or players to the array

  getMorePlayers: function(player){
    addPlayer = confirm("Would you like to add a player?");
      if (addPlayer == true) {
      this.players.push(player);
      }
      else {
      alert("Ok, no new players will be added.");
      }
    },

// This takes the deck array and randomly assigns one card to each player

  deal: function(){
    self = this;
    for (var p  = 0; p < self.players.length; p++)
  },

// This finds the highest card in the hand arrays for each player

  findHighestCard: function(){
    for this.player
  },

// This uses the findHighestCard function to determine which player in the array is the winner

  announceWinners: function(){

  },

// This clears the console to play a new game

  playANewGame: function(){

  }
}
