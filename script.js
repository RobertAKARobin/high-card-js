var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    for (var value = 0; value < values.length; value++) {
      for (var suit = 0; suit < suits.length; suit++) {
        this.deck.push([values[value], suits[suit]]);
      }
    }
    // console.log(this.deck);
  },
  shuffleDeck: function(){
    // Fisher-Yates shuffle!
    var hold, randomIndex;
    // loop through the deck in reverse order
    for (var i = this.deck.length - 1; i > 0; i--) {
      // generate a random index -> Round down((random decimal * number of remaining cards))
      randomIndex = Math.floor(Math.random() * (i + 1));
      // set the current loop's value to the variable "hold"
      hold = this.deck[i];
      // swap the current loop's value with the value at the random index
      this.deck[i] = this.deck[randomIndex];
      // replace the value at random index with the current loops value
      this.deck[randomIndex] = hold;
      // repeat until no values remain to be shuffled
    }
    // console.log(this.deck);

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
